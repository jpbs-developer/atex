import { AngularMaterialModule } from 'src/app/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardRequestCardComponent } from './dashboard-request-card/dashboard-request-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCardComponent,
    DashboardRequestCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
