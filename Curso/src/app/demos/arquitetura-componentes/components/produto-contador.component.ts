import { Component, Input } from '@angular/core';
import { Produto } from '../models/produtos';

@Component({
  selector: 'produto-contador',
  templateUrl: './produto-contador.component.html',
})
export class ProdutoContadorComponent {
  @Input() produtos: Produto[];

  contadorAtivos(): number {
    if (!this.produtos) return;
    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }
}
