import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumPageRoutingModule } from './forum-page-routing.module';
import { ForumPageComponent } from './forum-page.component';


@NgModule({
  declarations: [
    ForumPageComponent
  ],
  imports: [
    CommonModule,
    ForumPageRoutingModule
  ]
})
export class ForumPageModule { }
