import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './educasanare/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'proyecto',
        loadChildren: () => import('./pages/project-page/project-page.module').then(m => m.ProjectPageModule)
      },
      {
        path: 'interactivo',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'experiencias',
        loadChildren: () => import('./pages/experiences-page/experiences-page.module').then(m => m.ExperiencesPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('./pages/calendar-page/calendar-page.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
      },
      {
        path: '**',
        redirectTo: 'proyecto',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
