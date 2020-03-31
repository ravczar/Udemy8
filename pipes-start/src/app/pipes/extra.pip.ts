import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'extra'
})
export class ExtraPipe implements PipeTransform{
    transform(value: any) {
        return value + " extra";
    }
    
}