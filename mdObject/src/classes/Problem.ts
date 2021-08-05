import { ObjectStatus } from '../enums';
import { Condition } from '../fhir';

export class Problem {
    status: ObjectStatus = ObjectStatus.Unchanged;

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

    // Usage:
    // let problem: Problem = Problem.fromFhir(condition);
    //
    static fromFhir(condition: Condition): Problem {
        const problem = new this() 
        problem.description = condition.code.text;

        return problem;        
    }
}