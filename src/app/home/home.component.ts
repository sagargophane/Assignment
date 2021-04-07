import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  webPlan: any;


  constructor(private router: Router) {
    this.webPlan = [
      {name: 'Basic Plan', img: '../../assets/B.jpg', plan1: '1 website', plan2:'30 GB SSD Storage', plan3:'~10000 visit Monthly'},
      {name: 'Gold Plan', img: '../../assets/B2.jpg', plan1: '50 website', plan2:'100 GB SSD Storage', plan3:'~50000 visit Monthly'},
      {name: 'Premium Plan', img: '../../assets/B3.jpg', plan1: '100 website', plan2:'200 GB SSD Storage', plan3:'~100000 visit Monthly'},
    ]
   }

  ngOnInit(): void {
  }
  next(){
    this.router.navigate(['details'])
  }

}
