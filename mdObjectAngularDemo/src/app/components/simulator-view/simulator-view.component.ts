import { Component, OnInit } from '@angular/core';
import { MdObject, Patient } from '../../../../../mdObject/src/classes/classes';
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
      patientAsync.then(p => p.contactsAsync()),
      patientAsync.then(p => p.dateOfBirthAsync()),
      patientAsync.then(p => p.dateOfDeathAsync()),
      patientAsync.then(p => p.carePlansAsync()),
      patientAsync.then(p => p.problemsAsync()),
    ]).then(e =>
    {
      this.patient = e[0];
      this.demographics = this.jsonCleanup(this.patient._demographics.json);
      this.allergies = this.jsonCleanup(this.patient._allergiesExternal.json);
    });
    Promise.all([
      patientAsync,
      patientAsync.then(p => p.allergies.addedAsync()),
      patientAsync.then(p => p.allergies.currentAsync()),
    ]);
  }

  jsonCleanup = (data: string): string => {
    return data
      .replace(/\"/g, '\\"')
      .replace(/\\n/g, "\\\\n")
      .replace(/\\r/g, "\\\\r")
      .replace(/\\t/g, "\\\\t");
  }

  formater = (data): string => {
    return data.replace(/[{}]/gi, '').replace(/[."(),\s]/gi, '_').trim();
  }
}

