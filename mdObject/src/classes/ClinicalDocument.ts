import { Location } from './Location';
import { EmrMel } from './EmrMel';
import { LocationType } from '../enums/enums';
import { DocumentVariable } from '../factories/factories';
import { IArrayAdditionalMethods, IItem } from '../interfaces';
import { Emr } from './Emr';

export class ClinicalDocument {

    private _letiables: string;
    private _did: string;
    private _xid: string;
    private _documentId: string;
    private _status: string;
    private _location: string;
    private _locationPropertyArray: IArrayAdditionalMethods<Location> = [];
    private _locationProperty: Location;
    private _dateOfUpdate: string;
    private _provider: string;
    private _userLoginName: string;

    constructor(
        public _mel: EmrMel,
        public _emr?: Emr
    ) { }

    private save = (): void => {
        this._mel.melFunc('{DOCUMENT.mdObject_letiables = "' + JSON.stringify(this.rawValue).replace(/"/g, '\\"') + '"}');
    }

    private rawValue: IItem = DocumentVariable({}, this.save);

    // The letiables allows to save any JSON object with the clinicalDocument.
    // Usage: $mdObject.clinicalDocument.letiables = {"alex":1} - creates object with letiable alex and assigned value 1.
    //        $mdObject.clinicalDocument.letiables["alex"]=4;  -changes value of alex to 4
    //        $mdObject.clinicalDocument.letiables.save(); - saves the object with the document
    get letiables() {
        if (this._letiables == null) {
            this._letiables = (this._letiables != null) ? this._letiables : this._mel.melFunc('{DOCUMENT.mdObject_letiables}');
            this._letiables = (this._letiables !== '') ? this._letiables : JSON.stringify(this.rawValue);
            try {
                this.rawValue = DocumentVariable(JSON.parse(this._letiables), this.save);
            } catch (e) {
                this.rawValue = {}
            }
        }
        return this.rawValue;
    }

    set letiables(val: IItem) {
        for (let key in val) {
            this.rawValue[key] = val[key];
        }
        this._mel.melFunc('{DOCUMENT.mdObject_letiables = "' + JSON.stringify(this.rawValue).replace(/"/g, '\\"') + '"}');
    }

    // The val allows to get or set DOCUMENT letiable
    // Usage: $mdObject.clinicalDocument.val("MyVariable") return value from {DOCUMENT.MyVariable}.
    //        $mdObject.clinicalDocument.val("MyVariable", "High") - assign value "High" to {DOCUMENT.MyVariable} and stores it with document (saves in database)
    val = (key: string, value?: string): string => {
        if (key == null || key.length === 0) {
            return undefined;
        }

        if (value == null) {
            return this._mel.melFunc('{DOCUMENT.' + key + '}');
        } else {
            return this._mel.melFunc('{DOCUMENT.' + key + '="' + value + '"}');
        }
    }

    get did() {
        this._did = (this._did != null) ? this._did : this._mel.melFunc('{find("DOCUMENT","DID")}');
        return this._did;
    }

    async didAsync(): Promise<string> {
        this._did = (this._did != null) ? this._did : await this._emr.melFuncAsync('{find("DOCUMENT","DID")}');
        return this._did;
    }

    get xid() {
        this._xid = (this._xid != null) ? this._xid : this._mel.melFunc('{DOCUMENT.XID}').split('.')[0];
        return this._xid;
    }

    // The unique document identifier for a document within a patient chart. You can see the Doc ID on each 
    // document and on a chart update. Each document in the patient’s chart has a Doc ID.
    get documentId() {
        this._documentId = (this._documentId != null) ? this._documentId : this._mel.melFunc('{DOCUMENT.VISDOCID}');
        return this._documentId;
    }


    // Status of the current document. TODO: Convert to enum
    // Code for document status:
    //        A = Active
    //        H = Hold
    //        S = Signed
    get status() {
        this._status = (this._status != null) ? this._status : this._mel.melFunc('{DOCUMENT.STATUS}');
        return this._status;
    }

    // The location of care of the document for the current chart update.
    get location() {
        if (this._locationPropertyArray.length === 0) {
            this._location = (this._location != null) ? this._location : this._mel.melFunc('{DOCUMENT.LOCOFCARENAME}');
            this._locationProperty = (this._locationProperty != null) ? this._locationProperty : new Location(this._location, this._location, LocationType.Current);
            this._locationPropertyArray.push(this._locationProperty);
            this._locationPropertyArray.findByType =
                (function (value) {
                    let i;
                    if (typeof (value) === "number") {
                        for (i = 0; i < this.length; i++) {
                            if (this[i].locationType === value) {
                                return this[i];
                            }
                        }
                    }
                    return undefined;

                });
        }

        return this._locationPropertyArray;
    }

    get dateOfUpdate() {
        this._dateOfUpdate = (this._dateOfUpdate != null) ? this._dateOfUpdate : this._mel.melFunc('{DOCUMENT.CLINICALDATE}');
        return this._dateOfUpdate;
    }

    get provider() {
        this._provider = (this._provider != null) ? this._provider : this._mel.melFunc('{DOCUMENT.PROVIDER}');
        return this._provider;
    }

    get userLoginName() {
        this._userLoginName = (this._userLoginName != null) ? this._userLoginName : this._mel.melFunc('{DOCUMENT.USERLOGINNAME}');
        return this._userLoginName;
    }
}