import { Component, OnInit } from '@angular/core';
import { Router } from '@Angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showHomeScreen(){

    this.router.navigateByUrl("/");

  }
  showContactUs(){

    this.router.navigateByUrl("/cont");
  }

}
