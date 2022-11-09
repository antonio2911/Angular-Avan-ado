import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../models/produtos';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {
  constructor(private produtoService: ProdutoService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.produtoService.obterTodosProdutos(route.params.estado);
  }
}
