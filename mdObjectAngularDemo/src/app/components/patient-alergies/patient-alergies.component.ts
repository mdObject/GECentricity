import { Component, OnInit } from '@angular/core';
import { MdObject, Patient, AllergyList } from '../../../../../mdObject/src/classes/classes';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'patient-alergies',
  templateUrl: './patient-alergies.component.html',
  styleUrls: ['./patient-alergies.component.scss']
})
export class PatientAlergiesComponent implements OnInit {

  patient: Patient | null = null;
  mdObject: MdObject;

  addedArray: Array<AllergyList> = [];
  private currentArray: Array<AllergyList> = [];
  private removedArray: Array<AllergyList> = [];


  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) {
    this.mdObject = this.mdObjectServiceService.mdObject;
  }

  ngOnInit(): void {
    let patientAsync = this.mdObjectServiceService.patient;
    Promise.all([
      patientAsync,
      patientAsync.then(p => p.allergies.addedAsync()),
      patientAsync.then(p => p.allergies.currentAsync()),
      patientAsync.then(p => p.allergies.removedAsync()),
    ]).then(e => {
      this.patient = e[0];
      this.addedArray = e[1];
      this.currentArray = e[2];
      this.removedArray = e[3];
    });

  }

}
