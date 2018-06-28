import { AllergyList } from './classes';

export class AllergyListRemoved extends AllergyList {

    constructor(
        public _value: string
    ) {
        super(_value);
    }
}