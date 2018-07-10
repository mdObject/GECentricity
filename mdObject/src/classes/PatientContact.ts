export class PatientContact {

    private data = (this._value == null) ? [] : this._value.split('^');
    name: string = (this.data.length > 0) ? this.data[0] : '';
    type: string = (this.data.length > 1) ? this.data[1] : '';
    phone: string = (this.data.length > 2) ? this.data[2] : '';
    phoneType: string = (this.data.length > 3) ? this.data[3] : '';
    address1: string = (this.data.length > 4) ? this.data[4] : '';
    address2: string = (this.data.length > 5) ? this.data[5] : '';
    city: string = (this.data.length > 6) ? this.data[6] : '';
    state: string = (this.data.length > 7) ? this.data[7] : '';
    zip: string = (this.data.length > 8) ? this.data[8] : '';
    country: string = (this.data.length > 9) ? this.data[9] : '';
    address: string = this.address1.concat(' ' + this.address2);

    constructor(
        public _value: string
    ) { }

    toMelString = (): string => {
        return this._value;
    }
}