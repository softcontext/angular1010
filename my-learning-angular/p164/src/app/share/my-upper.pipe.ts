import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpper'
})
export class MyUpperPipe implements PipeTransform {

  constructor(){
    console.log('>>> MyUpperPipe()');
  }

  transform(value: string): string {
    return value.toUpperCase();
  }

}
