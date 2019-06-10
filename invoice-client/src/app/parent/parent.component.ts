import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message1 = "parent to child data interaction is successful via Input()"
  message2:string;
  constructor() { }

  ngOnInit() {
  }
  receiveMessge($event){
    this.message2=$event;
  }

}
