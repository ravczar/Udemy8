import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    return typeof value === "string" ? this.reverseString(value) : value;
  }

  private reverseString( str: string): string{
    let splitString = str.split('');
    let reversed = splitString.reverse();
    let rejoined = reversed.join('');
    return rejoined;
  }

}
