import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformHeight',
})
export class TransformHeightPipe implements PipeTransform {
  transform(value: number | undefined): number | undefined {
    if (value === undefined) {
      return undefined;
    }
    return Number((value / 10).toFixed(2));
  }
}
