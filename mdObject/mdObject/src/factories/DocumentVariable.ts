//
import { IItem } from '../interfaces/interfaces';

export function DocumentVariable(value, saveCallback): IItem {
    let ar: IItem = (value === undefined) ? new Object() : value;
    ar.save = function () {
        if (saveCallback !== undefined) {
            saveCallback();
        }
    };
    return ar;
}