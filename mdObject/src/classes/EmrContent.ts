import { ObjectState, ObjectStatus } from '../enums';
import { EmrMel } from './EmrMel';

export interface EmrContentParams {
    data?: string,
    mel?: EmrMel
    // Add Parameters ...
}

/* This class correlates to the ContentList table.
 * The "namespace" parameter (formal key) is not unique and maybe duplicated 255 characters
 * The "nodeName" parameter (formal name) 20 characters
 * The "displayName" parameter (formal value) 400 characters
 * The "code" parameter 20 characters. You may use as Encrypted/Encoded flag.
 * The "codeType" parameter 10 characters. You may use as type of encryption, for example BASE64 
 * The "contentGroup" parameter is numeric
 * The "listOrder" parameter is numeric
 * The "contentDefault" parameter is numeric
 */
export class EmrContent {


    state: ObjectState = ObjectState.None;
    status: ObjectStatus = ObjectStatus.Unchanged;

    contentId: string;
    namespace: string;
    nodeName: string;
    displayName: string;
    sourceName: string | null;
    code: string | null;
    codeType: string | null;
    contentGroup: string;
    listOrder: string;
    contentDefault: string;

    private _mel: EmrMel
    private data: Array<string>;

    constructor(params: EmrContentParams = {} as EmrContentParams) {
        let { data = null, mel = null } = params;
        this._mel = mel;
        this.data = (data == null) ? [] : data.split('^');
        this.initializeData()
    }

    private initializeData = (): void => {
        this.contentId = (this.data.length > 0) ? this.data[0] : '';
        this.namespace = (this.data.length > 1) ? this.data[1] : '';
        this.nodeName = (this.data.length > 2) ? this.data[2] : '';
        this.displayName = (this.data.length > 3) ? this.data[3] : '';
        this.sourceName = (this.data.length > 4) ? this.data[4] : '';
        this.code = (this.data.length > 5) ? this.data[5] : '';
        this.codeType = (this.data.length > 6) ? this.data[6] : '';
        this.contentGroup = (this.data.length > 7) ? this.data[7] : '';
        this.listOrder = (this.data.length > 8) ? this.data[8] : '';
        this.contentDefault = (this.data.length > 9) ? this.data[9] : '';
    }

    private toAddString = (): string => {
        return this.namespace + '^' +
            this.nodeName + '^' +
            this.displayName + '^' +
            this.sourceName + '^' +
            this.code + '^' +
            this.codeType + '^' +
            this.contentGroup + '^' +
            this.listOrder + '^' +
            this.contentDefault;
    }

    private toChangeString = (): string => {
        return this.namespace + '^' +
            this.nodeName + '^' +
            this.displayName + '^' +
            this.sourceName + '^' +
            this.code + '^' +
            this.codeType + '^' +
            this.contentGroup + '^' +
            this.listOrder + '^' +
            this.contentDefault;
    }

    save = async (mel?: EmrMel) => {
        if (!this._mel && mel) { this._mel = mel; }
        if (!this._mel) { throw new Error('Mel undefined');}
        switch (this.state) {
            case ObjectState.Add: {
                let code: string = await this._mel.melFunc('{MEL_ADD_CONTENT("' + this.toAddString() + '")}');
                let codeNumeric: number = +code;
                if (codeNumeric < 0 || codeNumeric === NaN) {
                    let error = 'EmrContent.save error. Code is ' + code;
                    console.error(error);
                    throw new Error('EmrContent not saved. ' + error);
                }

                this.contentId = code;
                this.nodeName = (this.nodeName) ? this.nodeName : code;
                this.status = ObjectStatus.Added;
                this.state = ObjectState.None;
                break;
            }
            case ObjectState.Update: {
                let code: string = await this._mel.melFunc('{MEL_UPDATE_CONTENT("' + this.contentId + '","' + this.toChangeString() + '")}');
                let codeNumeric: number = +code;

                if (codeNumeric < 0 || codeNumeric === NaN) {
                    let error = 'EmrContent.save error. Code is ' + code;
                    console.error(error);
                    throw new Error('EmrContent not saved. ' + error);
                }

                this.status = ObjectStatus.Updated;
                this.state = ObjectState.None;
                break;
            }
            case ObjectState.Remove: {
                let code: string = await this._mel.melFunc('{MEL_REMOVE_CONTENT("' + this.contentId + '")}');
                let codeBoolean: boolean = (code == "true");

                if (!codeBoolean) {
                    let error = 'EmrContent.save error. Code is ' + code;
                    console.error(error);
                    throw new Error('EmrContent not saved. ' + error);
                }

                this.status = ObjectStatus.Removed;
                this.state = ObjectState.None;
                break;
            }
        }
    }
}