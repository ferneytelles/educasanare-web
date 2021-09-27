import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './events/event-card/event-card.component';



@NgModule({
  declarations: [
    EventsComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EventsComponent
  ]
})
export class CalendarModule { }
