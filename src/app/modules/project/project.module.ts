import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProjectComponent } from './main-project/main-project.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainProjectComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule
  ],
  exports: [
    MainProjectComponent
  ]
})
export class ProjectModule { }
