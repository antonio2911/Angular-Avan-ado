import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
cadastroGroup: FormGroup
usuario: Usuario
dadosFormJson:string

constructor(private fb:FormBuilder){}
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