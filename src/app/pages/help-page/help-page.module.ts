import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HelpModule } from 'src/app/modules/help/help.module';


@NgModule({
  declarations: [
    HelpPageComponent
  ],
  imports: [
    CommonModule,
    HelpPageRoutingModule,
    SharedModule,
    HelpModule
  ]
})
export class HelpPageModule { }
