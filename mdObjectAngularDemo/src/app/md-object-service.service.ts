import { Injectable } from '@angular/core';
import { MdObject } from '@mdobject/mdobject/'
import { Patient } from '@mdobject/mdobject/classes'

@Injectable({
  providedIn: 'root'
})
export class MdObjectServiceService {

  mdObject: MdObject;
  patient: Promise<Patient> | null = null;

  constructor() {
    this.mdObject = new MdObject(window, document);

    this.patient = this.mdObject.emr.patientAsync();
  
  }

}
