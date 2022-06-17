import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

@NgModule({
  declarations: [ContractsComponent, ContractDetailsComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class ContractsModule {}
