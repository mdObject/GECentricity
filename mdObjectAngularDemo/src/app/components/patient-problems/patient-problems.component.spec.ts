import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProblemsComponent } from './patient-problems.component';

describe('PatientProblemsComponent', () => {
  let component: PatientProblemsComponent;
  let fixture: ComponentFixture<PatientProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
