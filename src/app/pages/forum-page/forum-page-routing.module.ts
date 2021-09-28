import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumPageComponent } from './forum-page.component';

const routes: Routes = [
  {
    path: '',
    component: ForumPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/forum/forum.module').then(m => m.ForumModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumPageRoutingModule { }
