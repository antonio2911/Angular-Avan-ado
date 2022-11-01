import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactforms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./demos/arquitetura-componentes/produto.module').then(
        (m) => m.ProdutoModule
      ),
  },
  //loadchildren () => import(caminho do modulo)
  //.then(class => class.nome da classe) porque em um arquivo pode ter mais que um export
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
