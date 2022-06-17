import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesComponent } from './finances.component';


@NgModule({
  declarations: [
    FinancesComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class FinancesModule { }
