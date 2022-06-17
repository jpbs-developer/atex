import { StatusModalComponent } from './../../../shared/modals/status-modal/status-modal.component';
import { ConfirmModalComponent } from './../../../shared/modals/confirm-modal/confirm-modal.component';
import { CalendarModalComponent } from './../../../shared/modals/calendar-modal/calendar-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDateRangeInput } from '@angular/material/datepicker';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class WithdrawComponent implements OnInit {
  @ViewChild('datePicker') datePicke!: MatDateRangeInput<any>;
  dataSource = [1, 2, 3, 4, 5, 5, 6, 6, 6];
  columnsToDisplay = [
    'contract',
    'work',
    'date_withdraw',
    'contract_of_work',
    'email',
    'confimation',
    'expand',
    'actions',
  ];
  expandedElement!: any;
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.datePicke);
  }

  openModalCalendar() {
    const dialogRef = this.dialog.open(CalendarModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res === 'change') {
          this.openModalConfirm(
            `Tem certeza que deseja
          alterar a data da retirada?`,
            '22/07/2021'
          );
        }
      },
    });
  }

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

  openCalendar() {
    this.datePicke._openDatepicker();
  }
}
