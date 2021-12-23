import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { EventCardComponent } from './events/event-card/event-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    EventsComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    EventsComponent
  ]
})
export class CalendarModule { }
