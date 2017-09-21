//
import { EmrApp, EmrMel, EmrWindow, EmrContent } from './classes';
import { IArrayAdditionalMethods } from '../interfaces/interfaces';
import { StringInternal } from '../factories/factories';

export class Emr {

    private readonly _emrMel = new EmrMel(this.browserWindow);
    private readonly _emrApp = new EmrApp(this.browserWindow);
    private _melContent: { [name: string]: IArrayAdditionalMethods<EmrContent> } = {};
    private _window: EmrWindow = new EmrWindow(this._emrMel, this._emrApp, this.browserWindow, this.browserDocument);
    private _version: string;

    constructor(
        public browserWindow: any,
        public browserDocument: any
    ) {
        this.browserWindow['_melOpener'] = this._emrMel;
        this.browserWindow['_appOpener'] = this._emrApp;
    }

    get enterpriseId() {
        return this._emrApp.enterpriseId;
    }

    get databaseVersion() {
        return this._emrApp.databaseVersion;
    }

    get version() {
        this._version = (this._version !== undefined) ? this._version : this._emrMel.melFunc('{VER_EMR()}');
        return this._version;
    }

    get window() {
        return this._window;
    }

    melContent = (name: string) => {
        if (this._melContent[name] === undefined) {
            let data = this._emrMel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');
            let dataArray = StringInternal(data).toList();
            let melContentArray: IArrayAdditionalMethods<EmrContent> = [];
            for (let index = 0; index < dataArray.length; index++) {
                melContentArray.push(new EmrContent(dataArray[index], this._emrMel, this.browserWindow));
            }
            this._melContent[name] = melContentArray;

            this._melContent[name].tag = function () {
                return 'MEL_GET_CONTENT';
            }();

            this._melContent[name].toMelString = () => {
                return data;
            };
        }
        return this._melContent[name];
    }

    get emrMel(): EmrMel {
        let data = (this.browserWindow.opener['_melOpener'] !== undefined) ? this.browserWindow.opener['_melOpener'] : this._emrMel
        return data;
    }

    get emrApp(): EmrApp {
        let data = (this.browserWindow.opener['_appOpener'] !== undefined) ? this.browserWindow.opener['_appOpener'] : this._emrApp
        return data;
    }
}