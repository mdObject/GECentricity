import { Component, OnInit } from '@angular/core';
import { EmrContent, ObjectState } from '@mdobject/mdobject';

import { MdObject, Patient, EmrContents } from '@mdobject/mdobject/classes';

import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-simulator-view',
  templateUrl: './simulator-view.component.html',
  styleUrls: ['./simulator-view.component.scss']
})
export class SimulatorViewComponent implements OnInit {

  patient: Patient;
  dateOfDeath: string;
  mdObject: MdObject;
  demographics: string;
  allergies: string;
  businessPhone: string;
  mobilePhone: string;
  fax: string;
  currentProblemMelData: string;
  newProblemMelData: string;
  removedProblemMelData: string;
  emrContentsData: string;

  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) {
    this.mdObject = this.mdObjectServiceService.mdObject;
  }

  ngOnInit(): void {
    const patientAsync = this.mdObjectServiceService.patient;
    const emr = this.mdObjectServiceService.mdObject.emr;
    let emrContent: EmrContent;

    Promise.all([
      patientAsync,
      patientAsync.then(p => p.raceAsync()),
      patientAsync.then(p => p.ethnicityAsync()),
      patientAsync.then(p => p.emailAsync()),
      patientAsync.then(p => p.contactsAsync()),
      patientAsync.then(p => p.dateOfBirthAsync()),
      patientAsync.then(p => p.dateOfDeathAsync()),
      patientAsync.then(p => p.carePlansAsync()),
      patientAsync.then(p => p.problemsAsync()),
      patientAsync.then(p => p.clinicStatusAsync()),
    ]).then(e => {
      this.patient = e[0];
      this.demographics = this.jsonCleanup(this.patient._demographics.json);
      this.allergies = this.jsonCleanup(this.patient._allergiesExternal.json);
      this.currentProblemMelData = this.jsonCleanup(e[8].currentProblemMelData);
      this.newProblemMelData = this.jsonCleanup(e[8].newProblemMelData);
      this.removedProblemMelData = this.jsonCleanup(e[8].removedProblemMelData);
    });
    Promise.all([
      patientAsync,
      patientAsync.then(p => p.phone.businessAsync()),
      patientAsync.then(p => p.phone.mobileAsync()),
      patientAsync.then(p => p.phone.faxAsync()),
      patientAsync.then(p => p.allergies.addedAsync()),
      patientAsync.then(p => p.allergies.currentAsync()),
      patientAsync.then(p => p.maritalStatusAsync()),
      patientAsync.then(p => p.contactByAsync()),
      patientAsync.then(p => p.employmentStatusAsync()),
      patientAsync.then(p => p.primaryCarePhysicianNameAsync()),
    ]).then(v => {
      this.businessPhone = v[1];
      this.mobilePhone = v[2];
      this.fax = v[3];
    });

    Promise.all([
      this.saveEmrContent().then(p => { emrContent = p; return emr.emrContentsAsync('MDOBJECT.COMPONENT.VERSION') })
    ]).then(data => this.emrContentsData = data[0].melData);
  }

  jsonCleanup = (data: string): string => {
    return data
      .replace(/\"/g, '\\"')
      .replace(/\\n/g, '\\\\n')
      .replace(/\\r/g, '\\\\r')
      .replace(/\\t/g, '\\\\t');
  }

  formater = (data): string => {
    return data.replace(/[{}]/gi, '').replace(/[."(),\s]/gi, '_').trim();
  }

  private async saveEmrContent(): Promise<EmrContent> {
    let emrContent = new EmrContent({ data:null, mel:this.mdObject.emr.emrMel });

    emrContent.namespace = 'MDOBJECT.COMPONENT.VERSION';
    emrContent.displayName = this.mdObject.version;
    emrContent.state = ObjectState.Add;
    await emrContent.save();
    return emrContent;
  }
}

