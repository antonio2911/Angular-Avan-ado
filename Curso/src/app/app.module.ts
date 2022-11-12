import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

//para funcionar os formularios reativos importa o reactforms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
//formatação mascara
import { TextMaskModule } from 'angular2-text-mask';
//validações
import { NgBrazil } from 'ng-brazil';
//Modulos da aplicação
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactforms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
//Rota
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app-guard';
import { CadastroGuard } from './services/cadastros-guard';

@NgModule({
  declarations: [AppComponent, SobreComponent, CadastroComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
  ],
  providers: [
    //{ provide: APP_BASE_HREF, useValue: '/' }
    AuthGuard,
    CadastroGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
