import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rim'
})
export class RimPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(" ",2).join(" ");
  }

}
