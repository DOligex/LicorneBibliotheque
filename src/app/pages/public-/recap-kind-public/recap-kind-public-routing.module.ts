import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapKindPublicComponent } from './recap-kind-public.component';

const routes: Routes = [{ path: '', component: RecapKindPublicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecapKindPublicRoutingModule { }
