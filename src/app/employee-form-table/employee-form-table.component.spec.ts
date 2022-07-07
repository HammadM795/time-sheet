import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormTableComponent } from './employee-form-table.component';

describe('EmployeeFormTableComponent', () => {
  let component: EmployeeFormTableComponent;
  let fixture: ComponentFixture<EmployeeFormTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
