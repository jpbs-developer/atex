import { RequestHistoryComponent } from './request-history/request-history.component';
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
  {
    path: 'contrato/:id',
    component: ContractDetailsComponent,
    title: 'Contratos - Produtos',
  },
  {
    path: 'solicitacoes/:id',
    component: RequestHistoryComponent,
    title: 'Contratos - Solicitações',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
