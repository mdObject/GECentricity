import { IAllergyData } from "../interfaces/interfaces";
import { EmrMel } from "./EmrMel";
import { ObjectState, AllergyClassification, AllergyCriticality } from "../enums/enums";

export class Allergy implements IAllergyData {
    state: ObjectState = ObjectState.None;

    name: string = '';
    onSetDate: string;
    criticalIndicator: AllergyCriticality = AllergyCriticality.undefined;
    classification: AllergyClassification = AllergyClassification.none;
    description: string = ''; // Use this field for reaction
    gpiCode: string = '';
    severity: string = '';
    stopDate: string = '';
    allergyId: string = '';
    reactionCode: number = 32; // OTHER=32

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
                this.state = ObjectState.None;
                break;
            }
            case ObjectState.Update: {
                this._mel.melFunc('{MEL_CHANGE_ALLERGY("' + this.toChangeString() + '")}');
                this.state = ObjectState.None;
                break;
            }
            case ObjectState.Remove: {
                this._mel.melFunc('{MEL_REMOVE_ALLERGY("' + this.toRemoveString() + '")}');
                this.state = ObjectState.None;
                break;
            }
        }
    }

    private toChangeString = (): string => { return ''; }
    private toRemoveString = (): string => { return ''; }

    private toAddString = (): string => {
        return this.name + '","' +
            this.description + '","' +
            this.onSetDate + '","' +
            this.allergyId + '",' +
            this.reactionCode + ',"' +
            this.gpiCode + '","' +
            this.stopDate + '","' +
            this.criticalIndicator + '","' +
            this.classification;
    }
}