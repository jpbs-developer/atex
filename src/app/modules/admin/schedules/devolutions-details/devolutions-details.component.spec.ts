import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutionsDetailsComponent } from './devolutions-details.component';

describe('DevolutionsDetailsComponent', () => {
  let component: DevolutionsDetailsComponent;
  let fixture: ComponentFixture<DevolutionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolutionsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolutionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
