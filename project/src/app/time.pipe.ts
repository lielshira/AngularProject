import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value>=60)
     {
       return (value-value%60)/60+" "+"שעות"+" "+value%60+" "+"דקות";
     }
     else
     return value+" "+ "דקות";
    
  }

}
