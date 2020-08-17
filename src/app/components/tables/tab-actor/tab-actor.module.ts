import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabActorRoutingModule } from './tab-actor-routing.module';
import { TabActorComponent } from './tab-actor.component';
import { HttpClientModule } from '@angular/common/http';
// material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [TabActorComponent],
  imports: [
    CommonModule,
    TabActorRoutingModule,
    HttpClientModule,
    // material
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    MatProgressSpinnerModule,
  ]
})
export class TabActorModule { }
