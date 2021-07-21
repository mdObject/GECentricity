import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPersonalInformationComponent } from './patient-personal-information.component';

describe('PatientPersonalInformationComponent', () => {
  let component: PatientPersonalInformationComponent;
  let fixture: ComponentFixture<PatientPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
