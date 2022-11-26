import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
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
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarService } from './demos/bar-di-zones/bar.service';
//export const BAR_PROVIDERS: Provider[] = [BarService];
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
    //usando o module do metodo.
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'd38gn358ddsdaf934nhfalkvje',
    }),
  ],
  providers: [
    //{ provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard,
    CadastroGuard,
    //  BAR_PROVIDERS, apenas exemplo mostrando outra forma de passar um provider ou uma coleção de provider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
