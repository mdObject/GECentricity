import { AllergyList } from './AllergyList';
import { AllergyListRemoved } from './AllergyListRemoved';
import { EmrMel } from './EmrMel';
import { StringInternal } from '../factories/factories';
import { IArrayAdditionalMethods } from '../interfaces/interfaces';

export class Allergies {

    private _added: string;
    private _addedArray: IArrayAdditionalMethods<AllergyList> = [];
    private _current: string;
    private _currentArray: IArrayAdditionalMethods<AllergyList> = [];
    private _removed: string;
    private _removedArray: IArrayAdditionalMethods<AllergyListRemoved> = [];

    constructor(
        public _mel: EmrMel
    ) { }

    get added() {
        if (this._addedArray.length === 0) {
            this._added = (this._added != null) ? this._added : this._mel.melFunc('{ALL_NEW("delimited")}');
            let dataArray = StringInternal(this._added).toList();
            for (let index = 0; index < dataArray.length; index++) {
                this._addedArray.push(new AllergyList(dataArray[index]));
            }
        }
        return this._addedArray;
    }

    get current() {
        if (this._currentArray.length === 0) {
            this._current = (this._current != null) ? this._current : this._mel.melFunc('{ALL_PRIOR("delimited")}');
            let dataArray = StringInternal(this._current).toList();
            for (let index = 0; index < dataArray.length; index++) {
                this._currentArray.push(new AllergyListRemoved(dataArray[index]));
            }
        }
        return this._currentArray;
    }
    
    get removed() {
        if (this._removedArray.length === 0) {
            this._removed = (this._removed != null) ? this._removed : this._mel.melFunc('{ALL_REMOVED("delimited")}');
            let dataArray = StringInternal(this._removed).toList();
            for (let index = 0; index < dataArray.length; index++) {
                this._removedArray.push(new AllergyListRemoved(dataArray[index]));
            }
        }
        return this._removedArray;
    }
}