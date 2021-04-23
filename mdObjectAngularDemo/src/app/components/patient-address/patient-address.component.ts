import { Component, OnInit } from '@angular/core';
import { MdObject, Patient } from '../../../../../mdObject/src/classes/classes';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-patient-address',
  templateUrl: './patient-address.component.html',
  styleUrls: ['./patient-address.component.scss']
})
export class PatientAddressComponent implements OnInit {

  patient: Promise<Patient> | null = null;
  mdObject: MdObject;
  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) {
    this.mdObject = this.mdObjectServiceService.mdObject;
  }

  ngOnInit(): void {
    this.patient = this.mdObjectServiceService.patient;
  }

}