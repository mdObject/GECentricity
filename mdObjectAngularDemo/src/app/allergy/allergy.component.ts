import { MdObject, Allergy } from '../../../../mdObject/src/classes/classes'
import { AllergyClassification, AllergyCriticality } from '../../../../mdObject/src/enums/enums'
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ObjectState } from '../../../../mdObject/src/enums/objectState';
import { MdObjectServiceService } from '../md-object-service.service';

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

  constructor(
    private mdObjectServiceService: MdObjectServiceService
    ) { }

  mdObject: MdObject = this.mdObjectServiceService.mdObject;

  allergy: Allergy = new Allergy(this.mdObject.emr.emrMel);

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
