import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable()
export class TodoServices {
  constructor(private http: HttpClient) {}
  //passando uma propriedade que ja e observable
  getTodoListPropriedade$: Observable<Task[]> = this.http.get<Task[]>(
    'http://localhost:3001/todolist'
  );
  // getTodoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:3001/todolist');
  // }
}
