import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapKindPublicRoutingModule } from './recap-kind-public-routing.module';
import { RecapKindPublicComponent } from './recap-kind-public.component';


@NgModule({
  declarations: [RecapKindPublicComponent],
  imports: [
    CommonModule,
    RecapKindPublicRoutingModule
  ]
})
export class RecapKindPublicModule { }
