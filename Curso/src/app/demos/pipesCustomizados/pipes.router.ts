import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './Filmes/filmes.component';

const pipeRouter: Routes = [{ path: '', component: FilmesComponent }];
@NgModule({
  imports: [RouterModule.forChild(pipeRouter)],
  exports: [RouterModule],
})
export class PipeRoutingModule {}
