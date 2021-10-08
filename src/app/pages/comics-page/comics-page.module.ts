import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsPageRoutingModule } from './comics-page-routing.module';
import { ComicsPageComponent } from './comics-page.component';
import { ComicsModule } from '../../modules/comics/comics.module';


@NgModule({
  declarations: [
    ComicsPageComponent
  ],
  imports: [
    CommonModule,
    ComicsPageRoutingModule,
    ComicsModule
  ]
})
export class ComicsPageModule { }
