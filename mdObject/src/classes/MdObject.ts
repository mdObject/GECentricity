import { version, productType } from '../consts/consts'
import { LocationType, UserCallFunction } from '../enums/enums'
import { ObsTermsMap } from './ObsTermsMap';
import { ClinicalDocument } from './ClinicalDocument';
import { Emr } from './Emr';

export class MdObject {

    private _emr = new Emr(this._window, this._document);
    private _obsTermsMap = new ObsTermsMap();
    private _clinicalDocument = new ClinicalDocument(this.emr.emrMel);

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

    public get emr():Emr {
        return this._emr;
    }

    get obsTermsMap():ObsTermsMap {
        return this._obsTermsMap;
    }

    get clinicalDocument():ClinicalDocument {
        return this._clinicalDocument;
    }

    get LocationType() {
        return LocationType;
    }

    get UserCallFunction() {
        return UserCallFunction;
    }
}