import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'home',
      exact: true,
      admin: false,
    },
    {
      link: '/cadastro',
      name: 'cadastro',
      exact: true,
      admin: false,
    },
    {
      link: '/sobre',
      name: 'sobre',
      exact: true,
      admin: false,
    },
    {
      link: '/produtos',
      name: 'produtos',
      exact: true,
      admin: false,
    },
  ];
}

interface Nav {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}
