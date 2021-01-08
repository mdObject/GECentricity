import { Component, OnInit } from '@angular/core';
import { MdObject, Patient } from '../../../../../mdObject/src/classes/classes';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-patient-personal-information',
  templateUrl: './patient-personal-information.component.html',
  styleUrls: ['./patient-personal-information.component.scss']
})
export class PatientPersonalInformationComponent implements OnInit {

  patient: Promise<Patient> | null = null;
  mdObject: MdObject = this.mdObjectServiceService.mdObject;
  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) { }

  ngOnInit(): void {
    this.patient = this.mdObject.emr.patientAsync();
  }

}
