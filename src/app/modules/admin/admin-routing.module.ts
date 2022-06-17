import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'minha-conta',
        loadChildren: () =>
          import('./my-account/my-account.module').then(
            (m) => m.MyAccountModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'contratos',
        loadChildren: () =>
          import('./contracts/contracts.module').then((m) => m.ContractsModule),
      },
      {
        path: 'agendamentos',
        loadChildren: () =>
          import('./schedules/schedules.module').then((m) => m.SchedulesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
