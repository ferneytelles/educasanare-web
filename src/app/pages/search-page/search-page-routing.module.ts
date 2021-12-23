import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page.component';
import { MainSearchComponent } from '../../modules/search/main-search/main-search.component';
import { PostComponent } from '../../modules/search/post/post.component';

const routes: Routes = [
  {
    path: '', component: SearchPageComponent,
    children: [
      {
        path: '',
        component: MainSearchComponent
      },
      {
        path: ':slug',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
