import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import { ProjectPageComponent } from './project-page.component';
import { ProjectModule } from '../../modules/project/project.module';


@NgModule({
  declarations: [
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    ProjectModule
  ]
})
export class ProjectPageModule { }
