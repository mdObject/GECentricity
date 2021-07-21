import { Component, OnInit } from '@angular/core';

import { MdObject, Patient } from '@mdobject/mdobject';

import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-patient-contacts',
  templateUrl: './patient-contacts.component.html',
  styleUrls: ['./patient-contacts.component.scss']
})
export class PatientContactsComponent implements OnInit {

  // patient: Promise<Patient> | null = null;
  patient: Patient;
  mdObject: MdObject;

  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) {
    this.mdObject = this.mdObjectServiceService.mdObject;
  }

  ngOnInit(): void {
    const patientAsync = this.mdObjectServiceService.patient;
    Promise.all([
      patientAsync,
      patientAsync.then(p => p.contactsAsync()),
    ]).then(e => { this.patient = e[0]; });
  }
}
