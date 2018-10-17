import { Component, OnInit } from '@angular/core';
import { Router } from '@Angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  showAboutUs(){
    //this.router.navigate(AboutUsComponent);
    this.router.navigateByUrl("/abt");
  }
  showContactUs(){

    this.router.navigateByUrl("/cont");
  }
}
