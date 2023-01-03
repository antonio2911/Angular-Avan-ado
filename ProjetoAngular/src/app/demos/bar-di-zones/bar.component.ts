import { HttpClient } from '@angular/common/http';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService, BarServiceMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    //{ provide: BarService, useClass: BarService },     outra forma de resolver
    { provide: BarService, useFactory: BarFactory, deps: [HttpClient] },
  ],
})
export class BarComponent implements OnInit {
  barBebidas: string;
  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;

  constructor(
    private barService: BarService,
    @Inject('configManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private ngZone: NgZone
  ) {}
  ngOnInit(): void {
    this.barBebidas = this.barService.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
  }

  public progress: number = 0;
  public label: string;
  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() =>
      console.log('Finalizado por dentro! do angular')
    );
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => console.log('Finalizado fora!'));
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
