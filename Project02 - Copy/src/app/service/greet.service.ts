import { Injectable } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  constructor() { }

  getTimlyGreeting():string{
    let greeting:string="Good Morning";
    let currenthour=(new Date()).getHours();
    if(currenthour>=3 && currenthour<=11){
      greeting="Good Morning "}
      else if(currenthour<=14){
        greeting="Good Noon ";
      }else{
        greeting="Good Evening ";
      }


    return greeting;
  }
}
