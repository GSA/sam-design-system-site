// Disabling lint as this is 3rd party code for demo only
/* tslint:disable */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortBy'})
export class SortArrayOfObjects implements PipeTransform {
  transform(array: Array<any>, args: string): Array<any> {
    array.sort((a: any, b: any) => {
      if ( a[args] < b[args] ) {
        return -1;
      }else if ( a[args] > b[args] ) {
        return 1;
      }else {
        return 0;
      }
    });
    return array;
  }
}
