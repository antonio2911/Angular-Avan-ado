import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../task';
import { TodoServices } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
})
export class TasksFinalizadasComponent implements OnInit {
  finalizadas$: Observable<Task[]>;
  constructor(private store: Store, private task: TodoServices) {}
  ngOnInit(): void {
    this.finalizadas$ = this.store
      .getTodoList()
      .pipe(
        map((observableDeTarefas) =>
          observableDeTarefas.filter(
            (tarefa) => tarefa.finalizado && !tarefa.iniciado
          )
        )
      );
  }

  movimentarTarefa(outputEvent) {
    this.task.movimentarTarefa(outputEvent);
  }
}
