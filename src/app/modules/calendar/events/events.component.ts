import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input() section: any;
  events = [
    {
      date: new Date(2021, 8, 15, 18, 24),
      title: 'Nombre del evento lorem ipsum segordir',
      location: 'Yopal, Casanare',
      assistants: 34,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rem ratione velit? Itaque facilis deserunt hic reprehenderit. Debitis quaerat eveniet animi dignissimos non id? Hic placeat expedita optio assumenda sit.'
    },
    {
      date: new Date(2021, 9, 22, 13, 56),
      title: 'Nombre del evento lorem ipsum segordir',
      location: 'Villanueva, Casanare',
      assistants: 72,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rem ratione velit? Itaque facilis deserunt hic reprehenderit. Debitis quaerat eveniet animi dignissimos non id? Hic placeat expedita optio assumenda sit.'
    },
    {
      date: new Date(2021, 12, 27, 10, 12),
      title: 'Nombre del evento lorem ipsum segordir',
      location: 'Orocué, Casanare',
      assistants: 72,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rem ratione velit? Itaque facilis deserunt hic reprehenderit. Debitis quaerat eveniet animi dignissimos non id? Hic placeat expedita optio assumenda sit.'
    },
    {
      date: new Date(2021, 12, 27, 10, 12),
      title: 'Nombre del evento lorem ipsum segordir',
      location: 'Orocué, Casanare',
      assistants: 72,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rem ratione velit? Itaque facilis deserunt hic reprehenderit. Debitis quaerat eveniet animi dignissimos non id? Hic placeat expedita optio assumenda sit.'
    },
    {
      date: new Date(2021, 8, 15, 18, 24),
      title: 'Nombre del evento lorem ipsum segordir',
      location: 'Yopal, Casanare',
      assistants: 34,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rem ratione velit? Itaque facilis deserunt hic reprehenderit. Debitis quaerat eveniet animi dignissimos non id? Hic placeat expedita optio assumenda sit.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.section);
  }

}
