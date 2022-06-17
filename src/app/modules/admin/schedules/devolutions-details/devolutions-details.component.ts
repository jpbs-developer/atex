import { MatDialog } from '@angular/material/dialog';
import { StatusModalComponent } from './../../../shared/modals/status-modal/status-modal.component';
import { ConfirmModalComponent } from './../../../shared/modals/confirm-modal/confirm-modal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolutions-details',
  templateUrl: './devolutions-details.component.html',
  styleUrls: ['./devolutions-details.component.scss'],
})
export class DevolutionsDetailsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openModalConfirm(text: string, date: string) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      data: {
        text,
        date,
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res === 'change') {
          this.openModalStatus('Data da retirada alterada com sucesso!');
        }
      },
    });
  }

  openModalStatus(text: string) {
    const dialogRef = this.dialog.open(StatusModalComponent, {
      width: '400px',
      data: {
        status: 'success',
        text: 'Data da retirada alterada com sucesso!',
      },
    });
  }
}
