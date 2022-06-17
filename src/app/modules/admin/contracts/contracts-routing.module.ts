import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { ContractsComponent } from './contracts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContractsComponent,
    title: 'Contratos',
  },
  { path: 'contrato/:id', component: ContractDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
