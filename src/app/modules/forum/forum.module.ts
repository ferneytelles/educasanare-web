import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { ForumItemComponent } from './forum-item/forum-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryComponent } from './category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewForumComponent } from './new-forum/new-forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':id',
    component: CategoryComponent,
    children: [
      {
        path: '',
        component: CategoryItemComponent
      },
      {
        path: 'foro/:slug',
        component: NewForumComponent
      },
      {
        path: ':forum',
        component: ForumItemComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CategoriesComponent,
    ForumItemComponent,
    CategoryItemComponent,
    CategoryComponent,
    NewForumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ForumModule { }
