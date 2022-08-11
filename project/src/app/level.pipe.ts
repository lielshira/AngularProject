import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    var str="";
    for (let index = 0; index < value; index++) {
      
       str+="*";
    }
    return str;
    
  }

}
