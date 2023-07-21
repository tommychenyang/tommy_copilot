import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {

  transform(arr: any, ...args: unknown[]): unknown {
    return null;
  }

}
