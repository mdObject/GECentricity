import { ObjectStatus } from "../enums/enums";

export class Problem {
    status: ObjectStatus = ObjectStatus.Unchanged;

    problemId: string = '';
    type: string = '';
    description: string = '';
    codeIcd9: string = '';
    comment: string = '';
    onsetDate: string = '';
    stopDate: string = '';
    stopReason: string = '';
    codeIcd10: string = '';
    lastModifiedDate: string = '';
}