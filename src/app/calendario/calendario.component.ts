import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  events = [];

  constructor() { }

  ngOnInit() {
  }

  onAddEvent(event) {
    this.events.push(event);
  }

  onAddEvent() {
    const event = {
      start: new Date(this.event.start),
      end: new Date(this.event.end),
      title: this.event.title
    };
    this.onAddEvent(event);
  }

  
}