import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  private serverObjectAttributes: Array<string> = new Array<string>("instanceType", "name", "satus", "started");

  transform(value: any, serverAttribute: string): any {
    if( this.serverObjectAttributes.includes(serverAttribute) && typeof value === "object" ){
      switch(serverAttribute){
        case "instanceType": {
          value.sort(this.compareInstanceType);
          break;
        }
        case "name": {
          value.sort(this.compareName);
          break;
        }
        case "status": {
          value.sort(this.compareStatus);
          break;
        }
        case "started": {
          // do nothing - prepare date sort func.
          break;
        }
      }
      return value;
    }
    return value;
  }

  private compareInstanceType(a, b) : number{
    let comparison = 0;
  
    if ( a.instanceType.toLowerCase() > b.instanceType.toLowerCase() ){
      comparison = 1;
    } else if ( a.instanceType.toLowerCase() < b.instanceType.toLowerCase() ){
      comparison = -1;
    }

    return comparison;
  }

  private compareName(a, b) : number{
    let comparison = 0;
  
    if ( a.name.toLowerCase() > b.name.toLowerCase() ){
      comparison = 1;
    } else if ( a.name.toLowerCase() < b.name.toLowerCase() ){
      comparison = -1;
    }

    return comparison;
  }

  private compareStatus(a, b) : number{
    let comparison = 0;
  
    if ( a.status.toLowerCase() > b.status.toLowerCase() ){
      comparison = 1;
    } else if ( a.status.toLowerCase() < b.status.toLowerCase() ){
      comparison = -1;
    }

    return comparison;
  }

}

/* Our Server Object
 {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
},*/
