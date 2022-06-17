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
      { path: 'devolucoes', component: DevolutionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesRoutingModule {}
