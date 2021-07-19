/// <reference types="chrome"/>
import { simulatorChromeExtensionId } from "../consts/consts";
import { GetActiveXErrorMessage } from "../factories/factories";
import { IsActiveXSupported } from "../factories/IsActiveXSupported";
import { ExtensionExternalSimulator } from "./ExtensionExternalSimulator";

export class Simulator {
    private readonly appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
    private readonly noData: string = 'Data Access Error';
    private _isExtensionEvaluated: boolean = false; // holds validation for async call to the Chrome Extension
    private _isActiveX: boolean = false;            // true for activeX simulator
    private app: any;
    private _isSimulator: boolean = false;

    private _ExtensionExternalSimulator: ExtensionExternalSimulator = new ExtensionExternalSimulator();

    public isSimulatorAsync = async (): Promise<boolean> => {
        if (this._isSimulator) {
            return this._isSimulator;
        }
        else {
            if (!this._isExtensionEvaluated) {
                this._isSimulator = await this.sendMessage(simulatorChromeExtensionId, { type: "version" });
                this._isExtensionEvaluated = true;
            }
            return this._isSimulator;
        }
    }

    constructor(public _window: any) {
        this.initialization();
    }

    private initialization = (): void => {
        if (IsActiveXSupported(this._window)) {
            try {
                this.app = new this._window.ActiveXObject(this.appObjectNameSimulator);
                this._isActiveX = true;
                this._isSimulator = true;
                console.info('mdObject is using ActiveX Simulator: ' + this.appObjectNameSimulator);
            } catch (e) {
                let errorMessage = GetActiveXErrorMessage(this.appObjectNameSimulator, e);
                console.info(errorMessage);
            }
        }
    }

    get externalSimulator(): any {
        return ((!this._isActiveX) ? this._ExtensionExternalSimulator : (this.app) ? this.app.external : this.noData);
    }

    private sendMessage = (editorExtensionId: string, data: any) => new Promise<boolean>((resolve, _reject) => {
        if (typeof (chrome) !== 'undefined') {
            if (typeof (chrome.runtime) !== 'undefined') {
                chrome.runtime.sendMessage(editorExtensionId, data, (response: any) => {
                    if (response) {
                        console.info('mdObject is using Chrome Extension Simulator: ' + simulatorChromeExtensionId);
                        resolve(true);
                    }
                    else {
                        console.info('mdObject: Chrome Extension Simulator is missing or inactive');
                        resolve(false);
                    }
                });
            }
            else {
                resolve(false);
            }
        }
        else {
            resolve(false);
        }
    });
}