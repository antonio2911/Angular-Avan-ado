import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageformater',
})
export class ImageFormatPipe implements PipeTransform {
  transform(imagem: string, caminho: string = '', substituir: boolean) {
    if (caminho == 'padrao') {
      caminho = 'assets';
    }
    if (imagem.length == 0 && substituir) {
      imagem = 'semCapa.jpg';
    }
    return `/${caminho}/${imagem}`;
  }
}
