import { MdObject, Allergy } from '../../../../mdObject/src/classes/classes'
import { Component, OnInit } from '@angular/core';
import { ObjectState } from '../../../../mdObject/src/enums/objectState';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss']
})

export class AllergyComponent implements OnInit {

  constructor() { }

  mdObject = new MdObject(window, document);

  allergy = new Allergy(this.mdObject.emr.emrMel);

  ngOnInit(): void {
    this.allergy.state = ObjectState.Add;
  }

  save = ()=>
  {
    this.allergy.save();
  }
}
