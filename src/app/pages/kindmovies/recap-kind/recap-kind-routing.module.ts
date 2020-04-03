import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapKindComponent } from './recap-kind.component';

const routes: Routes = [{ path: '', component: RecapKindComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecapKindRoutingModule { }
