import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
  submitCustomerDetail() {
    console.log("in submitEntry");
  }

}
