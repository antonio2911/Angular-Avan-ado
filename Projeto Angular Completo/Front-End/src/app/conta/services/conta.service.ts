import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
@Injectable()
export class ContaService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }
  //anatomia de um serviço
  // map(this.extrairData) => ja entende que e um metodo que recebe um parametro e entrega um retorno
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    let response = this.http
      .post(this.UrlServiceV1 + 'nova-conta', usuario, this.obterHeaderJson())
      .pipe(map(this.extrairData), catchError(this.serviceErro));
    return response;
  }

  login(usuario: Usuario): Observable<Usuario> {
    let responseLogin = this.http
      .post(this.UrlServiceV1 + 'entrar', usuario, this.obterHeaderJson())
      .pipe(map(this.extrairData), catchError(this.serviceErro));
    return responseLogin;
  }
}
