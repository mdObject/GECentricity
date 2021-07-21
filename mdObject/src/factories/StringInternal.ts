import { IStringInternal } from '../interfaces';

export function StringInternal(value: string, tag?: string): IStringInternal {
    value = (value) ? value : '';
    let result: IStringInternal = new String(value) as IStringInternal;

    // Function parse string object to array of string 
    result.toList = (seporator?: string): Array<string> => {
        if (seporator == null) {
            seporator = '|';
        }
        let dataArray = value.split(seporator);
        /*jslint plusplus: true */
        dataArray = dataArray.filter((item) => {
            return item.length !== 0;
        });
        return dataArray;
    }

    // String helper function to validate that string start with specified string
    result.startsWith = (str: string) => {
        return value.slice(0, str.length) === str;
    }

    // String helper function to validate that string end with specified string
    result.endsWith = (str: string) => {
        return value.slice(-str.length) === str;
    }

    result.tag = (tag != null) ? tag : '';

    result.toDate = (): Date | undefined => {
        let theDate = new Date(value.toString());
        if (theDate instanceof Date && !isNaN(theDate.valueOf())) {
            return theDate;
        } else {
            return undefined;
        }
    }

    return result;
}