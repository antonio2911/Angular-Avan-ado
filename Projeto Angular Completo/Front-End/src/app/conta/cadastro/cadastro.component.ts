import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  DisplayMessage,
  GenericValidation,
  ValidarMensagem,
} from 'src/app/utils/genericsFormValidation';
import { Usuario } from '../models/usuarios';
import { ContaService } from '../services/conta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formsInputElements!: ElementRef[];

  usuario: Usuario;
  cadastroForm: FormGroup;
  errors: any[] = [];
  validationMessages: ValidarMensagem = {};
  genericValidation: GenericValidation;
  displayMessage: DisplayMessage = {};
  mudancasNaoSalvas: boolean;

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.validationMessages = {
      email: {
        required: 'Informar o email',
        email: 'E-mail invalido',
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possui entre 6 e 15 caracteres.',
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem',
      },
    };
    this.genericValidation = new GenericValidation(this.validationMessages);
  }

  ngOnInit(): void {
    let senha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);
    let confirmsenha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(senha),
    ]);

    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: confirmsenha,
    });
  }

  ngAfterViewInit(): void {
    let controlsBlurs: Observable<any>[] = this.formsInputElements.map(
      (formsControl: ElementRef) =>
        fromEvent(formsControl.nativeElement, 'blur')
    );
    merge(...controlsBlurs).subscribe(() => {
      this.displayMessage = this.genericValidation.processarMensagem(
        this.cadastroForm
      );
      this.mudancasNaoSalvas = true;
    });
  }

  adicionarConta() {
    if (this.cadastroForm.valid && this.cadastroForm.dirty) {
      this.usuario = Object.assign({}, this.cadastroForm.value);
      //um subscribe faz o processamento do sucesso e da falha
      this.contaService.registrarUsuario(this.usuario).subscribe(
        (sucesso) => {
          this.processarSucesso(sucesso);
        },
        (falha) => {
          this.processarFalha(falha);
        }
      );
      //informação para a contaGuard
      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);
    let toastr = this.toastr.success('Registro realizado com sucesso :)');
    if (toastr) {
      toastr.onHidden.subscribe(() => {
        this.router.navigate(['home']);
      });
    }
  }

  processarFalha(falha: any) {
    this.errors = falha.error.errors;
    this.toastr.error('Ocorreu um Error!, Opa :(');
  }
}
