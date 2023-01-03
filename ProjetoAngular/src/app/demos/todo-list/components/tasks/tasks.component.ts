import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../task';
import { TodoServices } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'task',
  templateUrl: './tasks.component.html',
})
export class TasksComponet implements OnInit, OnDestroy {
  constructor(private taskService: TodoServices, private store: Store) {}

  todoList$: Observable<any[]>;
  //como o metodo e async eu preciso subcrever de alguma forma no serviço para ele ser inicializado
  //então vou assinar o metodo para obter a leitura
  subscription: Subscription;
  ngOnInit(): void {
    this.todoList$ = this.store
      .getTodoList()
      .pipe(
        map((observableTasks) =>
          observableTasks.filter(
            (tasks) => !tasks.iniciado && !tasks.finalizado
          )
        )
      );
    this.subscription = this.taskService.getTodoListPropriedade$.subscribe();
  }

  ReceberOutput(evento) {
    this.taskService.movimentarTarefa(evento);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
