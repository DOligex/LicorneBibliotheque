import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabActorComponent } from './tab-actor.component';

const routes: Routes = [{ path: '', component: TabActorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabActorRoutingModule { }
