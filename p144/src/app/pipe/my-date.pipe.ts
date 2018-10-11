import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {
  // 20181011 ==> transform() ==> 2018.10.11

  // 사용법 : {{dateStr | myDate:delim}}

  transform(dateStr: string, delim?: string): any {
    if (!delim) {
        delim = ".";
    }
    return dateStr.substring(0, 4) + delim +
    dateStr.substring(4, 6) + delim +
    dateStr.substring(6);
  }

}
