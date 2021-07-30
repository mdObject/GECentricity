import { Problem } from './Problem';
import { StringInternal } from '../factories/factories';
import { EmrMel } from './EmrMel';
import { ArrayAsync } from '../interfaces/ArrayAsync';
import { ObjectStatus } from '../enums';

export class Problems extends ArrayAsync<Problem>{
    private _isLoaded = false;
    tag: string;
    currentProblemMelData: string;
    newProblemMelData: string;
    removedProblemMelData: string;

    load = (mel: EmrMel) => {
        if (!this._isLoaded) {
            // Load Current
            this._current(mel);
            // Load Added
            this._new(mel);
            // Load Removed
            this._removed(mel);

            this._isLoaded = true;
        }
    }

    async loadAsync(mel: EmrMel) {
        if (!this._isLoaded) {
            // Load Current
            await this._currentAsync(mel);
            // Load Added
            await this._newAsync(mel);
            // Load Removed
            await this._removedAsync(mel);

            this._isLoaded = true;
        }
    } 

    private _current = (mel: EmrMel) => {
        this.currentProblemMelData = (this.currentProblemMelData != null) ? this.currentProblemMelData : mel.melFunc('{PROB_PRIOR("delimited","dat","com")}');
        this.loadMelDataToList(this.currentProblemMelData, this.currentProblem);
    }

    async _currentAsync(mel: EmrMel) {
        this.currentProblemMelData = (this.currentProblemMelData != null) ? this.currentProblemMelData : await mel.melFunc('{PROB_PRIOR("delimited","dat","com")}');
        this.loadMelDataToList(this.currentProblemMelData, this.currentProblem);
    }

    private _new = (mel: EmrMel) => {
        this.newProblemMelData = (this.newProblemMelData != null) ? this.newProblemMelData : mel.melFunc('{PROB_NEW("delimited","dat","com")}');
        this.loadMelDataToList(this.newProblemMelData, this.newProblem);
    }

    async _newAsync(mel: EmrMel) {
        this.newProblemMelData = (this.newProblemMelData != null) ? this.newProblemMelData : await mel.melFunc('{PROB_NEW("delimited","dat","com")}');
        this.loadMelDataToList(this.newProblemMelData, this.newProblem);
    }

    private _removed = (mel: EmrMel) => {
        this.removedProblemMelData = (this.removedProblemMelData != null) ? this.removedProblemMelData : mel.melFunc('{PROB_REMOVED("delimited","dat","com")}');
        this.markRemovedMelDataFromList(this.removedProblemMelData, this.removedProblem);
    }

    async _removedAsync(mel: EmrMel) {
        this.removedProblemMelData = (this.removedProblemMelData != null) ? this.removedProblemMelData : await mel.melFunc('{PROB_REMOVED("delimited","dat","com")}');
        this.markRemovedMelDataFromList(this.removedProblemMelData, this.removedProblem);
    }

    private loadMelDataToList = (data: string, predicate: (value: string)=> Problem) => {
        let dataArray = StringInternal(data).toList();
        for (let index = 0; index < dataArray.length; index++) {
            this.push(predicate(dataArray[index]));
        }
    }

    private markRemovedMelDataFromList = (data: string, predicate: (value: string) => Problem) => {
        let dataArray = StringInternal(data).toList();
        for (let index = 0; index < dataArray.length; index++) {
            let problem = predicate(dataArray[index]);
            this.forEach((value) => {
                if (value.problemId === problem.problemId) {
                    value.status = ObjectStatus.Removed;
                    value.stopDate = problem.stopDate;
                    value.stopReason = problem.stopReason;
                }
            });
        }
    }


    currentProblem = (value: string): Problem => {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();

        problem = this._locadMelDataFromString(data, problem);

        return problem;
    }

    newProblem = (value: string): Problem => {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();
        problem.status = ObjectStatus.Added;

        problem = this._locadMelDataFromString(data, problem);

        return problem;
    }

    removedProblem = (value: string): Problem => {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();
        problem.status = ObjectStatus.Removed;

        problem = this._locadMelDataFromString(data, problem);

        return problem;
    }

    _locadMelDataFromString = (data: Array<string>, problem: Problem) => {
        problem.type = (data.length > 0) ? data[0] : '';
        problem.description = (data.length > 1) ? data[1] : '';
        problem.codeIcd9 = (data.length > 2) ? data[2] : '';
        problem.comment = (data.length > 3) ? data[3] : '';
        problem.onsetDate = StringInternal((data.length > 4) ? data[4] : '').toDate();
        problem.stopDate = StringInternal((data.length > 5) ? data[5] : '').toDate();
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