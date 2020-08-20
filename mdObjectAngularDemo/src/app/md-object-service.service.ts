import { Injectable } from '@angular/core';
import { MdObject } from '../../../mdObject/src/classes/classes'

@Injectable({
  providedIn: 'root'
})
export class MdObjectServiceService {

  constructor() { }

  mdObject: MdObject = new MdObject(window, document);

}
