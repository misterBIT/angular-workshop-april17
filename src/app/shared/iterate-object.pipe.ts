import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateObject'
})

export class IterateObjectPipe implements PipeTransform {
  transform(value: object,isEnum:false): any {
    let keys = Object.keys(value);
    return keys.map(key => ({key: key, value: value[key]}));
  }
}
