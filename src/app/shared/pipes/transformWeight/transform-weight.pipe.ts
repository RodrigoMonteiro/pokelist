import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformWeight',
})
export class TransformWeightPipe implements PipeTransform {
  transform(value: number | undefined): number | undefined {
    if (value === undefined) {
      return undefined;
    }
    return Number((value / 10).toFixed(2));
  }
}
