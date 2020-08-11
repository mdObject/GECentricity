import { EmrApp } from './EmrApp';
import { EmrMel } from './EmrMel';
import { EmrWindow } from './EmrWindow';
import { EmrContent } from './EmrContent';
import { System } from './system';
import { IArrayAdditionalMethods } from '../interfaces/interfaces';
import { StringInternal } from '../factories/factories';
import { DemographicsExternal, AllergyExternal } from './external/external';

export class Emr {

    private _emrMel: EmrMel;
    private _emrApp: EmrApp;
    private _melContent: { [name: string]: IArrayAdditionalMethods<EmrContent> } = {}
    private _emrWindow: EmrWindow = new EmrWindow(this.emrMel, this.emrApp, this._window, this._document);
    private _version: string;
    private _external: any;
    private _baseServicesUrl: string;
    private _demographics: string;
    private _allergies: string;
    private _allergyExternalList: AllergyExternal[] = [];

    constructor(
        public _window: any,
        public _document: any
    ) {
        this._window['_melOpener'] = this.emrMel;
        this._window['_appOpener'] = this.emrApp;
    }

    get enterpriseId() {
        return this.emrApp.enterpriseId;
    }

    get external(): any {
        this._external = this._external ? this._external
            : System.isSimulator ? this.emrApp.external 
                : (this._window.opener && this._window.opener.external) ? this._window.opener.external
                    : this._window.external;
        return this._external;
    }

    get databaseVersion():string {
        return this.emrApp.databaseVersion;
    }

    get version():string {
        this._version = (this._version != null) ? this._version : this.emrMel.melFunc('{VER_EMR()}');
        return this._version;
    }

    // this is emrWindow as modal's window
    get emrWindow() {
        return this._emrWindow;
    }

    melContent = (name: string) => {
        if (this._melContent[name] == null) {
            let data = this.emrMel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');
            let dataArray = StringInternal(data).toList();
            let melContentArray: IArrayAdditionalMethods<EmrContent> = [];
            for (let index = 0; index < dataArray.length; index++) {
                melContentArray.push(new EmrContent(dataArray[index], this.emrMel, this._window));
            }
            this._melContent[name] = melContentArray;

            this._melContent[name].tag = function () {
                return 'MEL_GET_CONTENT';
            }();

            this._melContent[name].toMelString = () => {
                return data;
            }
        }
        return this._melContent[name];
    }

    get emrMel(): EmrMel {
        this._emrMel = (this._window.opener != null && this._window.opener['_melOpener'] != undefined) ? this._window.opener['_melOpener']
            : (this._emrMel != null) ? this._emrMel
                : new EmrMel(this._window);
        return this._emrMel;
    }

    get emrApp(): EmrApp {
        this._emrApp = (this._window.opener != null && this._window.opener['_appOpener'] != undefined) ? this._window.opener['_appOpener']
            : (this._emrApp != null) ? this._emrApp
                : new EmrApp(this._window);
        return this._emrApp;
    }


    get baseServicesUrl(): string 
    {
        this._baseServicesUrl = (this._baseServicesUrl) ? this._baseServicesUrl
            : ((this.external) ? this.external.BaseServicesUrl : this._baseServicesUrl);

        return this._baseServicesUrl;
    }

    get demographics(): DemographicsExternal {
        this._demographics = (this._demographics) ? this._demographics
            : ((this.external) ? this.external.Demographics : this._demographics);

        return new DemographicsExternal(this._demographics);
    }

    get allergies(): AllergyExternal[] {
        if (this._allergyExternalList.length === 0) {

            this._allergies = (this._allergies) ? this._allergies
                : ((this.external) ? this.external.Allergies : this._allergies);

            if (this._allergies) {
                let dataArray = JSON.parse(this._allergies) as [];
                for (let index = 0; index < dataArray.length; index++) {
                    this._allergyExternalList.push(AllergyExternal.fromExternal(dataArray[index]));
                }
            }
        }
        return this._allergyExternalList;
    }

    allergiesJson = (): string => {
        this._allergies = (this._allergies) ? this._allergies
            : ((this.external) ? this.external.Allergies : this._allergies);
        return this._allergies;
    }
}