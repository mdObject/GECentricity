import { MdObject, Allergy } from '../../../../mdObject/src/classes/classes'
import { AllergyClassification, AllergyCriticality } from '../../../../mdObject/src/enums/enums'
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ObjectState } from '../../../../mdObject/src/enums/objectState';

@Pipe({ name: 'enumToArray'})
export class EnumToArrayPipe implements PipeTransform {
  transform(value) : Object {
    return Object.keys(value).map(o => { return { name: o, value: value[o]}});
  }
}

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss']
})

export class AllergyComponent implements OnInit {

  constructor() { }

  mdObject = new MdObject(window, document);

  allergy = new Allergy(this.mdObject.emr.emrMel);

  allergyClassification = AllergyClassification;

  allergyCriticality = AllergyCriticality;

  ngOnInit(): void {
    this.allergy.state = ObjectState.Add;
  }

  save = ()=>
  {
    this.allergy.save();
    this.allergy = new Allergy(this.mdObject.emr.emrMel);
    this.allergy.state = ObjectState.Add;
  }
}
