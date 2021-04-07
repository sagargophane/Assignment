import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    userdetail: any;

  constructor(private router: Router) {
    this.userdetail=[
      { ID: '1', Fname:'Mark', Lname:'Otto', Address:'mark@mdo.com', Adharnumber:'AB234C163856'},
      { ID: '2', Fname:'Jacob', Lname:'Thornton', Address:'jacob@fat.com', Adharnumber:'BI2452H467914'},
      { ID: '3', Fname:'Larry', Lname:'Swift', Address:'larry@twitter.com', Adharnumber:'KY2345H29104'}
    ]

   }

  ngOnInit(): void {
  }

}
