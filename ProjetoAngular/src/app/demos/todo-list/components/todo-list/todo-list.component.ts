import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() list: Task[];
  @Output() eventOutput = new EventEmitter<any>();

  toggleItem(status: string, index: number) {
    const task = this.list[index];
    console.log(task);

    switch (status) {
      case 'finalizar':
        (task.finalizado = true), (task.iniciado = false);
        break;
      case 'iniciar':
        (task.iniciado = true), (task.finalizado = false);
        break;
      case 'retomar':
        (task.iniciado = true), (task.finalizado = false);
        break;
      case 'cancelar':
        (task.finalizado = false), (task.iniciado = false);
    }
    this.eventOutput.emit({
      tarefa: { ...task },
    });
  }
}
