//
import { IAllergyData } from '../interfaces/interfaces';

export class AllergyList implements IAllergyData {

    private data: Array<string> = (this._value == null) ? [] : this._value.split('^');

    name = (this.data.length > 0) ? this.data[0] : '';
    onDate = (this.data.length > 1) ? this.data[1] : '';
    classification = (this.data.length > 3) ? this.data[3] : '';
    description = (this.data.length > 4) ? this.data[4] : '';
    gpiCode = (this.data.length > 5) ? this.data[5] : '';
    severity = (this.data.length > 6) ? this.data[6] : '';
    offDate = null;

    constructor(
        public _value: string
    ) { }
}