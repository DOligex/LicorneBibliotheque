import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecapCountryRoutingModule } from './recap-country-routing.module';
import { RecapCountryComponent } from './recap-country.component';


@NgModule({
  declarations: [RecapCountryComponent],
  imports: [
    CommonModule,
    RecapCountryRoutingModule
  ]
})
export class RecapCountryModule { }
