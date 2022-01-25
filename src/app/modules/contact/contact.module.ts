import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContactComponent } from './main-contact/main-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainContactComponent
  ]
})
export class ContactModule { }
