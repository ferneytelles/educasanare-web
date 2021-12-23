import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchModule } from '../../modules/search/search.module';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    SharedModule,
    SearchModule
  ]
})
export class SearchPageModule { }
