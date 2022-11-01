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
  constructor() {}

  ngOnInit() {
    this.produtos = [
      {
        id: 1,
        nome: 'teste',
        ativo: true,
        imagem: 'celular.jpg',
        valor: 300,
      },
      {
        id: 2,
        nome: 'teste',
        ativo: true,
        imagem: 'crossplat.jpg',
        valor: 300,
      },
      {
        id: 3,
        nome: 'teste',
        ativo: true,
        imagem: 'gopro.jpg',
        valor: 300,
      },
      {
        id: 4,
        nome: 'teste',
        ativo: false,
        imagem: 'headset.jpg',
        valor: 300,
      },
      {
        id: 5,
        nome: 'teste',
        ativo: true,
        imagem: 'laptop.jpg',
        valor: 300,
      },
      {
        id: 6,
        nome: 'teste',
        ativo: false,
        imagem: 'monitor.jpg',
        valor: 300,
      },
    ];
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
