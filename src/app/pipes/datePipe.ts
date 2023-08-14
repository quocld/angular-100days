import { Pipe, PipeTransform } from '@angular/core';
import { getTimeDiffString } from '../utils/formatData';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    return getTimeDiffString(value);
  }
}