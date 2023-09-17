import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStudentPageComponent } from './home-student-page.component';

describe('HomeStudentPageComponent', () => {
  let component: HomeStudentPageComponent;
  let fixture: ComponentFixture<HomeStudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStudentPageComponent]
    });
    fixture = TestBed.createComponent(HomeStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
