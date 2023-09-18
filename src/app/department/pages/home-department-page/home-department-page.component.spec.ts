import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDepartmentPageComponent } from './home-department-page.component';

describe('HomeDepartmentPageComponent', () => {
  let component: HomeDepartmentPageComponent;
  let fixture: ComponentFixture<HomeDepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDepartmentPageComponent]
    });
    fixture = TestBed.createComponent(HomeDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
