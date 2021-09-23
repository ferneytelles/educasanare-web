import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesPageComponent } from './experiences-page.component';
import { XpMainComponent } from '../../modules/experiences/xp-main/xp-main.component';
import { XpItemComponent } from '../../modules/experiences/xp-item/xp-item.component';

const routes: Routes = [
  { path: '',
  component: ExperiencesPageComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('../../modules/experiences/experiences.module').then(m => m.ExperiencesModule)
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesPageRoutingModule { }
