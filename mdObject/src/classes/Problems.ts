import { Problem } from "./Problem";
import { StringInternal } from '../factories/factories';
import { EmrMel } from "./EmrMel";
import { ObjectStatus } from "../enums/enums";
import { System } from "./system";

/*
 * Do not initialize any variables
 * Do not create or use any arrow functions
 * Set all variables to nonenumerable *
 */
export class Problems extends Array<Problem>{
    _isLoaded: boolean;
    currentProblemMelData: string;
    newProblemMelData: string;
    removedProblemMelData: string;

    constructor(...items: Problem[]) {
        super(...items);
        Object.setPrototypeOf(this, Problems.prototype);
        System.nonenumerable(this, '_isLoaded');
        System.nonenumerable(this, 'currentProblemMelData');
        System.nonenumerable(this, 'newProblemMelData');
        System.nonenumerable(this, 'removedProblemMelData');
    }

    load(mel: EmrMel) {
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

    private _current(mel: EmrMel) {
        this.currentProblemMelData = (this.currentProblemMelData != null) ?
            this.currentProblemMelData : mel.melFunc('{PROB_PRIOR("delimited","dat","com")}');
        this.loadMelDataToList(this.currentProblemMelData, this.currentProblem, this.locadMelDataFromString);
    }

    async _currentAsync(mel: EmrMel) {
        this.currentProblemMelData = (this.currentProblemMelData != null) ?
            this.currentProblemMelData : await mel.melFunc('{PROB_PRIOR("delimited","dat","com")}');
        this.loadMelDataToList(this.currentProblemMelData, this.currentProblem, this.locadMelDataFromString);
    }

    private _new(mel: EmrMel) {
        this.newProblemMelData = (this.newProblemMelData != null) ?
            this.newProblemMelData : mel.melFunc('{PROB_NEW("delimited","dat","com")}');
        this.loadMelDataToList(this.newProblemMelData, this.newProblem, this.locadMelDataFromString);
    }

    async _newAsync(mel: EmrMel) {
        this.newProblemMelData = (this.newProblemMelData != null) ?
            this.newProblemMelData : await mel.melFunc('{PROB_NEW("delimited","dat","com")}');
        this.loadMelDataToList(this.newProblemMelData, this.newProblem, this.locadMelDataFromString);
    }

    private _removed(mel: EmrMel) {
        this.removedProblemMelData = (this.removedProblemMelData != null) ?
            this.removedProblemMelData : mel.melFunc('{PROB_REMOVED("delimited","dat","com")}');
        this.loadMelDataToList(this.removedProblemMelData, this.removedProblem, this.locadMelDataFromString);
    }

    async _removedAsync(mel: EmrMel) {
        this.removedProblemMelData = (this.removedProblemMelData != null) ?
            this.removedProblemMelData : await mel.melFunc('{PROB_REMOVED("delimited","dat","com")}');
        this.loadMelDataToList(this.removedProblemMelData, this.removedProblem, this.locadMelDataFromString);
    }


    private loadMelDataToList(data: string,
        predicate: (value: string, method: (data: Array<string>, problem: Problem) => Problem) => Problem,
        method: (data: Array<string>, problem: Problem) => Problem)
    {
        let dataArray = StringInternal(data).toList();
        for (let index = 0; index < dataArray.length; index++) {
            this.push(predicate(dataArray[index], method));
        }
    }

    currentProblem(value: string, method: (data: Array<string>, problem: Problem) => Problem): Problem {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();

        problem = method(data, problem);

        return problem;
    }

    newProblem(value: string, method: (data: Array<string>, problem: Problem) => Problem): Problem {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();
        problem.status = ObjectStatus.Added;

        problem = method(data, problem);

        return problem;
    }

    removedProblem(value: string, method: (data: Array<string>, problem: Problem) => Problem): Problem {
        let data: Array<string> = (value == null) ? [] : value.split('^');
        let problem: Problem = new Problem();
        problem.status = ObjectStatus.Removed;

        problem = method(data, problem);

        return problem;
    }

    private locadMelDataFromString(data: Array<string>, problem: Problem): Problem {
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