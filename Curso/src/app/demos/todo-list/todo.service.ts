import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from './task';
import { Store } from './todo.store';

@Injectable()
export class TodoServices {
  constructor(private http: HttpClient, private store: Store) {}
  //passando uma propriedade que ja e observable
  getTodoListPropriedade$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3001/todolist')
    .pipe(tap((estadoDoObjeto) => this.store.set('todoList', estadoDoObjeto)));

  // getTodoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:3001/todolist');
  // }

  movimentarTarefa(evento: any) {
    this.http
      .put(`http://localhost:3001/todolist/${evento.tarefa.id}`, evento.tarefa)
      .subscribe(() => {
        const value = this.store.value.todoList;
        const todoList = value.map((task: Task) => {
          if (evento.tarefa.id == task.id) {
            return { ...task, ...evento.tarefa };
          } else {
            return task;
          }
        });
        this.store.set('todoList', todoList);
      });
  }
}
