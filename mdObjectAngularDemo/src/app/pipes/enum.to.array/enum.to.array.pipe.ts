import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray'})
export class EnumToArrayPipe implements PipeTransform {
  transform(value): object {
    return Object.keys(value).map(o => {
      return {
        name: o,
        value: value[o]
      };
    });
  }
}
