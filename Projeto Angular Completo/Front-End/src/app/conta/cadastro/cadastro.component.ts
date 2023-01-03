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
import { CustomValidators } from 'ngx-custom-validators';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  DisplayMessage,
  GenericValidation,
  ValidarMensagem,
} from 'src/app/utils/genericsFormValidation';
import { Usuario } from '../models/usuarios';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formsInputElements: ElementRef[];

  usuario: Usuario;
  cadastroForm: FormGroup;
  errors: any[] = [];
  validationMessages: ValidarMensagem = {};
  genericValidation: GenericValidation;
  displayMessage: DisplayMessage = {};
  constructor(private fb: FormBuilder, private contaService: ContaService) {
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
    });
  }

  adicionarConta() {
    if (this.cadastroForm.valid && this.cadastroForm.dirty) {
      this.usuario = Object.assign({}, this.cadastroForm.value);
      this.contaService.registrarUsuario(this.usuario);
    }
  }
}
