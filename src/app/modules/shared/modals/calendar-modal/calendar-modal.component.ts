import { CalendarHeaderComponent } from './../../calendar-header/calendar-header.component';
import { AngularMaterialModule } from './../../../../angular-material.module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-modal',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss']
})
export class CalendarModalComponent implements OnInit {
  date = new Date();
  calendarHeader = CalendarHeaderComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
