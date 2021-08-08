//import { ArrayAsync } from "../interfaces/ArrayAsync"
import { EmrContent } from "./EmrContent"
import { EmrMel } from './EmrMel';
import { StringInternal } from '../factories/factories';

export class EmrContents extends Array<EmrContent> {
    private _isLoaded = false;
    melData: string;
    tag: string;
    _name: string;
    
    loadAsync = async(name: string, mel: EmrMel) => {
        if (!this._isLoaded || this._name !== name) {
            this._name = name;
            this.tag = 'MEL_GET_CONTENT';
            this.melData = await mel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');

            this.loadMelDataToList(this.melData, mel);

            this._isLoaded = true;
        }
    }

    load = (name: string, mel: EmrMel) => {
        if (!this._isLoaded || this._name !== name) {
            this._name = name;
            this.tag = 'MEL_GET_CONTENT';
            this.melData = mel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');

            this.loadMelDataToList(this.melData, mel);

            this._isLoaded = true;
        }
    }

    private loadMelDataToList = (data: string, mel: EmrMel) => {
        let dataArray = StringInternal(data).toList();
        for (let index = 0; index < dataArray.length; index++) {
            this.push(new EmrContent({ data: dataArray[index], mel: mel }));
        }
    }
}