import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message:string;
  constructor(){
    this.message="Hello Rishabh";
  }

  changeMsg(): void{
    this.message="Welcom Rishabh Goyal To Angular";
  }
  //html associated with component class has direct access over contents
}
