import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { ForumItemComponent } from './forum-item/forum-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':id',
    component: ForumItemComponent
  }
];

@NgModule({
  declarations: [
    CategoriesComponent,
    ForumItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class ForumModule { }
