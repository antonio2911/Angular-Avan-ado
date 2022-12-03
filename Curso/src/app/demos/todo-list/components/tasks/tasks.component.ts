import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../task';
import { TodoServices } from '../../todo.service';

@Component({
  selector: 'task',
  templateUrl: './tasks.component.html',
})
export class TasksComponet implements OnInit {
  constructor(private taskService: TodoServices) {}
  todoList$: Observable<any[]>;
  ngOnInit(): void {
    this.todoList$ = this.taskService.getTodoListPropriedade$;
  }
}
