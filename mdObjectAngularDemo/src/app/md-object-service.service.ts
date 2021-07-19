import { Injectable } from '@angular/core';

import { MdObject, Patient } from '@mdobject/mdobject';

@Injectable({
  providedIn: 'root'
})
export class MdObjectServiceService {

  mdObject = new MdObject(window, document);
  patient: Promise<Patient> | null = null;

  constructor() {
    this.patient = this.mdObject.emr.patientAsync();
  }
}
