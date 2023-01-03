import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactforms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/notFound.component';
import { AuthGuard } from './services/app-guard';
import { CadastroGuard } from './services/cadastros-guard';
import { BarComponent } from './demos/bar-di-zones/bar.component';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canDeactivate: [CadastroGuard],
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./demos/arquitetura-componentes/produto.module').then(
        (m) => m.ProdutoModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((modulo) => modulo.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    // canLoad devine se uma parte da aplicação deve ser carregada ou não.
  },
  {
    path: 'filmes',
    loadChildren: () =>
      import('./demos/pipesCustomizados/pipe.module').then(
        (modulo) => modulo.PipeModule
      ),
  },
  { path: 'bar', component: BarComponent },
  {
    path: 'todo',
    loadChildren: () =>
      import('./demos/todo-list/todo.module').then(
        (modulo) => modulo.TodoModule
      ),
  },
  { path: '**', component: NotFoundComponent },
  //loadchildren () => import(caminho do modulo)
  //.then(class => class.nome da classe) porque em um arquivo pode ter mais que um export
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
