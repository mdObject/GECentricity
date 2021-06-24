import { IItem } from '../interfaces';

export function DocumentVariable(value, saveCallback): IItem {
    let result: IItem = (value == null) ? new Object() : value;
    result.save = () => {
        if (saveCallback != null) {
            saveCallback();
        }
    }
    return result;
}