import { Component, OnInit, Inject } from '@angular/core';
import { MdObject, Patient } from '../../../../mdObject/src/classes/classes'
import { MdObjectServiceService } from '../md-object-service.service';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.scss']
})
export class PatientHeaderComponent implements OnInit {

  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) { }

  ngOnInit(): void {
  }

  mdObject: MdObject = this.mdObjectServiceService.mdObject;

  patient: Patient = this.mdObject.emr.patient;
}
