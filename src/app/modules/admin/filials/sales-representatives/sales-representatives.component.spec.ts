import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepresentativesComponent } from './sales-representatives.component';

describe('SalesRepresentativesComponent', () => {
  let component: SalesRepresentativesComponent;
  let fixture: ComponentFixture<SalesRepresentativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRepresentativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesRepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
