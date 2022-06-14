import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-request-card',
  templateUrl: './dashboard-request-card.component.html',
  styleUrls: ['./dashboard-request-card.component.scss'],
})
export class DashboardRequestCardComponent implements OnInit {
  @Input() data: any;
  constructor() {}
  
  ngOnInit(): void {}
}
