//
import { EmrMel } from './classes';

export class Phone {

    private _home: string;
    private _business: string;
    private _mobile: string;
    private _fax: string;

    constructor(
        public _mel: EmrMel
    ) { }

    get home() {
        this._home = (this._home !== undefined) ? this._home : this._mel.melFunc('{PATIENT.ALTPHONE}');
        return this._home;
    };

    // Returns the patient’s business/work telephone number
    get business() {
        this._business = (this._business !== undefined) ? this._business : this._mel.melFunc('{PATIENT.WORKPHONE}');
        return this._business;
    };

    // Returns the patient’s cell phone number
    get mobile() {
        this._mobile = (this._mobile !== undefined) ? this._mobile : this._mel.melFunc('{PATIENT.CELLPHONE}');
        return this._mobile;
    };

    // Returns the patient’s fax number
    get fax() {
        this._fax = (this._fax !== undefined) ? this._fax : this._mel.melFunc('{PATIENT.FAXPHONE}');
        return this._fax;
    }

}