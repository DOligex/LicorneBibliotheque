import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMovieComponent } from './tab-movie.component';

const routes: Routes = [{ path: '', component: TabMovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabMovieRoutingModule { }
