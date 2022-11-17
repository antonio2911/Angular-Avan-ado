import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';
import { FilmesComponent } from './Filmes/filmes.component';
import { ImageFormatPipe } from './image.pipe';
import { PipeRoutingModule } from './pipes.router';

@NgModule({
  declarations: [FilmesComponent, FileSizePipe, ImageFormatPipe],
  imports: [PipeRoutingModule, CommonModule],
  exports: [],
  providers: [],
})
export class PipeModule {}
