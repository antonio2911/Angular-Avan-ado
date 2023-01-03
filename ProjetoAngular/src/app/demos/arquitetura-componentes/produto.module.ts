import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.componet';
import { ProdutoContadorComponent } from './components/produto-contador.component';
import { ProdutoDashBoardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.router';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produtos.app.component';
import { ProdutoService } from './services/produto.service';
import { ProdutosResolve } from './services/produto.resolver';

@NgModule({
  declarations: [
    ProdutoDashBoardComponent,
    ProdutoDetalheComponent,
    ProdutoContadorComponent,
    EditarProdutoComponent,
    ProdutoAppComponent,
  ],
  imports: [
    //Obrigatorio
    CommonModule,
    //
    ProdutoRoutingModule,
  ],
  exports: [],
  providers: [ProdutoService, ProdutosResolve],
})
export class ProdutoModule {}
