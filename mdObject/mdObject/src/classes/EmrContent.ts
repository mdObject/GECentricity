//
import { EmrMel } from './classes';

export class EmrContent {

    private data: Array<string> = (this._value === undefined) ? [] : this._value.split('^');
    private isNew: boolean = (this._value === undefined) ? true : false;

    contentId: string = (this.data.length > 0) ? this.data[0] : '';
    key: string = (this.data.length > 1) ? this.data[1] : '';
    name: string = (this.data.length > 2) ? this.data[2] : '';
    value: string = (this.data.length > 3) ? this.data[3] : '';
    _unk0: string = (this.data.length > 4) ? this.data[4] : '';
    _unk1: string = (this.data.length > 5) ? this.data[5] : '';
    _unk2: string = (this.data.length > 6) ? this.data[6] : '';
    _unk3: string = (this.data.length > 7) ? this.data[7] : '';
    _unk4: string = (this.data.length > 8) ? this.data[8] : '';
    _unk5: string = (this.data.length > 9) ? this.data[9] : '';

    constructor(
        public _value: string,
        public _mel: EmrMel
    ) { }

    toAddString = (encodeValue): string => {
        let recordValue = (encodeValue === undefined) ? this.value : window.btoa(this.value);
        return this.key + '^' + this.name + '^' + recordValue + '^'
            + this._unk0 + '^' + this._unk1 + '^' + this._unk2 + '^'
            + this._unk3 + '^' + this._unk4 + '^' + this._unk5;
    };

    save = (encodeValue): void => {
        let response;
        if (this.isNew) {
            response = this._mel.melFunc('{MEL_ADD_CONTENT("' + this.toAddString(encodeValue) + '")}');
            this.isNew = false;
        } else {
            response = this._mel.melFunc('{MEL_REMOVE_CONTENT("' + this.contentId + '")}');
            response = this._mel.melFunc('{MEL_ADD_CONTENT("' + this.toAddString(encodeValue) + '")}');
        }
    };

    remove = (): void => {
        this._mel.melFunc('{MEL_REMOVE_CONTENT("' + this.contentId + '")}');
    };
}