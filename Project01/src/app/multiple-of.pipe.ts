import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipleOf'
})
export class MultipleOfPipe implements PipeTransform {

  transform(values: number[], multiplier:number): number[] {

    let result : number[]=[];
    for(let n of values){
      if(n%multiplier==0)
      result.push(n);
    }

    return result;
  }

}
