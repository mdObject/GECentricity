import { Problem } from "./Problem";
import { StringInternal } from '../factories/factories';
import { EmrMel } from "./EmrMel";
import { ArrayAsync } from "../interfaces/ArrayAsync";

export class Problems extends ArrayAsync<Problem>{
    private _isLoaded = false;
    _currentData: string;

    load = (mel: EmrMel) => {
        if (!this._isLoaded) {
            // Load Current
            this._current(mel);

            this._isLoaded = true;
        }
    }

    async loadAsync(mel: EmrMel) {
        if (!this._isLoaded) {
            // Load Current
            await this._currentAsync(mel);

            this._isLoaded = true;
        }
    } 

    private _current = (mel: EmrMel) => {
        this._currentData = (this._currentData != null) ? this._currentData : mel.melFunc('{PROB_PRIOR("delimited","dat","com")}');
        let dataArray = StringInternal(this._currentData).toList();
        for (let index = 0; index < dataArray.length; index++) {
            this.push(this.currentProblem(dataArray[index]));
        }
    }

    async _currentAsync(mel: EmrMel) {
        this._currentData = (this._currentData != null) ? this._currentData : await mel.melFunc('{PROB_PRIOR("delimited","dat","com")}');
        let dataArray = StringInternal(this._currentData).toList();
        for (let index = 0; index < dataArray.length; index++) {
            this.push(this.currentProblem(dataArray[index]));
        }
    }

    currentProblem = (value: string): Problem => {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();

        problem.type = (data.length > 0) ? data[0] : '';
        problem.description = (data.length > 1) ? data[1] : '';
        problem.codeIcd9 = (data.length > 2) ? data[2] : '';
        problem.comment = (data.length > 3) ? data[3] : '';
        problem.onsetDate = (data.length > 4) ? data[4] : '';
        problem.stopDate = (data.length > 5) ? data[5] : '';
        problem.stopReason = (data.length > 6) ? data[6] : '';
        problem.codeIcd10 = (data.length > 7) ? data[7] : '';
        problem.lastModifiedDate = (data.length > 9) ? data[9] : '';

        let _problemId = (data.length > 8) ? data[8] : '';
        let index = _problemId.indexOf('.');
        _problemId = (index > -1) ? _problemId.substr(0, index) : _problemId;
        problem.problemId = _problemId;
        

        return problem;
    }

}