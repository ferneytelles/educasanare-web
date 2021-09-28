import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './events/event-card/event-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EventsComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EventsComponent
  ]
})
export class CalendarModule { }
