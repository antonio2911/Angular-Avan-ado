import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FileSizePipe implements PipeTransform {
  transform(size: number) {
    // conversão binaria e não decimal
    let tamanhoCalculado = size / (1024 * 1024);
    let extensao = 'MB';
    //se tamanho final calculado em mb > 1024
    if (tamanhoCalculado > 1024) {
      tamanhoCalculado = tamanhoCalculado / 1024;
      extensao = 'GB';
    }
    return tamanhoCalculado.toFixed(2) + extensao;
  }
}
