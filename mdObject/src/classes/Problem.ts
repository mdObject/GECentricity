import { ObjectState, ObjectStatus } from '../enums';
import { Condition } from '../fhir';
import { Converter } from '../fhir/types';
import { EmrMel } from './EmrMel';
import { EmrObject } from './EmrObject';
import { System } from './System';

export class Problem extends EmrObject<Problem> {

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
    onsetDate: Date | undefined = undefined;
    stopDate: Date | undefined = undefined;
    stopReason: string = '';
    codeIcd10: string = '';
    lastModifiedDate: string = '';

    
    save = (mel: EmrMel) => {
        switch (this.state) {
            case ObjectState.Add: {
                let code: string = mel.melFunc('{MEL_ADD_PROBLEM("' + this.toAddString() + '")}');

                if (code !== '0') {
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
    saveAsync = async (mel: EmrMel) => {
        switch (this.state) {
            case ObjectState.Add: {
                let code: string = await mel.melFunc('{MEL_ADD_PROBLEM("' + this.toAddString() + '")}');

                if (code !== '0') {
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


    constructor(problem?: Problem) {
        super();
        this.objectSetup(this, problem);
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
        if (condition) {
            problem.problemId = condition.id;
            problem.description = condition.code?.text;
            problem.comment = condition.notes;
            problem.onsetDate = Converter.dateTimeToDate(condition.onsetDateTime);
            problem.stopDate = Converter.dateTimeToDate(condition.abatementDateTime);
            problem.codeIcd9 = condition.code?.coding.find(e => e.system === "http://hl7.org/fhir/sid/icd-9-cm")?.code;
            problem.codeIcd10 = condition.code?.coding.find(e => e.system === "http://hl7.org/fhir/sid/icd-10")?.code;
            problem.type = 'DX OF';
        }
        return problem;        
    }
}