import { EmrMel } from './EmrMel';
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
            this._home = (this._home !== undefined) ? this._home : this._electronicAddressExternal.find(a => (a.addressSettingCode === "H" && a.urlScheme === "tel"))?.urlAddr;
            this._home = (this._home) ? this.formatMelPhone(this._home) : this._home;

            this._business = (this._business !== undefined) ? this._business : this._electronicAddressExternal.find(a => (a.addressSettingCode === "WP" && a.urlScheme === "tel"))?.urlAddr;
            this._business = (this._business) ? this.formatMelPhone(this._business) : this._business;

            this._mobile = (this._mobile !== undefined) ? this._mobile : this._electronicAddressExternal.find(a => (a.addressSettingCode === "MC" && a.urlScheme === "tel"))?.urlAddr;
            this._mobile = (this._mobile) ? this.formatMelPhone(this._mobile) : this._mobile;
        }
    }

    private formatMelPhone = (phone) => {
        var phoneTest = new RegExp(/(\d{3})(\d{3})(\d{4})(\d+)?/);
        phone = phone.trim();
        var results = phoneTest.exec(phone);
        if (results !== null && results.length > 4) {
            return "(" + results[1] + ") " + results[2] + "-" + results[3] + (typeof results[4] !== "undefined" ? " [" + results[4] + "]" : "");
        }
        else {
            return phone;
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