//

export class Protocol {

    name: string = (this._value !== undefined) ? this._value : '';

    constructor(
        public _value: string
    ) { }

}