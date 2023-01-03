import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filmes';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ImageFormatPipe } from '../image.pipe';
registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [ImageFormatPipe],
})
export class FilmesComponent implements OnInit {
  constructor(private imageFormat: ImageFormatPipe) {}
  mapped: Filme[];
  filmes: Filme[];
  ngOnInit(): void {
    this.filmes = [
      {
        nome: 'Um sonho de liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.0,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '513326980',
      },
      {
        nome: 'O poderoso Chefão',
        dataLancamento: new Date('08/01/2008'),
        valor: 200.0,
        imagem: 'poderosoChefaoI.jpg',
        tamanho: '1342177280',
      },
      {
        nome: 'O poderoso Chefão 2',
        dataLancamento: new Date('08/01/2008'),
        valor: 200.0,
        imagem: 'poderosoChefaoII.jpg',
        tamanho: '1342177280',
      },
      {
        nome: 'Batman o cavaleiro das trevas',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.0,
        imagem: 'Batman2008.jpg',
        tamanho: '719974720',
      },
      {
        nome: 'Batman o cavaleiro das trevas 2',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.0,
        imagem: 'Batman2008.jpg',
        tamanho: '719974720',
      },
    ];
    this.mapped = this.filmes.map((filme) => {
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        imagem: this.imageFormat.transform(filme.imagem, 'padrao', true),
        tamanho: filme.tamanho,
        valor: filme.valor,
      };
    });
  }
}
// providers: [ImageFormatPipe] => foi declarado dessa porque. o pipe vai ser usado apenas nesse componente
// para utilizar em apenas um component o pipe tem que ser declarado no declaration do modulo e no provider do component
// se e para um uso geral e so declarar no modulo da aplicação no provider
// pois o pipe e um tipo de serviço
