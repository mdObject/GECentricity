/// <reference types="chrome"/>

import { simulatorChromeExtensionId } from "../consts/consts";

export class ExtensionExternalSimulator {

    EvaluateMel = (data: any): Promise<any> => {
        return this.sendMessage(simulatorChromeExtensionId, data);
    }

    Demographics = (): Promise<any> => {
        return this.sendMessage(simulatorChromeExtensionId, { type: 'Demographics' } );
    }

    private sendMessage = (editorExtensionId: string, data: any) => new Promise<any>((resolve, reject) => {
        if (typeof (chrome) !== 'undefined') {
            chrome.runtime.sendMessage(editorExtensionId, data, (response: any) => {
                if (response) {
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
    });
}