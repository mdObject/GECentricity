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
    ]).then(e => { this.patient = e[0]; });
  }

  formater = (data): string => {
    return data.replace(/[{}]/gi, '').replace(/[."(),\s]/gi, '_').trim();
  }
}

