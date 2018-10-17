
import { Component, OnInit } from '@angular/core';

@Component({
 
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class CustomAppComponent implements OnInit {

  name : string //public
  a: number;
  b:number;
  marks : number[];
  employees : any[];//any bcz dis is for an array of objs

  constructor() {
    this.name="  cutiee";
    this.a=20;
    this.b=30;
    this.marks=[24,35,42,52,33];
    this.employees=[
      {name:"first",age:25,basic:250022 },
      {name:"second",age:35,basic:25300 },
      {name:"third",age:40,basic:25500 },
      {name:"fourth",age:55,basic:12500 }
    ]
   }
   showMsg():string{
     return "hello" + this.name;
   }

  ngOnInit() {
  }

}