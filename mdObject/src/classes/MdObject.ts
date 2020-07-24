import { version, productType } from '../consts/consts'
import { LocationType, UserCallFunction } from '../enums/enums'
import { ObsTermsMap, ClinicalDocument, Emr, Users, Patient } from './classes';

export class MdObject {

    private _emr = new Emr(this._window, this._document);
    private _obsTermsMap = new ObsTermsMap();
    private _clinicalDocument = new ClinicalDocument(this.emr.emrMel);
    private _users = new Users(this.emr.emrMel);
    private _patient = new Patient(this.obsTermsMap.weight, this.obsTermsMap.height, this._window, this._document, this.emr.emrMel);

    constructor(
        public _window: any,
        public _document: any
    ) {
        if (typeof this._window === 'undefined' && typeof this._document === 'undefined') {
            throw new Error("MdObject requires a _window with a _document");
        }
    }

    get version(): string {
        return version;
    }

    get productType(): string {
        return productType;
    }

    get emr() {
        return this._emr;
    }

    get obsTermsMap() {
        return this._obsTermsMap;
    }

    get clinicalDocument() {
        return this._clinicalDocument;
    }

    get users() {
        return this._users;
    }

    get patient() {
        return this._patient;
    }

    get LocationType() {
        return LocationType;
    }

    get UserCallFunction() {
        return UserCallFunction;
    }
}