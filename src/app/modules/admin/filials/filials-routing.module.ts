import { BranchTechniciansComponent } from './branch-technicians/branch-technicians.component';
import { DistributionUnitsComponent } from './distribution-units/distribution-units.component';
import { SalesRepresentativesComponent } from './sales-representatives/sales-representatives.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'representantes', pathMatch: 'full' },
  { path: 'representantes', component: SalesRepresentativesComponent },
  { path: 'unidades', component: DistributionUnitsComponent },
  { path: 'tecnicos', component: BranchTechniciansComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilialsRoutingModule {}
