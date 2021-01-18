import { Component, OnInit } from '@angular/core';
import { MdObject, Patient } from '../../../../../mdObject/src/classes/classes';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-patient-phone',
  templateUrl: './patient-phone.component.html',
  styleUrls: ['./patient-phone.component.scss']
})
export class PatientPhoneComponent implements OnInit {

  patient: Patient | null = null;
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
      patientAsync.then(p => p.phone.homeAsync()),
      patientAsync.then(p => p.phone.businessAsync()),
      patientAsync.then(p => p.phone.mobileAsync()),
      patientAsync.then(p => p.phone.faxAsync()),

    ]).then(e => { this.patient = e[0]; });

  }

}
