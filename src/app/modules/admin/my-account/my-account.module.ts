import { DndDirective } from './../../shared/directives/dnd.directive';
import { DragDropFileModalComponent } from './../../shared/modals/drag-drop-file-modal/drag-drop-file-modal.component';
import { ConfirmModalComponent } from './../../shared/modals/confirm-modal/confirm-modal.component';
import { ChangePasswordModalComponent } from './../../shared/modals/change-password-modal/change-password-modal.component';
import { AngularMaterialModule } from './../../../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    AngularMaterialModule,
    ChangePasswordModalComponent,
    ConfirmModalComponent,
    DragDropFileModalComponent,
    DndDirective,
  ],
})
export class MyAccountModule {}
