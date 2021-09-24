import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarPageRoutingModule } from './calendar-page-routing.module';
import { CalendarPageComponent } from './calendar-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    CalendarPageRoutingModule,
    SharedModule
  ]
})
export class CalendarPageModule { }
