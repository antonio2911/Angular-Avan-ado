import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoDashBoardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoAppComponent } from './produtos.app.component';
import { ProdutosResolve } from './services/produto.resolver';

const produtoRotas: Routes = [
  {
    path: '',
    component: ProdutoAppComponent,
    children: [
      { path: '', redirectTo: 'todos' },
      {
        path: ':estado',
        component: ProdutoDashBoardComponent,
        resolve: { produtos: ProdutosResolve },
      },
      { path: 'editar/:id', component: EditarProdutoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(produtoRotas)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
