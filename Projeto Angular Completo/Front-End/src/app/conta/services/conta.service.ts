import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios';
@Injectable()
export class ContaService {
  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: Usuario) {}

  login(usuario: Usuario) {}
}
