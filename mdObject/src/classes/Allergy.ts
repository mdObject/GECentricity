import { IAllergyData } from "../interfaces/interfaces";
import { EmrMel } from "./EmrMel";
import { ObjectState, AllergyClassification, AllergyCriticality, AllergyReasonForRemoval, ObjectStatus } from "../enums/enums";
import { System } from "./system";

export class Allergy implements IAllergyData {
  state: ObjectState = ObjectState.None;
  status: ObjectStatus = ObjectStatus.Unchanged;

  name: string = '';
  onSetDate: Date | undefined;
  criticalIndicator: AllergyCriticality = AllergyCriticality.undefined;
  classification: AllergyClassification = AllergyClassification.none;
  description: string = ''; // Use this field for reaction
  gpiCode: string = '';
  severity: string = '';
  stopDate: Date | undefined;
  allergyId: string = '';
  reactionCode: number = 32; // OTHER=32
  reasonForRemoval: AllergyReasonForRemoval = AllergyReasonForRemoval.none;

  constructor(
    public _mel: EmrMel
  ) { }

  save = async () => {
    switch (this.state) {
      case ObjectState.Add: {
        let code: string = await this._mel.melFunc('{MEL_ADD_ALLERGY("' + this.toAddString() + '")}');

        if (code !== null) {
          let error = 'Allergy.save error. Code is ' + code;
          console.error(error);
          throw new Error('Allergy not saved. ' + error);
        }

        this.status = ObjectStatus.Added;
        this.state = ObjectState.None;
        break;
      }
      case ObjectState.Update: {
        let code: string = await this._mel.melFunc('{MEL_CHANGE_ALLERGY("' + this.toChangeString() + '")}');

        if (code !== null) {
          let error = 'Allergy.save error. Code is ' + code;
          console.error(error);
          throw new Error('Allergy not saved. ' + error);
        }

        this.status = ObjectStatus.Updated;
        this.state = ObjectState.None;
        break;
      }
      case ObjectState.Remove: {
        let code: string = await this._mel.melFunc('{MEL_REMOVE_ALLERGY("' + this.toRemoveString() + '")}');

        if (code !== null) {
          let error = 'Allergy.save error. Code is ' + code;
          console.error(error);
          throw new Error('Allergy not saved. ' + error);
        }

        this.status = ObjectStatus.Removed;
        this.state = ObjectState.None;
        break;
      }
    }
  }

  private toChangeString = (): string => {
    return this.allergyId + '","' +
      this.description + '","' +
      (this.onSetDate? System.dateToString(this.onSetDate) : '') + '","' +
      (this.stopDate ? System.dateToString(this.stopDate) : '') + '","' +
      this.criticalIndicator + '","' +
      this.classification;
  }

  private toRemoveString = (): string => {
    return this.allergyId + '","' +
      (this.stopDate ? System.dateToString(this.stopDate) : '') + '","' +
      (this.reasonForRemoval !== AllergyReasonForRemoval.none ? this.reasonForRemoval : '');
  }

  private toAddString = (): string => {
    return this.name + '","' +
      this.description + '","' +
      (this.onSetDate ? System.dateToString(this.onSetDate) : '') + '","' +
      this.allergyId + '",' +
      this.reactionCode + ',"' +
      this.gpiCode + '","' +
      (this.stopDate ? System.dateToString(this.stopDate) : '') + '","' +
      this.criticalIndicator + '","' +
      this.classification;
  }
}