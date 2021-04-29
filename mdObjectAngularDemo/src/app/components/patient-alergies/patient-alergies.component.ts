import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MdObject, Patient, AllergyList } from '../../../../../mdObject/src/classes/classes';
import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'patient-alergies',
  templateUrl: './patient-alergies.component.html',
  styleUrls: ['./patient-alergies.component.scss']
})
export class PatientAlergiesComponent implements OnInit, OnChanges {

  @Input() addedAllergy: any;
  @Output() handleEdit: EventEmitter<AllergyList> = new EventEmitter();

  patient: Patient | null = null;
  mdObject: MdObject;

  addedArray: Array<AllergyList> = [];
  currentArray: Array<AllergyList> = [];
  private removedArray: Array<AllergyList> = [];

  allergyList: Array<AllergyList> = [];

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

      this.allergyList = e[1].concat(e[2]);
    });
  }

  ngOnChanges(): void {
    if (this.addedAllergy?.type === 'add') {
      this.allergyList.push(this.addedAllergy);
    } else if (this.addedAllergy?.type === 'edit') {
      const index = this.allergyList.findIndex(i => i.allergyId === this.addedAllergy?.allergyId);
      this.allergyList[index] = this.addedAllergy;
    }
  }

  edit = (index: number): void => {
    this.handleEdit.emit(this.allergyList[index]);
  }

  delete = (index: number): void => {
    this.removedArray.push(this.allergyList[index]);
    this.allergyList.splice(index, 1);
  }
}
