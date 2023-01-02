import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponent } from './conta.app.component';
import { LoginComponent } from './login/login.component';
const ContasRouterConfig: Routes = [
  {
    path: '',
    component: ContaAppComponent,
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(ContasRouterConfig)],
  exports: [RouterModule],
})
export class ContaRoutingModule {}
