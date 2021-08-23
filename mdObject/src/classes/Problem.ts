import { ObjectState, ObjectStatus } from '../enums';
import { Condition } from '../fhir';
import { EmrMel } from './EmrMel';
import { System } from './System';

export class Problem {
    status: ObjectStatus = ObjectStatus.Unchanged;
    state: ObjectState = ObjectState.None;

    // The assessment values:
    // New or N
    // Improved or I
    // Unchanged or U
    // Deteriorated or D
    // Comment only or C
    // Note. Codes that were supported in previous releases may also appear as Better (B), Same (S), or Worse (W).
    assessment: string = 'N';
    note: string = '';

    problemId: string = '';
    type: string = '';
    description: string = '';
    codeIcd9: string = '';
    comment: string = '';
    onsetDate: Date | undefined;
    stopDate: Date | undefined;
    stopReason: string = '';
    codeIcd10: string = '';
    lastModifiedDate: string = '';

    save = async (mel: EmrMel) => {
        switch (this.state) {
            case ObjectState.Add: {
                let code: string = await mel.melFunc('{MEL_ADD_PROBLEM("' + this.toAddString() + '")}');

                if (code !== '') {
                    let error = 'Problem.save error. Code is ' + code;
                    console.error(error);
                    throw new Error('Problem not saved. ' + error);
                }

                this.status = ObjectStatus.Added;
                this.state = ObjectState.None;
                break;
            }
        }
    }

    constructor(problem?) {
        if (problem) {
            Object.keys(this).forEach(key => {
                this[key] = problem[key] ? problem[key] : this[key];
            });
        }
    }

    public get code()  {
        return this.codeIcd9 && this.codeIcd10
            ? this.codeIcd9 + '|' + this.codeIcd10
            : this.codeIcd9 + this.codeIcd10;
    }

    private toAddString = (): string => {
        return this.type + '","' +
            this.description + '","' +
            this.code + '","' +
            (this.onsetDate ? System.dateToString(this.onsetDate) : '') + '","' +
            (this.stopDate ? System.dateToString(this.stopDate) : '') + '","' +
            this.comment + '",' +
            this.assessment + ',"' +
            this.note;
    }


    // Usage:
    // let problem: Problem = Problem.fromFhir(condition);
    //
    static fromFhir(condition: Condition): Problem {
        const problem = new this() 
        problem.description = condition.code.text;
        problem.comment = condition.evidence?.[0]?.code.text;
        return problem;        
    }
}