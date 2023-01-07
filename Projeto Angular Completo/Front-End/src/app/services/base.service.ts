import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageUtils } from '../utils/localStorage';

export abstract class BaseService {
  // public quem utilizar qualquer classe que herda de base serviceconsegue utilizar
  // protected somente quem extende a classe consegue utilizar

  public LocalStorage = new LocalStorageUtils();

  protected UrlServiceV1: string = environment.apiUrlV1;

  protected obterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected extrairData(response: any) {
    return response.data || {};
  }

  protected serviceErro(response: Response | any) {
    let customError: string[] = [];

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Ocorreu um erro desconhecido');
        response.error.errors = customError;
      }
    }

    console.error(response);
    return throwError(response);
  }
}
