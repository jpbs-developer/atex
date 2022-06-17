import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DevolutionsComponent } from './devolutions/devolutions.component';


@NgModule({
  declarations: [
    SchedulesComponent,
    WithdrawComponent,
    DevolutionsComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class SchedulesModule { }
