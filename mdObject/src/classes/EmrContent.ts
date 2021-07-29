import { ObjectState, ObjectStatus } from '../enums';
import { EmrMel } from './EmrMel';

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

    private data: Array<string> = (this._value == null) ? [] : this._value.split('^');

    state: ObjectState = ObjectState.None;
    status: ObjectStatus = ObjectStatus.Unchanged;

    contentId: string = (this.data.length > 0) ? this.data[0] : '';
    namespace: string = (this.data.length > 1) ? this.data[1] : '';
    nodeName: string = (this.data.length > 2) ? this.data[2] : '';
    displayName: string = (this.data.length > 3) ? this.data[3] : '';
    sourceName: string | null = (this.data.length > 4) ? this.data[4] : '';
    code: string | null = (this.data.length > 5) ? this.data[5] : '';
    codeType: string | null = (this.data.length > 6) ? this.data[6] : '';
    contentGroup: string = (this.data.length > 7) ? this.data[7] : '';
    listOrder: string = (this.data.length > 8) ? this.data[8] : '';
    contentDefault: string = (this.data.length > 9) ? this.data[9] : '';

    constructor(
        public _value: string | null,
        public _mel: EmrMel
    ) { }

    toAddString = (): string => {
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

    toChangeString = (): string => {
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

    save = async () => {
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