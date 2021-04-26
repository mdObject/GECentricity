import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAlergiesComponent } from './patient-alergies.component';

describe('PatientAlergiesComponent', () => {
  let component: PatientAlergiesComponent;
  let fixture: ComponentFixture<PatientAlergiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAlergiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAlergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
