import { EmrApp } from './EmrApp';
import { EmrMel } from './EmrMel';
import { EmrWindow } from './EmrWindow';
import { DemographicsExternal, ProblemExternal } from './external/external';
import { Patient } from './Patient';
import { Users } from './Users';
import { Simulator } from '../simulator/simulator';
import { ClinicalDocument } from './ClinicalDocument';
import { LocationType, UserCallFunction } from '../enums'
import { ObsTermsMap } from './ObsTermsMap';
import { AllergiesExternal } from './external/AllergiesExternal';
import { EmrContents } from './EmrContents';

export class Emr {

    private _emrMel: EmrMel;
    private _emrApp: EmrApp;
    private _melContent: { [name: string]: EmrContents } = {}
    private _emrWindow: EmrWindow;
    private _version: string;
    private _external: any;
    private _baseServicesUrl: string;
    private _demographics: string;
    private _allergiesJson: string;
    private _problemsJson: string;
    private _problemExternalList: ProblemExternal[] = [];
    private _simulator: Simulator;
    private _clinicalDocument: ClinicalDocument;
    private _obsTermsMap: ObsTermsMap;

    private _patient: Patient;
    private _users: Users;

    constructor(
        public _window: any,
        public _document: any
    ) {
        this._simulator = new Simulator(this._window); // should be the first here

        this._window['_melOpener'] = this.emrMel;
        this._window['_appOpener'] = this.emrApp;
        this._obsTermsMap = new ObsTermsMap();
        this._emrWindow = new EmrWindow(this.emrMel, this.emrApp, this._window, this._document);
    }

    get enterpriseId() {
        return this.emrApp.enterpriseId;
    }

    get external(): any {
        if (this._external) {
            return this._external;
        }

        this._external = (this._window.opener && this._window.opener.external)
            ? this._window.opener.external : this._window.external;
        if (this._external.IsDebugMode === undefined) {
            // try simulator
            this._external = this._simulator.externalSimulator;
        }

        return this._external;
    }

    externalAsync = async (): Promise<any> => {

        if (this._external) {
            return this._external;
        }

        this._external = (await this._simulator.isSimulatorAsync())
            ? this._simulator.externalSimulator   // if the simulator is set, then use simulator
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

    async emrContentsAsync(name: string):Promise<EmrContents> {
        let content = new EmrContents();
        await content.loadAsync(name, this.emrMel);
        return content;
    }

    melContent = (name: string, reload: boolean = false) => {
        if (this._melContent[name] == null || reload) {
            this._melContent[name] = new EmrContents();
            this._melContent[name].load(name, this.emrMel);
        }

        return this._melContent[name];
    }

    get emrMel(): EmrMel {
        this._emrMel = (this._window.opener != null && this._window.opener['_melOpener'] != undefined) ? this._window.opener['_melOpener']
            : (this._emrMel != null) ? this._emrMel
                : new EmrMel(this._window, this._simulator);
        return this._emrMel;
    }

    get emrApp(): EmrApp {
        this._emrApp = (this._window.opener != null && this._window.opener['_appOpener'] != undefined) ? this._window.opener['_appOpener']
            : (this._emrApp != null) ? this._emrApp
                : new EmrApp(this._window, this._simulator);
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

    demographicsAsync = async (): Promise<DemographicsExternal> => {
        this._demographics = (this._demographics) ? this._demographics
            : ((await this.externalAsync()) ? await this.externalAsync().then(e=> e.Demographics) : this._demographics);

        return new DemographicsExternal(this._demographics);
    }

    public get allergies(): AllergiesExternal {
        this._allergiesJson = (this._allergiesJson) ? this._allergiesJson
            : ((this.external) ? this.external.Allergies : this._allergiesJson);

        return new AllergiesExternal(this._allergiesJson);
    }

    allergiesAsync = async (): Promise<AllergiesExternal> => {
        this._allergiesJson = (this._allergiesJson) ? this._allergiesJson
            : ((await this.externalAsync()) ? await this.externalAsync().then(e => e.Allergies) : this._allergiesJson);

        return new AllergiesExternal(this._allergiesJson);
    }

    allergiesJson = (): string => {
        this._allergiesJson = (this._allergiesJson) ? this._allergiesJson
            : ((this.external) ? this.external.Allergies : this._allergiesJson);
        return this._allergiesJson;
    }

    public get problems(): ProblemExternal[] {
        if (this._problemExternalList.length === 0) {

            let problemsJson = this.problemsJson();

            if (problemsJson) {
                let dataArray = JSON.parse(problemsJson) as [];
                for (let index = 0; index < dataArray.length; index++) {
                    this._problemExternalList.push(ProblemExternal.fromExternal(dataArray[index]));
                }
            }
        }
        return this._problemExternalList;
    }

    problemsJson = (): string => {
        this._problemsJson = (this._problemsJson) ? this._problemsJson
            : ((this.external) ? this.external.Problems : this._problemsJson);
        return this._problemsJson;
    }

    get patient(): Patient {
        if (this._patient === undefined) {
            this._patient = new Patient(this.emrMel, this.demographics, this.allergies);
        }
        return this._patient;
    }

    patientAsync = async (): Promise<Patient> => {
        if (this._patient === undefined) {
            this._patient = new Patient(this.emrMel, await this.demographicsAsync(), await this.allergiesAsync());
        }
        return this._patient;
    }

    get users(): Users {
        if (this._users === undefined) {
            this._users = new Users(this.emrMel);
        }
        return this._users;
    }

    get clinicalDocument(): ClinicalDocument {
        if (this._clinicalDocument === undefined) {
            this._clinicalDocument = new ClinicalDocument(this.emrMel, this);
        }
        return this._clinicalDocument;
    }

    clinicalDocumentAsync = async (): Promise<ClinicalDocument> => {
        if (this._clinicalDocument === undefined) {
            this._clinicalDocument = new ClinicalDocument(this.emrMel, await this);
        }
        return this._clinicalDocument;
    }

    get obsTermsMap(): ObsTermsMap {
        return this._obsTermsMap;
    }

    get LocationType() {
        return LocationType;
    }

    get UserCallFunction() {
        return UserCallFunction;
    }

    // Implements MEL eval 
    melFuncAsync = async (data: string, showWait: boolean = false): Promise<string> => {
        return await this.externalAsync().then(e => e.EvaluateMel(data, showWait));
    }
}