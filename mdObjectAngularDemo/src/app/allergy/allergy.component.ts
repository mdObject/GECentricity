import { Component, OnInit } from '@angular/core';

import {
  MdObject,
  Allergy,
  AllergyClassification,
  AllergyCriticality,
  ObjectState
} from '@mdobject/mdobject';

import { MdObjectServiceService } from '../md-object-service.service';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss']
})

export class AllergyComponent implements OnInit {

  mdObject: MdObject = this.mdObjectServiceService.mdObject;
  allergy = new Allergy(this.mdObject.emr.emrMel);
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

  edit = (item): void => {
    this.allergy.state = ObjectState.Update;
    this.setAllergy(item);
  }

  delete = (item): void => {
    this.allergy.state = ObjectState.Remove;
    this.setAllergy(item);
    this.allergy.save();
    this.cancel();
  }

  setAllergy = (item): void => {
    if (item) {
      this.allergy.allergyId = item.allergyId;
      this.allergy.classification = item.classification;
      this.allergy.criticalIndicator = item.criticalIndicator;
      this.allergy.description = item.description;
      this.allergy.gpiCode = item.gpiCode;
      this.allergy.name = item.name;
      this.allergy.severity = item.severity;
      this.allergy.onSetDate = item.onSetDate;
      this.allergy.stopDate = item.stopDate;
      this.allergy.reasonForRemoval = item.removalReason ? item.removalReason : '';
    }
  }

  handleEdit = (): void => {
    this.addedAllergy = {
      ...this.allergy,
      type: 'edit'
    };

    this.allergy.save();
    // Reset state
    this.cancel();
  }

  cancel = (): void => {
    this.allergy = new Allergy(this.mdObject.emr.emrMel);
    this.allergy.state = ObjectState.Add;
  }
}
