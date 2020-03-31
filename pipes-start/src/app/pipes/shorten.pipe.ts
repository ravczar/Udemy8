import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number, extra: string){
        if(value.length > limit){
            return value.substr(0, limit) + extra;
        } else {
            return value;
        }
    }
}