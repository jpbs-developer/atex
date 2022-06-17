import { DevolutionsDetailsComponent } from './devolutions-details/devolutions-details.component';
import { WithdrawDetailsComponent } from './withdraw-details/withdraw-details.component';
import { DevolutionsComponent } from './devolutions/devolutions.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { SchedulesComponent } from './schedules.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent,
    children: [
      { path: '', redirectTo: 'retiradas', pathMatch: 'full' },
      { path: 'retiradas', component: WithdrawComponent },
      { path: 'retiradas/retirada/:id', component: WithdrawDetailsComponent },
      { path: 'devolucoes', component: DevolutionsComponent },
      { path: 'devolucoes/devolucao/:id', component: DevolutionsDetailsComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesRoutingModule {}
