import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStudentPageComponent } from './list-student-page.component';


describe('HomeStudentPageComponent', () => {
  let component: ListStudentPageComponent;
  let fixture: ComponentFixture<ListStudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStudentPageComponent]
    });
    fixture = TestBed.createComponent(ListStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
