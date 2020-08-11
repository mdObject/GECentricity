import { AllergyList } from './AllergyList';

export class AllergyListRemoved extends AllergyList {

    name = (this.data.length > 0) ? this.data[0] : '';
    onSetDate = (this.data.length > 1) ? this.data[1] : '';
    stopDate = (this.data.length > 2) ? this.data[2] : '';
    criticalIndicator = (this.data.length > 3) ? this.data[3] : '';
    classification = (this.data.length > 4) ? this.data[4] : '';
    description = (this.data.length > 5) ? this.data[5] : '';
    gpiCode = (this.data.length > 6) ? this.data[6] : '';
    severity = (this.data.length > 7) ? this.data[7] : '';
    allergyId = (this.data.length > 8) ? this.data[8] : '';

    constructor(
        public _value: string
    ) {
        super(_value);
    }
}