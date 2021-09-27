import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [
    {
      date: new Date(2021, 8, 15, 18, 24),
      title: '',
      text: '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
