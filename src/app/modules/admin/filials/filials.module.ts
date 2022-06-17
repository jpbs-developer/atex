import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilialsRoutingModule } from './filials-routing.module';
import { FilialsComponent } from './filials.component';
import { SalesRepresentativesComponent } from './sales-representatives/sales-representatives.component';
import { DistributionUnitsComponent } from './distribution-units/distribution-units.component';
import { BranchTechniciansComponent } from './branch-technicians/branch-technicians.component';

@NgModule({
  declarations: [
    FilialsComponent,
    SalesRepresentativesComponent,
    DistributionUnitsComponent,
    BranchTechniciansComponent,
  ],
  imports: [
    CommonModule,
    FilialsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class FilialsModule {}
