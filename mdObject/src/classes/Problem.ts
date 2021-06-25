import { ObjectStatus } from "../enums";

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
}