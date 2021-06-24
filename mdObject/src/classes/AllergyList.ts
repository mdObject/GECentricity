import { StringInternal } from '../factories/StringInternal';
import { IAllergyData } from '../interfaces';

export class AllergyList implements IAllergyData {

    protected data: Array<string> = (this._value == null) ? [] : this._value.split('^');

    name = (this.data.length > 0) ? this.data[0] : '';
    onSetDate = StringInternal((this.data.length > 1) ? this.data[1] : '').toDate();
        criticalIndicator = (this.data.length > 2) ? this.data[2] : '';
    classification = (this.data.length > 3) ? this.data[3] : '';
    description = (this.data.length > 4) ? this.data[4] : '';
    gpiCode = (this.data.length > 5) ? this.data[5] : '';
    severity = (this.data.length > 6) ? this.data[6] : '';
    allergyId = (this.data.length > 7) ? this.data[7] : '';
    stopDate = null;
    reactionCode: number = 32; // OTHER=32

    constructor(
        public _value: string
    ) { }
}