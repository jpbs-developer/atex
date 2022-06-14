import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
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
}
