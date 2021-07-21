/// <reference types="chrome"/>

import { simulatorChromeExtensionId } from "../consts/strings";

export class ExtensionExternalSimulator {

    EvaluateMel = (data: any, _showWait: boolean = false): Promise<any> => {
        return this.sendMessage(simulatorChromeExtensionId, { type: 'EvaluateMel', data: data });
    }

    get Demographics(): Promise<any> {
        return this.sendMessage(simulatorChromeExtensionId, { type: 'Demographics' });
    }

    get Allergies(): Promise<any> {
        return this.sendMessage(simulatorChromeExtensionId, { type: 'Allergies' });
    }

    private sendMessage = (editorExtensionId: string, data: any) => new Promise<any>((resolve, reject) => {
        if (typeof (chrome) !== 'undefined') {
            if (typeof (chrome.runtime) !== 'undefined') {
                chrome.runtime.sendMessage(editorExtensionId, data, (response: any) => {
                    if (typeof (response) !== 'undefined') {
                        resolve(response);
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                reject('unsupported');
            }
        }
        else {
            reject('unsupported');
        }
    });
}