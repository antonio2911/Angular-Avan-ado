import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [BarComponent],
  //parece que o professor não quer registrar o provider nesse modulo e sim no principal para exemplos
})
export class BarModule {
  //trabalhando com injection tokens => mais providers passado como metodo do modulo
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
    return {
      ngModule: BarModule,
      //providers do module mais ou providers declarados aqui dentro do metodo
      providers: [
        { provide: 'configManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_CONFIG, useValue: config },
      ],
    };
  }

  static forChild() {}
}
