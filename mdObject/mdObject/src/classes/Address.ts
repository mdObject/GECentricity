//
import { EmrMel } from './classes';

export class Address {

    private _address1: string;
    private _address2: string;
    private _city: string;
    private _state: string;
    private _postCode: string;
    private _country: string;

    constructor(
        public _mel: EmrMel
    ) { }

    // Returns the first line of the patient’s address
    get address1() {
        this._address1 = (this._address1 !== undefined) ? this._address1 : this._mel.melFunc('{PATIENT.ADDRESS1}');
        return this._address1;
    }

    // Returns the second line of the patient’s address
    get address2() {
        this._address2 = (this._address2 !== undefined) ? this._address2 : this._mel.melFunc('{PATIENT.ADDRESS2}');
        return this._address2;
    }

    // Returns the patient’s city of residence
    get city() {
        this._city = (this._city !== undefined) ? this._city : this._mel.melFunc('{PATIENT.CITY}');
        return this._city;
    }

    // Returns the patient’s state or province
    get state() {
        this._state = (this._state !== undefined) ? this._state : this._mel.melFunc('{PATIENT.STATE}');
        return this._state;
    }

    // Returns the patient’s ZIP/Postal code
    get postCode() {
        this._postCode = (this._postCode !== undefined) ? this._postCode : this._mel.melFunc('{PATIENT.ZIP}');
        return this._postCode;
    }

    // Returns the patient’s country of residence
    get country() {
        this._country = (this._country !== undefined) ? this._country : this._mel.melFunc('{PATIENT.COUNTRY}');
        return this._country;
    }
}

