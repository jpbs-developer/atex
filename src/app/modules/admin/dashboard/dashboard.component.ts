import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarHeaderComponent } from '../../shared/calendar-header/calendar-header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  calendarHeader = CalendarHeaderComponent;

  date = new Date();
  cards = [
    {
      icon: 'assets/icons/arrow_left.svg',
      value: 640,
      description: 'Solicitações de Retirada',
    },
    {
      icon: 'assets/icons/arrow_right.svg',
      value: 640,
      description: 'Solicitações de Devolução',
    },
    {
      icon: 'assets/icons/calendar.svg',
      value: 640,
      description: 'Reagendamentos',
    },
  ];
  requests = [
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
    {
      property: 'Edifício Martinelli',
      value: 640,
      code: 593321756,
      date: '09.07.21',
      parts: 798,
      local: 'Guarulhos-SP',
      request: 'Retirada Solicitada',
    },
  ];

  budgets = [
    {
      icon: 'assets/icons/budget.svg',
      value: 640,
      description: 'Total de orçamento solicitado',
    },
    {
      icon: 'assets/icons/loading.svg',
      value: 640,
      description: 'Em Andamento',
    },
    {
      icon: 'assets/icons/calendar.svg',
      value: 640,
      description: 'Canceladas',
    },
  ];

  finances = [
    {
      icon: 'assets/icons/timer.svg',
      value: 640,
      description: 'Clientes em atraso',
    },
    {
      icon: 'assets/icons/renegociations.svg',
      value: 640,
      description: 'Solicitações de  renegociação',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  get currentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = this.getMonth(currentDate.getMonth() + 1);
    const year = currentDate.getFullYear();
    console.log(day, month, year);

    return `Hoje - ${day} de ${month} de ${year}`;
  }

  getMonth(month: number) {
    let currentMonth = '';
    switch (month) {
      case 1:
        currentMonth = 'Janeiro';
        break;
      case 6:
        currentMonth = 'Junho';
    }

    return currentMonth;
  }
}
