import { GetActiveXErrorMessage } from "../factories/factories";
import { IsActiveXSupported } from "../factories/IsActiveXSupported";
import { ExtensionExternalSimulator } from "./ExtensionExternalSimulator";

var editorExtensionId = "gcjidgolppaalnedpaadmcnmhmdohflp";

declare var chrome;

export class Simulator {
    private _isExtensionEvaluated: boolean = false;
    private _isActiveX: boolean = false;

    private _ExtensionExternalSimulator: ExtensionExternalSimulator = new ExtensionExternalSimulator();

    public isSimulator = async (): Promise<boolean> => {
        if (this._isSimulator) {
            return this._isSimulator;
        }
        else {
            if (!this._isExtensionEvaluated) {
                this._isSimulator = await Simulator.sendMessage(editorExtensionId, { greeting: "hello" });
                this._isExtensionEvaluated = true;
            }
            return this._isSimulator;
        }
    }
    private _isSimulator: boolean = false;

    constructor(public _window: any) {
        this.initialization();
        //this.Ready = Simulator.sendMessage(editorExtensionId, { greeting: "hello" }).then(e => this.isSimulator = e);
    }

    public Ready: Promise<any>;

    private initialization = (): void => {
        if (IsActiveXSupported(this._window)) {
            try {
                this._isActiveX = true;
                this.app = new this._window.ActiveXObject(this.appObjectNameSimulator);
                this._isSimulator = true;
            } catch (e) {
                let errorMessage = GetActiveXErrorMessage(this.appObjectNameSimulator, e);
                console.log(errorMessage);
            }
        }
        else {
            //if (chrome) {
            //    Simulator.sendMessage(editorExtensionId, { greeting: "hello" }).then(e => {
            //        console.log('isSimulator: ' + e);
            //        this.isSimulator = Promise.resolve(true);
            //    });
            //};
        }
    }



    private appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
    private app:any;
    readonly noData: string = 'Data Access Error';

    get externalSimulator(): any {
        return (this._isSimulator) ? ((!this._isActiveX) ? this._ExtensionExternalSimulator : (this.app) ? this.app.external : this.noData) : this.noData;
    }

    private static _isChromeExtension?: boolean;

     static isChromeExtension = async (): Promise<boolean>  => {
        if (Simulator._isChromeExtension === undefined) {
            if (chrome) {
                Simulator._isChromeExtension = await Simulator.sendMessage(editorExtensionId, { greeting: "hello" });
            }
            else {
                Simulator._isChromeExtension = false;
            }
        }

        return Simulator._isChromeExtension;
    }

    private static sendMessage = (editorExtensionId: string, data: any) => new Promise<boolean>((resolve, _reject) => {
        if (chrome) {
            chrome.runtime.sendMessage(editorExtensionId, data, (response: any) => {
                if (response) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        }
        else {
            resolve(false);
        }
    });

    myObjectExtension: any;
    public getObjectChrome() {
        let myFoo = function (response) {
            console.log(response);
            this.myObjectExtension = response;
        }
        chrome.runtime.sendMessage(editorExtensionId, { greeting: "hello" }, myFoo.bind(this));
    }

    external = (_data: any): any => {
        if (chrome) {
            chrome.runtime.sendMessage(editorExtensionId, { greeting: "hello" },
                function (response) {
                    console.log(response.farewell);
                    if (response.success)
                        console.log("success!!!!!!!");
                });
        }
    }
}