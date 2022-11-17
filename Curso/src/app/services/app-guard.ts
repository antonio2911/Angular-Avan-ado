import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  //condições para bloquear ou ativar o menu de administrador
  user = { admin: true, logged: true };
  canLoad(): boolean {
    return this.user.admin;
  }

  canActivate(): boolean {
    return this.user.logged;
  }
}
//o que diz que a class e um guard e a implementação da interface canload
