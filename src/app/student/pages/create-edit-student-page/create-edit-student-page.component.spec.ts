import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditStudentPageComponent } from './create-edit-student-page.component';

describe('CreateStudentPageComponent', () => {
  let component: CreateEditStudentPageComponent;
  let fixture: ComponentFixture<CreateEditStudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditStudentPageComponent]
    });
    fixture = TestBed.createComponent(CreateEditStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
