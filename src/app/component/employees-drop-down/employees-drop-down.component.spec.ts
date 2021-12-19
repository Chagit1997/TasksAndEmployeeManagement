import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDropDownComponent } from './employees-drop-down.component';

describe('EmployeesDropDownComponent', () => {
  let component: EmployeesDropDownComponent;
  let fixture: ComponentFixture<EmployeesDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
