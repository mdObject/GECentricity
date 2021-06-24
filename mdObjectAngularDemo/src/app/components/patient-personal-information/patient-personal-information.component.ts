import { Component, OnInit } from '@angular/core';
import { MdObject, Patient } from '@mdobject/mdobject/classes';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-patient-personal-information',
  templateUrl: './patient-personal-information.component.html',
  styleUrls: ['./patient-personal-information.component.scss']
})
export class PatientPersonalInformationComponent implements OnInit {

  //patient: Promise<Patient> | null = null;
  patient: Patient;
  dateOfDeath: string;
  mdObject: MdObject;
  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) {
    this.mdObject = this.mdObjectServiceService.mdObject;
  }

  ngOnInit(): void {
    let patientAsync = this.mdObjectServiceService.patient;
    Promise.all([
      patientAsync,
      patientAsync.then(p => p.dateOfDeathAsync()),
      patientAsync.then(p => p.raceAsync()),
      patientAsync.then(p => p.ethnicityAsync()),
      patientAsync.then(p => p.maritalStatusAsync()),
      patientAsync.then(p => p.emailAsync()),
      patientAsync.then(p => p.contactByAsync()),
      patientAsync.then(p => p.employmentStatusAsync()),
      patientAsync.then(p => p.clinicStatusAsync()),
      patientAsync.then(p => p.primaryCarePhysicianNameAsync()),

    ]).then(e => { this.patient = e[0]; });
  }
}
