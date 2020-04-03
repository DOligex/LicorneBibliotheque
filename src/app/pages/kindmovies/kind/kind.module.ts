import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KindRoutingModule } from './kind-routing.module';
import { KindComponent } from './kind.component';


@NgModule({
  declarations: [KindComponent],
  imports: [
    CommonModule,
    KindRoutingModule
  ]
})
export class KindModule { }
