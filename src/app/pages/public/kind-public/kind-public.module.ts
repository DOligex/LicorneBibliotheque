import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KindPublicRoutingModule } from './kind-public-routing.module';
import { KindPublicComponent } from './kind-public.component';


@NgModule({
  declarations: [KindPublicComponent],
  imports: [
    CommonModule,
    KindPublicRoutingModule
  ]
})
export class KindPublicModule { }
