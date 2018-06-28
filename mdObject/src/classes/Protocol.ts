export class Protocol {

    name: string = (this._value != null) ? this._value : '';

    constructor(
        public _value: string
    ) { }
}