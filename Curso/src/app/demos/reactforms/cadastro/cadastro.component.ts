import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models';
<<<<<<< HEAD
=======
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
>>>>>>> 93e6e34 (Pacotes validation e configuração inicial das validações)

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
cadastroGroup: FormGroup
usuario: Usuario
dadosFormJson:string
public MASKS = MASKS;

constructor(private fb:FormBuilder){}
ngOnInit()
{
<<<<<<< HEAD
//com formBuilder
this.cadastroGroup = this.fb.group({
  nome: ['', Validators.required],
  cpf: [''],
  email: ['', [Validators.required,Validators.email]],
  senha: [''],
  confirmaSenha:['']
=======
  // nescessario para fazer a comparação da senha
  let senha = new FormControl('',[Validators.required,CustomValidators.rangeLength([8,15])])
  let senhaconfirmacao = new FormControl('',[Validators.required,CustomValidators.rangeLength([8,15]),CustomValidators.equalTo(senha)])
  //
//com formBuilder
this.cadastroGroup = this.fb.group({
  nome: ['', Validators.required],
  cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
  email: ['', [Validators.required,Validators.email]],
  senha: senha,
  confirmaSenha: senhaconfirmacao
>>>>>>> 93e6e34 (Pacotes validation e configuração inicial das validações)
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