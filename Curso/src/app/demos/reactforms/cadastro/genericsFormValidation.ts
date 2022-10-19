import {FormGroup} from '@angular/forms'
export class GenericValidation{
constructor(private validar:ValidarMensagem){}

processarMensagem(lista: FormGroup):{[key:string]:string }{
    let mensagem = {}

    for(let controleChaveValor in lista.controls){

        if(lista.controls.hasOwnProperty(controleChaveValor)){
            let propriedade = lista.controls[controleChaveValor]

            if(propriedade instanceof FormGroup){
                let mensagemFilha = this.processarMensagem(propriedade)
                Object.assign(mensagem,mensagemFilha)
            }else{
                if(this.validar[controleChaveValor]){
                    mensagem[controleChaveValor] = '';
                    if((propriedade.dirty || propriedade.touched) && propriedade.valid){
                        Object.keys(propriedade.errors).map(mensagemDaChave => {
                            if(this.validar[controleChaveValor][mensagemDaChave]){
                                mensagem[controleChaveValor] += this.validar[controleChaveValor][mensagemDaChave]
                            }
                        })
                    }
                }
            }
        }

    }
    return mensagem;
}
}

export interface DisplayMessage{
    [key:string]:string
}

export interface ValidarMensagem{
    [key:string]: {[key:string]:string}
}