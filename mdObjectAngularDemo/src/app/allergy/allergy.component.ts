import { MdObject, Allergy } from '../../../../mdObject/src/classes/classes'
import { AllergyClassification, AllergyCriticality } from '../../../../mdObject/src/enums/enums'
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ObjectState } from '../../../../mdObject/src/enums/enums';
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

  mdObject: MdObject = this.mdObjectServiceService.mdObject;

  allergy: Allergy = new Allergy(this.mdObject.emr.emrMel);
  allergyClassification = AllergyClassification;
  allergyCriticality = AllergyCriticality;

  addedAllergy: any;

  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) { }

  ngOnInit(): void {
    this.allergy.state = ObjectState.Add;
  }

  handleAdd = (): void => {
    this.addedAllergy = {
      ...this.allergy,
      allergyId: Math.floor(Math.random() * 100000).toString(),
      type: 'add'
    };

    this.allergy.save();
    this.cancel();
  }

  setAllergy = (item): void => {
    if (item) {
      this.allergy.state = ObjectState.Update;
      this.allergy.allergyId = item.allergyId;
      this.allergy.classification = item.classification;
      this.allergy.criticalIndicator = item.criticalIndicator;
      this.allergy.description = item.description;
      this.allergy.gpiCode = item.gpiCode;
      this.allergy.name = item.name;
      this.allergy.severity = item.severity;
      this.allergy.onSetDate = item.onSetDate;
      this.allergy.stopDate = item.stopDate;
    }
  }

  handleEdit = (): void => {
    this.addedAllergy = { ...this.allergy, type: 'edit' };

    this.allergy.save();
    // Reset state
    this.cancel();
  }

  cancel = (): void => {
    this.allergy = new Allergy(this.mdObject.emr.emrMel);
    this.allergy.state = ObjectState.Add;
  }
}
