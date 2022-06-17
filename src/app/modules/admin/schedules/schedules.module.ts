import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DevolutionsComponent } from './devolutions/devolutions.component';
import { WithdrawDetailsComponent } from './withdraw-details/withdraw-details.component';
import { DevolutionsDetailsComponent } from './devolutions-details/devolutions-details.component';


@NgModule({
  declarations: [
    SchedulesComponent,
    WithdrawComponent,
    DevolutionsComponent,
    WithdrawDetailsComponent,
    DevolutionsDetailsComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class SchedulesModule { }
