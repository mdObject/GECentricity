import { EmrApp, EmrMel, EmrWindow, EmrContent } from './classes';
import { IArrayAdditionalMethods } from '../interfaces/interfaces';
import { StringInternal } from '../factories/factories';

export class Emr {

    private _emrMel: EmrMel;
    private _emrApp: EmrApp;
    private _melContent: { [name: string]: IArrayAdditionalMethods<EmrContent> } = {}
    private _emrWindow: EmrWindow = new EmrWindow(this.emrMel, this.emrApp, this._window, this._document);
    private _version: string;

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

    get databaseVersion() {
        return this.emrApp.databaseVersion;
    }

    get version() {
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
}