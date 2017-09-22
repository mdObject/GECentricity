//

export class Problem {

    private data: Array<string> = (this._value == null) ? [] : this._value.split('^');
    private _problemId: string;

    type: string = (this.data.length > 0) ? this.data[0] : '';
    description: string = (this.data.length > 1) ? this.data[1] : '';
    codeIcd9: string = (this.data.length > 2) ? this.data[2] : '';
    comment: string = (this.data.length > 3) ? this.data[3] : '';
    onsetDate: string = (this.data.length > 4) ? this.data[4] : '';
    stopDate: string = (this.data.length > 5) ? this.data[5] : '';
    stopReason: string = (this.data.length > 6) ? this.data[6] : '';
    codeIcd10: string = (this.data.length > 7) ? this.data[7] : '';
    lastModifiedDate: string = (this.data.length > 9) ? this.data[9] : '';

    constructor(
        public _value: string
    ) { }

    get problemId(): string {
        this._problemId = (this.data.length > 8) ? this.data[8] : '';
        this._problemId = (this._problemId.indexOf('.') > 0) ? this._problemId.substr(0, this._problemId.indexOf('.')) : this._problemId;
        return this._problemId;
    }
};