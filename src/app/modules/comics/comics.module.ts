import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalComicComponent } from './modal-comic/modal-comic.component';
import { ComicContentComponent } from './comic-content/comic-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ComicsListComponent,
    ModalComicComponent,
    ComicContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    ComicsListComponent
  ]
})
export class ComicsModule { }
