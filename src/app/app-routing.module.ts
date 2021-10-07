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
        path: 'foros',
        loadChildren: () => import('./pages/forum-page/forum-page.module').then(m => m.ForumPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'comics',
        loadChildren: () => import('./pages/comics-page/comics-page.module').then(m => m.ComicsPageModule)
      },
      {
        path: '**',
        redirectTo: 'proyecto',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
