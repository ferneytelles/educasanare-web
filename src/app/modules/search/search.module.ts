import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSearchComponent } from './main-search/main-search.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MainSearchComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule
  ],
  exports: [
  ]
})
export class SearchModule { }
