import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPhoneComponent } from './patient-phone.component';

describe('PatientPhoneComponent', () => {
  let component: PatientPhoneComponent;
  let fixture: ComponentFixture<PatientPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
