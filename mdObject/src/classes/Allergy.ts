import { IAllergyData } from "../interfaces/interfaces";
import { EmrMel } from "./EmrMel";
import { ObjectState } from "../enums/objectState";

export class Allergy implements IAllergyData {
    state: ObjectState = ObjectState.None;

    name: string = '';
    onSetDate: string;
    criticalIndicator: string = '';
    classification: string = '';
    description: string = '';
    gpiCode: string = '';
    severity: string = '';
    stopDate: string = '';
    allergyId: string = '';
    reaction: string = '';

    constructor(
        public _mel: EmrMel
    ) { }

    save = (): void => {
        switch (this.state) {
            case ObjectState.Add: {
                this._mel.melFunc('{MEL_ADD_ALLERGY("' + this.toAddString() + '")}');
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
            this.reaction + ',"' +
            this.gpiCode + '","' +
            this.stopDate + '","' +
            this.criticalIndicator + '","' +
            this.classification;
    }
}