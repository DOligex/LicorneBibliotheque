import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapMovieComponent } from './recap-movie.component';

const routes: Routes = [{ path: '', component: RecapMovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecapMovieRoutingModule { }
