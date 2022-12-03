import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponet } from './components/tasks/tasks.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { RoutingTodoModule } from './todo.routes';
import { TodoServices } from './todo.service';

@NgModule({
  declarations: [
    TodoComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent,
    TasksComponet,
    TodoListComponent,
  ],
  imports: [CommonModule, HttpClientModule, RoutingTodoModule],
  providers: [TodoServices],
  exports: [],
})
export class TodoModule {}
