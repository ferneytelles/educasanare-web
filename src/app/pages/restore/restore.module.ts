import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoreRoutingModule } from './restore-routing.module';
import { RestoreComponent } from './restore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RestoreComponent
  ],
  imports: [
    CommonModule,
    RestoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestoreModule { }
