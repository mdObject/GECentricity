export class FlowsheetObservation {

    private data: Array<string> = (this._value == null) ? [] : this._value.split('^');

    name: string = (this.data.length > 0) ? this.data[0] : '';
    value: string = (this.data.length > 1) ? this.data[1] : '';
    date: string = (this.data.length > 2) ? this.data[2] : '';

    constructor(
        public _value: string
    ) { }

}
