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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formsInputElements!: ElementRef[];

  usuario: Usuario;
  loginForm: FormGroup;
  errors: any[] = [];
  validationMessages: ValidarMensagem = {};
  genericValidation: GenericValidation;
  displayMessage: DisplayMessage = {};

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
    };
    this.genericValidation = new GenericValidation(this.validationMessages);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, CustomValidators.rangeLength([6, 15])],
      ],
    });
  }

  ngAfterViewInit(): void {
    let controlsBlurs: Observable<any>[] = this.formsInputElements.map(
      (formsControl: ElementRef) =>
        fromEvent(formsControl.nativeElement, 'blur')
    );
    merge(...controlsBlurs).subscribe(() => {
      this.displayMessage = this.genericValidation.processarMensagem(
        this.loginForm
      );
    });
  }

  LogarNaConta() {
    this.usuario = Object.assign({}, this.loginForm.value);
    this.contaService.login(this.usuario).subscribe(
      (sucesso) => this.processarSucesso(sucesso),
      (falha) => this.processarFalha(falha)
    );
  }

  processarSucesso(response: any) {
    this.loginForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);
    let toastr = this.toastr.success('Login realizado com sucesso :)');
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
