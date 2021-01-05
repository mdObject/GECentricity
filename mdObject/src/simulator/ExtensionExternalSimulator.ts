/// <reference types="chrome"/>
export class ExtensionExternalSimulator {
    private editorExtensionId = "gcjidgolppaalnedpaadmcnmhmdohflp";

    EvaluateMel = (data: any): Promise<any> => {
        return this.sendMessage(this.editorExtensionId, data);
    }

    Demographics = (): Promise<any> => {
        return this.sendMessage(this.editorExtensionId, { type: 'Demographics' } );
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