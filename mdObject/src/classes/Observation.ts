//
import { ObservationType, EmrMel } from './classes';

export class Observation {

    private data: Array<string> = (this._value == null) ? [] : this._value.split('^');
    private _unitOfMeasure;
    private _tag;
    private readonly observationType: ObservationType = new ObservationType();

    name: string = (this._name != null) ? this._name : '';
    value: string = (this.data.length > 0) ? this.data[0] : '';
    date: string = (this.data.length > 1) ? this.data[1] : '';
    time: string = (this.data.length > 2) ? this.data[2] : '';
    signingUser: string = (this.data.length > 3) ? this.data[3] : '';
    enteringUser: string = (this.data.length > 4) ? this.data[4] : '';
    flags: string = (this.data.length > 5) ? this.data[5] : '';
    comment: string = (this.data.length > 6) ? this.data[6] : '';
    state: string = (this.data.length > 7) ? this.data[7] : '';
    locationOfCare: string = (this.data.length > 8) ? this.data[8] : '';
    documentType: string = (this.data.length > 9) ? this.data[9] : '';
    documentId: string = (this.data.length > 10) ? this.data[10] : '';
    type: string = this._observationType;

    constructor(
        public _name: string,
        public _observationType: string,
        public _value: string,
        public _mel: EmrMel
    ) { }

    save = (): void => {
        let response = this._mel.saveObservation(this.name, this.value, this.date); //  this._mel.melFunc('{OBSNOW("' + this.name + '","' + this.value + '")}');
        if (this.tag != null && this.tag != '') {
            response = this._mel.melFunc('{OBSTAGNOW("' + this.name + '","' + this.tag + '")}');
        }
        if (this.comment != null && this.comment != '') {
            response = this._mel.melFunc('{OBSMODIFIERNOW("' + this.name + '","' + this.comment + '")}');
        }
    };

    remove = (): void => {

    };

    get unitOfMeasure() {
        this._unitOfMeasure = (this._unitOfMeasure != null) ? this._unitOfMeasure : this._mel.melFunc('{OBSUNIT("' + this.name + '")}');
        return this._unitOfMeasure;
    };

    get tag() {
        this._tag = (this._tag != null) ? this._tag
            : (this._observationType === this.observationType.DocumentUnsigned) ? this._mel.melFunc('{OBSTAGNOW("' + this.name + '")}')
                : '';
        return this._tag;
    };

}