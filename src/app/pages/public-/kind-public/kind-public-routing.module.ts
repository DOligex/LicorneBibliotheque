import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KindPublicComponent } from './kind-public.component';

const routes: Routes = [{ path: '', component: KindPublicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KindPublicRoutingModule { }
