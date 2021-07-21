import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContactsComponent } from './patient-contacts.component';

describe('PatientContactsComponent', () => {
  let component: PatientContactsComponent;
  let fixture: ComponentFixture<PatientContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
