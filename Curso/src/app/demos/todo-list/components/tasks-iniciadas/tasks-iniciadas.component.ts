import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../task';
import { TodoServices } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
})
export class TasksIniciadasComponent implements OnInit {
  inicializadas$: Observable<Task[]>;
  constructor(private store: Store, private task: TodoServices) {}

  ngOnInit(): void {
    this.inicializadas$ = this.store
      .getTodoList()
      .pipe(
        map((observableDeTask) =>
          observableDeTask.filter((task) => task.iniciado && !task.finalizado)
        )
      );
  }

  movimentarTarefa(outputEvent) {
    this.task.movimentarTarefa(outputEvent);
  }
}
