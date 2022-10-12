import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    <app-subscribe></app-subscribe>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'RXJS';
  // A Promise recebe uma callback de resolve, reject
  // criação da estrutura logico
  // se resolveu corretamento retorna a logica dentro do then
  // se não retorna um erro no console
  //minhapromise(nome).then(retorna o resultado se positivo ou um erro)
  //catch(error => console.log(erro)) => trata o erro e retonar outra informação para o usuario
  // não como erro no console e sim a tratativa do catch
  minhaPromise(nome:string): Promise<string>{
    return new Promise((resolve,reject) =>{
      if(nome == "Antonio"){
        setTimeout(()=>{
          resolve("Seja Bem Vindo " + nome)
        })
      }else{
        reject("Ops! você não e o Antonio")
      }
    })
  }

  myObservable(nome:string):Observable<string>{
    return new Observable((subscribe)=>{
      if(nome == "Antonio"){
        subscribe.next("Ola Seja Bem Vindo observable"),
        subscribe.next("Seja Bem Vindo Novamento"),
        //quando passa pelo complete ele encerra o observable sem passar pelo setTimeOut
        setTimeout(() =>{
          subscribe.next("Resposta com dalay mais o nome = " + nome)
        },5000);
        subscribe.complete()
      }else{
        subscribe.error("Ops você não e o Antonio")
      }
    })
  }
  ngOnInit(): void {
    this.minhaPromise("Antonio")
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    
    //configuração depreciada ************

    // this.myObservable("Julio").subscribe(retorno => console.log(retorno),
    // (error) => console.log(error));
    // ********************************************************************

    //observer
    /*
    O que é um Observador? Um Observador é um consumidor de valores entregues por um Observable. 
    Os observadores são simplesmente um conjunto de retornos de chamada, um para cada tipo de 
    notificação entregue pelo Observable: next, error, e complete. Veja a seguir um exemplo de
     um objeto Observer típico:

     const observer = {
      next: x => console.log(Resultado se tudo der ok ou o que fazer?),
      error: err => console.error( se der erro faça ),
      complete: () => console.log('Apos completar o retorno se positivo'),
};
    */
    
    this.myObservable("Antonio").subscribe(
      {
        next: nome => console.log("Next:" + nome),
        error: error => console.log("Error:", error),
        complete: () => console.log("Parabens"),
      }
      );

  }
}
