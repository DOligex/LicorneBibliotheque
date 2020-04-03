import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapKindRoutingModule } from './recap-kind-routing.module';
import { RecapKindComponent } from './recap-kind.component';


@NgModule({
  declarations: [RecapKindComponent],
  imports: [
    CommonModule,
    RecapKindRoutingModule
  ]
})
export class RecapKindModule { }
