import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentPageComponent } from './edit-department-page.component';

describe('EditDepartmentPageComponent', () => {
  let component: EditDepartmentPageComponent;
  let fixture: ComponentFixture<EditDepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDepartmentPageComponent]
    });
    fixture = TestBed.createComponent(EditDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
