import { AllergyList } from './AllergyList';

export class AllergyListRemoved extends AllergyList {

    constructor(
        public _value: string
    ) {
        super(_value);
    }
}