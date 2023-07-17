import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalNumero'
})
export class VocalNumeroPipe implements PipeTransform {

  transform(cadena: String): String {
     let pal: String = '';
    for (let i= 0; i<cadena.length; i++){
      if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' ||cadena[i] == 'o' || cadena[i] == 'u' ){
        pal = pal + '1';
      }else {
       pal = pal + cadena[i];
      }

    }
    return pal;
  }

}
