import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapMovieRoutingModule } from './recap-movie-routing.module';
import { RecapMovieComponent } from './recap-movie.component';


@NgModule({
  declarations: [RecapMovieComponent],
  imports: [
    CommonModule,
    RecapMovieRoutingModule
  ]
})
export class RecapMovieModule { }
