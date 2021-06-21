import { Component, OnInit } from '@angular/core';
import { MdObject, Patient } from '../../../../../mdObject/src/classes/classes';
import { Problems } from '../../../../../mdObject/src/classes/Problems';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-patient-problems',
  templateUrl: './patient-problems.component.html',
  styleUrls: ['./patient-problems.component.scss']
})
export class PatientProblemsComponent implements OnInit {
  problemList: Problems;
  patient: Patient;
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
      patientAsync.then(p => p.problemsAsync()),
    ]).then(e => {
      this.patient = e[0];
      this.problemList = e[1];
    });
  }

}
