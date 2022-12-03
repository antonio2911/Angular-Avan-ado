import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';

const routersTodo: Routes = [{ path: '', component: TodoComponent }];
@NgModule({
  imports: [RouterModule.forChild(routersTodo)],
  exports: [RouterModule],
})
export class RoutingTodoModule {}
