import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpMainComponent } from './help-main/help-main.component';
import { HelpPostComponent } from './help-post/help-post.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HelpMainComponent,
    HelpPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HelpModule { }
