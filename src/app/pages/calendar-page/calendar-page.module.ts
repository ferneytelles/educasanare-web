import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarPageRoutingModule } from './calendar-page-routing.module';
import { CalendarPageComponent } from './calendar-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule } from '../../modules/calendar/calendar.module';


@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    CalendarPageRoutingModule,
    SharedModule,
    CalendarModule
  ]
})
export class CalendarPageModule { }
