import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  loyaltyForm = this.fb.group(
    {
      id: [''],
      name: [''],
      type: ['']
    }

  )
  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("in submitEntry");
    console.log(this.loyaltyForm.value);
    this.router.navigate(['/invoice']);
  }

}
