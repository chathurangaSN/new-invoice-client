import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  message = "child to parent data interaction is successful via Output() + EventEmitter "
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

}
