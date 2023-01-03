import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Produto } from '../models/produtos';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoContadorComponent } from '../components/produto-contador.component';
import { ProdutoDetalheComponent } from '../components/produto-card-detalhe.componet';
import { ActivatedRoute } from '@angular/router';
registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [],
})
export class ProdutoDashBoardComponent implements OnInit, AfterViewInit {
  @ViewChild('testeViewChild', { static: false }) mensagemTela: ElementRef;

  @ViewChild(ProdutoContadorComponent, { static: false })
  ProdutoContadorComponent: ProdutoContadorComponent;

  @ViewChildren(ProdutoDetalheComponent)
  botoes: QueryList<ProdutoDetalheComponent>;

  produtos: Produto[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log('Snapshot produtos', this.route.snapshot.data['produtos']);
    console.log('Snapshot Teste', this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    console.log('Object do contador: ', this.ProdutoContadorComponent);

    console.log(
      'Object do contador: ',
      this.ProdutoContadorComponent.contadorAtivos()
    );

    let clickTexto: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      'click'
    );

    clickTexto.subscribe(() => alert('clicou no texto'));

    this.botoes.forEach((p) => console.log('botoes', p.produto));
  }
  mudarStatus(evento: Produto) {
    evento.ativo = !evento.ativo;
  }
}
