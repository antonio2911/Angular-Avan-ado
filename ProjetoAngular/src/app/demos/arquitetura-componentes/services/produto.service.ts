import { Injectable } from '@angular/core';
import { Produto } from '../models/produtos';

@Injectable()
export class ProdutoService {
  produtos: Produto[];

  constructor() {
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
  obterTodosProdutos(estado: string): Produto[] {
    if (estado == 'ativo')
      return this.produtos.filter((produto) => produto.ativo);

    return this.produtos;
  }

  obterPorId(id: number): Produto {
    return this.produtos.find((produto) => produto.id == id);
  }
}
