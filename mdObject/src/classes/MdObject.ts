//
// temporary variables
import { version, productType } from '../consts/consts'
import { ObsTermsMap, ClinicalDocument, Emr, Users, Patient } from './classes';

export class MdObject {

    private _emr = new Emr(this.window, this.document);
    private _obsTermsMap = new ObsTermsMap();
    private _clinicalDocument = new ClinicalDocument(this.emr.emrMel);
    private _users = new Users(this.emr.emrMel);
    private _patient = new Patient(this.obsTermsMap.weight, this.obsTermsMap.height, this.window, this.document, this.emr.emrMel);

    constructor(
        public window: any,
        public document: any
    ) {
        if (typeof this.window === 'undefined' && typeof this.document === 'undefined') {
            throw new Error("MdObject requires a window with a document");
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
}
