import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/utils/localStorage';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Injectable()
export class ContaGuard
  implements CanDeactivate<CadastroComponent>, CanActivate
{
  localStorage = new LocalStorageUtils();
  constructor(private router: Router) {}
  canDeactivate(component: CadastroComponent) {
    if (component.mudancasNaoSalvas) {
      return window.confirm(
        'Tem Certeza que deseja abandonar o preenchimento do formulario'
      );
    }
    return true;
  }
  // não deixar o usuario navegar de login para cadastro proteção
  canActivate() {
    if (this.localStorage.obterTokenUsuario()) {
      this.router.navigate(['/home']);
    }
    return true;
  }
}
