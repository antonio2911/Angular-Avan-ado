//passo a passo para a construção de uma class

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Produto } from '../models/produtos';

//declarar a diretiva component
@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
})
//exporta a class
export class ProdutoDetalheComponent {
  @Input() produto: Produto;

  @Output() status: EventEmitter<any> = new EventEmitter();
  emitirEvento() {
    this.status.emit(this.produto);
  }
}

//declara ele no module
