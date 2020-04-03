import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KindComponent } from './kind.component';

const routes: Routes = [{ path: '', component: KindComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KindRoutingModule { }
