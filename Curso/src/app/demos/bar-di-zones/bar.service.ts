import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export function BarFactory(http: HttpClient) {
  return new BarService(http);
}
@Injectable()
export class BarService {
  constructor(private http: HttpClient) {}

  obterBebidas(): string {
    return 'Bebidas';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeiçoes(): string {
    return 'Refeições';
  }
}
// exemplo do user class
// não e comum utilizar mais de uma class dentro do arquivo
// mas e boa pratica utilizar o userclass
// useclass e mais utilizado para teste de serviço
export class BarServiceMock {
  constructor(private http: HttpClient) {}

  obterBebidas(): string {
    return 'Mock';
  }

  obterPorcoes(): string {
    return 'Mock';
  }

  obterRefeiçoes(): string {
    return 'Mock';
  }
}
