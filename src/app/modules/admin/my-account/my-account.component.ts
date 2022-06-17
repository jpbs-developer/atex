import { StatusModalComponent } from './../../shared/modals/status-modal/status-modal.component';
import { DragDropFileModalComponent } from './../../shared/modals/drag-drop-file-modal/drag-drop-file-modal.component';
import { ConfirmModalComponent } from './../../shared/modals/confirm-modal/confirm-modal.component';
import { ChangePasswordModalComponent } from './../../shared/modals/change-password-modal/change-password-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  nameControl = true;
  cargoControl = true;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openChangePasswordModal() {
    const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log(result);

        if (result) {
          this.openModalConfirm();
        }
      },
    });
  }

  openModalConfirm() {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '450px',
    });
  }

  openChagePhotoModal() {
    const dialogRef = this.dialog.open(DragDropFileModalComponent, {
      width: '700px',
      data: {
        text: 'Alterar imagem de perfil',
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if(!res) return
        if (res === 'success') {
          this.openModalStatus(res, 'Senha alterada com sucesso!');
        } else {
          this.openModalStatus(res, 'Ops! Erro ao alterar senha');
        }
      },
    });
  }

  openModalStatus(status: string, text: string) {
    const dialogRef = this.dialog.open(StatusModalComponent, {
      width: '400px',
      data: { status, text },
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res === 'try again') {
          this.openChagePhotoModal();
        }
      },
    });
  }
}
