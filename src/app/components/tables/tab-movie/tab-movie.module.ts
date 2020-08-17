import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabMovieRoutingModule } from './tab-movie-routing.module';
import { TabMovieComponent } from './tab-movie.component';


@NgModule({
  declarations: [TabMovieComponent],
  imports: [
    CommonModule,
    TabMovieRoutingModule
  ]
})
export class TabMovieModule { }
