import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapActorComponent } from './recap-actor.component';

const routes: Routes = [{ path: '', component: RecapActorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecapActorRoutingModule { }
