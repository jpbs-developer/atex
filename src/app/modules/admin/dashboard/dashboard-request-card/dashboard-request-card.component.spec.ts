import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestCardComponent } from './dashboard-request-card.component';

describe('DashboardRequestCardComponent', () => {
  let component: DashboardRequestCardComponent;
  let fixture: ComponentFixture<DashboardRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRequestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
