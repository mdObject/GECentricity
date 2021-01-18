import { EmrMel } from './classes';
import { ElectronicAddressExternal } from './external/ElectronicAddressExternal';

export class Phone {

    private _home: string;
    private _business: string;
    private _mobile: string;
    private _fax: string;

    constructor(
        public _mel: EmrMel,
        public _electronicAddressExternal?: ElectronicAddressExternal[]
    ) {
        if (this._electronicAddressExternal) {
            this._home = (this._home != null) ? this._home : this._electronicAddressExternal.find(a => (a.addressSettingCode === "H" && a.urlScheme === "tel"))?.urlAddr?.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
        }
    }

    get home() {
        this._home = (this._home != null) ? this._home : this._mel.melFunc('{PATIENT.ALTPHONE}');
        return this._home;
    }

    async homeAsync() {
        this._home = (this._home != null) ? this._home : await this._mel.melFunc('{PATIENT.ALTPHONE}');
        return this._home;
    }

    // Returns the patient’s business/work telephone number
    get business() {
        this._business = (this._business != null) ? this._business : this._mel.melFunc('{PATIENT.WORKPHONE}');
        return this._business;
    }

    async businessAsync() {
        this._business = (this._business != null) ? this._business : await this._mel.melFunc('{PATIENT.WORKPHONE}');
        return this._business;
    }

    // Returns the patient’s cell phone number
    get mobile() {
        this._mobile = (this._mobile != null) ? this._mobile : this._mel.melFunc('{PATIENT.CELLPHONE}');
        return this._mobile;
    }

    async mobileAsync() {
        this._mobile = (this._mobile != null) ? this._mobile : await this._mel.melFunc('{PATIENT.CELLPHONE}');
        return this._mobile;
    }

    // Returns the patient’s fax number
    get fax() {
        this._fax = (this._fax != null) ? this._fax : this._mel.melFunc('{PATIENT.FAXPHONE}');
        return this._fax;
    }

    async faxAsync() {
        this._fax = (this._fax != null) ? this._fax : await this._mel.melFunc('{PATIENT.FAXPHONE}');
        return this._fax;
    }
}