import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEditDepartmentPageComponent } from './create-edit-department-page.component';

describe('CreateDepartmentPageComponent', () => {
  let component: CreateEditDepartmentPageComponent;
  let fixture: ComponentFixture<CreateEditDepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditDepartmentPageComponent]
    });
    fixture = TestBed.createComponent(CreateEditDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
