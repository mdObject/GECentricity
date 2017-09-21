//
import { AllergyData } from './classes';

export class AllergyList extends AllergyData {

    private data: Array<string> = (this._value === undefined) ? [] : this._value.split('^');

    constructor(
        public _value: string
    ) {
        super();

        this.name = (this.data.length >= 1) ? this.data[0] : '';
        this.onDate = (this.data.length >= 2) ? this.data[1] : '';
        this.classification = (this.data.length >= 4) ? this.data[3] : '';
        this.description = (this.data.length >= 5) ? this.data[4] : '';
        this.gpiCode = (this.data.length >= 6) ? this.data[5] : '';
        this.severity = (this.data.length >= 7) ? this.data[6] : '';
        this.offDate = null;
    }

}