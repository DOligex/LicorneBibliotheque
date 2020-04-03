import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapActorRoutingModule } from './recap-actor-routing.module';
import { RecapActorComponent } from './recap-actor.component';


@NgModule({
  declarations: [RecapActorComponent],
  imports: [
    CommonModule,
    RecapActorRoutingModule
  ]
})
export class RecapActorModule { }
