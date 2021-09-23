import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpMainComponent } from './xp-main/xp-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { XpItemComponent } from './xp-item/xp-item.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: XpMainComponent
  },
  {
    path: ':id',
    component: XpItemComponent
  }
];

@NgModule({
  declarations: [
    XpMainComponent,
    XpItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [
    RouterModule
  ]
})
export class ExperiencesModule { }
