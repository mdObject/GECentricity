import { EmrMel } from './classes';

export class Insurance {

    private _name: string;
    private _address: string;
    private _insuranceId: string;
    private _planName: string;
    private _groupNumber: string;
    private _phone: string;


    constructor(
        public insuranceType: string, // Type of insurance P = Primary S = Secondary O = Other,
        public _mel: EmrMel
    ) { }

    // The name of the patient’s insurance carrier.
    get name() {
        this._name = (this._name == null) ? this._mel.melFunc('{INS_NAME("' + this.insuranceType + '")}') : this._name;
        return this._name;
    }

    // The name and address of the patient’s insurance carrier.
    get address() {
        this._address = (this._address == null) ? this._mel.melFunc('{INS_ADDR("' + this.insuranceType + '")}') : this._address;
        return this._address;
    }

    // The patient’s insurance ID number for insurance carrier.
    get insuranceId() {
        this._insuranceId = (this._insuranceId == null) ? this._mel.melFunc('{INS_ID("' + this.insuranceType + '")}') : this._insuranceId;
        return this._insuranceId;
    }

    // The name of the patient’s plan for insurance
    get planName() {
        this._planName = (this._planName == null) ? this._mel.melFunc('{INS_PLAN("' + this.insuranceType + '")}') : this._planName;
        return this._planName;
    }

    // The group number of the patient’s insurance carrier.
    get groupNumber() {
        this._groupNumber = (this._groupNumber == null) ? this._mel.melFunc('{INS_GRP("' + this.insuranceType + '")}') : this._groupNumber;
        return this._groupNumber;
    }

    // The phone number of the patient’s insurance company
    get phone() {
        this._phone = (this._phone == null) ? this._mel.melFunc('{INS_PHONE("' + this.insuranceType + '")}') : this._phone;
        return this._phone;
    }
}