//

export class PatientContact {

    private data = (this._value == null) ? [] : this._value.split('^');

    name: string = (this.data.length > 0) ? this.data[0] : '';
    type: string = (this.data.length > 1) ? this.data[1] : '';
    phone: string = (this.data.length > 2) ? this.data[2] : '';
    phoneType: string = (this.data.length > 3) ? this.data[3] : '';
    address: string = (this.data.length > 4) ? this.data[4] : '';

    constructor(
        public _value: string
    ) { }

    toMelString = (): string => {
        return this._value;
    }
}