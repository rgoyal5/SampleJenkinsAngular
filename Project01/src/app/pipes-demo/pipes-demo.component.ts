import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  strData:string;
  numData:number;
  dateData:Date;
  array : number[];
  constructor() { }

  ngOnInit() {
    this.strData="This is demo string";
    this.numData=684652.513464;
    this.dateData=new Date();
    this.array=[10,11,12,13,14,15,16,17,18,19,20,21];
  }

}
