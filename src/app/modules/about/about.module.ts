import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAboutComponent } from './main-about/main-about.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainAboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainAboutComponent
  ]
})
export class AboutModule { }
