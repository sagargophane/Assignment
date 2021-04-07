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
      {name: 'basic plan', img: '../../assets/B.jpg', plan: '1 website 30 GB SSD Storage ~10000 visit Monthly'},
      {name: 'gold plan', img: '../../assets/B2.jpg', plan: '2 website 50 GB SSD Storage ~10000 visit Monthly'},
      {name: 'premium plan', img: '../../assets/B3.jpg', plan: '3 website 80 GB SSD Storage ~10000 visit Monthly'},
    ]
   }

  ngOnInit(): void {
  }
  next(){
    this.router.navigate(['details'])
  }

}
