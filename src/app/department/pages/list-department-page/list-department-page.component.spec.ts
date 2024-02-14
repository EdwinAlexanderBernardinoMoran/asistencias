import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDepartmentPageComponent } from './list-department-page.component';


describe('HomeDepartmentPageComponent', () => {
  let component: ListDepartmentPageComponent;
  let fixture: ComponentFixture<ListDepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDepartmentPageComponent]
    });
    fixture = TestBed.createComponent(ListDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
