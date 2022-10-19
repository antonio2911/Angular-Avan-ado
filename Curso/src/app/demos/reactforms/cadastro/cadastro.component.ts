import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericValidation, ValidarMensagem } from './genericsFormValidation';
import { fromEvent, merge, Observable } from 'rxjs';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

cadastroGroup: FormGroup
usuario: Usuario
dadosFormJson:string
public MASKS = MASKS;

validationMessage: ValidarMensagem
genercValidator: GenericValidation
displayMessage: DisplayMessage = {}

constructor(private fb:FormBuilder){
  this.validationMessage = {
    nome: {
      required: 'O nome e requirido',
      minLength: 'O nome precisa ter no minino 2 caracters',
      maxLength: 'O nome precisa ter no maximo 150 caracters'
    },
    cpf: {
      required: 'CPF e obrigatorio',
      cpf: 'CPF em formato inválido!'
    },
    email: {
      required: 'Informe o e-mail',
      email: 'E-mail inválido'
    },
    senha: {
      required: 'Informe a senha',
      rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
    },
    confirmaSenha: {
      required: 'Informe a senha novamente',
      rangeLength: ' senha deve possuir entre 6 e 15 caracteres',
      equalTo: 'As senhas não conferem'
    }
  }
  this.genercValidator = new GenericValidation(this.validationMessage);
}
// metodo do angular e carregado no final apos a renderização de toda a pagina.
  ngAfterViewInit(): void {
    let controleDoEventoBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'))
    
    merge(...controleDoEventoBlurs).subscribe(()=>{
      this.validationMessage = this.genercValidator.processarMensagem(this.cadastroGroup);
    })
  }


ngOnInit()
{

//com formBuilder
this.cadastroGroup = this.fb.group({
  nome: ['', Validators.required],
  cpf: [''],
  email: ['', [Validators.required,Validators.email]],
  senha: [''],
  confirmaSenha:['']
})
  // nescessario para fazer a comparação da senha
  let senha = new FormControl('',[Validators.required,CustomValidators.rangeLength([8,15])])
  let senhaconfirmacao = new FormControl('',[Validators.required,CustomValidators.rangeLength([8,15]),CustomValidators.equalTo(senha)])
  //
//com formBuilder
this.cadastroGroup = this.fb.group({
  nome: ['', [Validators.required, Validators.minLength(2)]],
  cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
  email: ['', [Validators.required,Validators.email]],
  senha: senha,
  confirmaSenha: senhaconfirmacao
})
}  

public adicionarUsuario(){
  if(this.cadastroGroup.dirty && this.cadastroGroup.valid){
    //transformando dados do formulario em objeto
    this.usuario = Object.assign({},this.usuario,this.cadastroGroup.value)
    //tranformando valores do formulario em JSON
    this.dadosFormJson = JSON.stringify(this.cadastroGroup.value)
  }
   
}

}


//-----FormControl------//-----------//
// this.cadastroGroup = new FormGroup({
//   nome: new FormControl(''),
//   cpf: new FormControl(''),
//   email: new FormControl(''),
//   senha: new FormControl(''),
//   confirmaSenha: new FormControl('')

//----------FIM-----------------------//