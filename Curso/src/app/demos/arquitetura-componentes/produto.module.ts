import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.componet';
import { ProdutoContadorComponent } from './components/produto-contador.component';
import { ProdutoDashBoardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.router';

@NgModule({
  declarations: [
    ProdutoDashBoardComponent,
    ProdutoDetalheComponent,
    ProdutoContadorComponent,
  ],
  imports: [
    //Obrigatorio
    CommonModule,
    //
    ProdutoRoutingModule,
  ],
  exports: [],
})
export class ProdutoModule {}
