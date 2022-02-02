import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './help-page.component';
import { HelpMainComponent } from '../../modules/help/help-main/help-main.component';
import { HelpPostComponent } from '../../modules/help/help-post/help-post.component';

const routes: Routes = [
  {
    path: '',
    component: HelpPageComponent,
    children: [
      {
        path: '',
        component: HelpMainComponent
      },
      {
        path: ':slug',
        component: HelpPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpPageRoutingModule { }
