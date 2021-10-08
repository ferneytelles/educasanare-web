import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsPageComponent } from './comics-page.component';

const routes: Routes = [{ path: '', component: ComicsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsPageRoutingModule { }
