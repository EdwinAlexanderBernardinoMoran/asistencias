import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepartmentPageComponent } from './create-department-page.component';

describe('CreateDepartmentPageComponent', () => {
  let component: CreateDepartmentPageComponent;
  let fixture: ComponentFixture<CreateDepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDepartmentPageComponent]
    });
    fixture = TestBed.createComponent(CreateDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
