//
import { IItem } from '../interfaces/interfaces';

export function DocumentVariable(value, saveCallback): IItem {
    let ar: IItem = (value == null) ? new Object() : value;
    ar.save = () => {
        if (saveCallback != null) {
            saveCallback();
        }
    };
    return ar;
}