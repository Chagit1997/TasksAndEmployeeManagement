import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsTreeComponent } from './departments-tree.component';

describe('DepartmentsTreeComponent', () => {
  let component: DepartmentsTreeComponent;
  let fixture: ComponentFixture<DepartmentsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
