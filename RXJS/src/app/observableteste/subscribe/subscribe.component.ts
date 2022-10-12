import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  template: `
    <p>
      subscribe works!
    </p>
  `,
  styles: [
  ]
})
export class SubscribeComponent implements OnInit {

usuarioObservable(nome:string,email:string):Observable<Usuario>{
  return new Observable(
    (subscribe) =>{

    if(nome == "Admin"){
      let usuario = new Usuario(nome,email)
      setTimeout(()=> subscribe.next(usuario),1000)

      setTimeout(()=> subscribe.next(usuario),2000)

      setTimeout(()=> subscribe.next(usuario),3000)

      setTimeout(()=> subscribe.next(usuario),4000)

      setTimeout(()=> subscribe.next(usuario),5000)

      setTimeout(()=> subscribe.complete( ),6000)
    }else{
      subscribe.error("usuario incorreto")
    }
  })
}
  ngOnInit(): void {
    const subs = this.usuarioObservable("Admin","antoniojrpardim@gmail.com").subscribe(
      //subscribe sempre retorno o objeto que foi configurado
      { next: usuario => console.log(usuario,"Teste"),
        error: error => console.log("Ops você não e o Administrador: ", error),
        complete: () => console.log("FIM")
      }
      )
//para de resolver depois de 3 segundos
      setTimeout(()=>{
        subs.unsubscribe()
        console.log("A conexão esta fechada?", subs.closed)
      },3000)
  }

}
export class Usuario {
  constructor(nome:string,email:string){
    this.email = email
    this.nome = nome
  }
  nome:string;
  email:string;
}