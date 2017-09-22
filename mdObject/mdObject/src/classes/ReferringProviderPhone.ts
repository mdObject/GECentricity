//
import { EmrMel } from './classes';

export class ReferringProviderPhone {

    private _office: string;
    private _alternative: string;
    private _fax: string;
    private _pager: string;
    private _mobile: string;

    constructor(
        public _mel: EmrMel
    ) { }

    get office() {
        this._office = (this._office != null) ? this._office : this._mel.melFunc('{PATIENT.REFMDOFFICEPHONE}');
        return this._office;
    };

    get alternative() {
        this._alternative = (this._alternative != null) ? this._alternative : this._mel.melFunc('{PATIENT.REFMDALTPHONE}');
        return this._alternative;
    };

    get fax() {
        this._fax = (this._fax != null) ? this._fax : this._mel.melFunc('{PATIENT.REFMDFAXPHONE}');
        return this._fax;
    };

    get pager() {
        this._pager = (this._pager != null) ? this._pager : this._mel.melFunc('{PATIENT.REFMDPAGERPHONE}');
        return this._pager;
    };

    get mobile() {
        this._mobile = (this._mobile != null) ? this._mobile : this._mel.melFunc('{PATIENT.REFMDCELLPHONE}');
        return this._mobile;
    };
}

