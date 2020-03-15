import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() addEvent: EventEmitter<string>;
  @Output() testEvent: EventEmitter<string>;

  constructor() {
    this.addEvent = new EventEmitter();
    this.testEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }
}
