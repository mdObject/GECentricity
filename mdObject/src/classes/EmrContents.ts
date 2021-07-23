import { ArrayAsync } from "../interfaces/ArrayAsync"
import { EmrContent } from "./EmrContent"
import { EmrMel } from './EmrMel';
import { StringInternal } from '../factories/factories';

export class EmrContents extends ArrayAsync<EmrContent> {
    private _isLoaded = false;
    melData: string;
    tag: string;
    _name: string;
    
    async loadAsync(name: string, mel: EmrMel, win: any) {
        if (!this._isLoaded || this._name !== name) {
            this._name = name;
            this.tag = 'MEL_GET_CONTENT';
            this.melData = await mel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');

            this.loadMelDataToList(this.melData, mel, win);

            this._isLoaded = true;
        }
    }

    private loadMelDataToList = (data: string, mel: EmrMel, win: any,) => {
        let dataArray = StringInternal(data).toList();
        for (let index = 0; index < dataArray.length; index++) {
            this.push(new EmrContent(dataArray[index], mel, win));
        }
    }
}