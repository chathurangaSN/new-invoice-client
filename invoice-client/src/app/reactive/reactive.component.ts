import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  name = new FormControl('');
  // ,Validators.required
  constructor() { }

  ngOnInit() {
  }
  
  updateName() {
    this.name.setValue('Nancy');
  }
}
