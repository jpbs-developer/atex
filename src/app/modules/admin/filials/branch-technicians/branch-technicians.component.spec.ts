import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchTechniciansComponent } from './branch-technicians.component';

describe('BranchTechniciansComponent', () => {
  let component: BranchTechniciansComponent;
  let fixture: ComponentFixture<BranchTechniciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchTechniciansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
