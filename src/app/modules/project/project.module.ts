import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProjectComponent } from './main-project/main-project.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';



@NgModule({
  declarations: [
    MainProjectComponent,
    Section1Component,
    Section2Component,
    Section3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainProjectComponent
  ]
})
export class ProjectModule { }
