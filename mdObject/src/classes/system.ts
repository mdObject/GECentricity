import { emptyImage } from "../consts/consts";

export class System {
    static isSimulator: boolean = false;

    static toDate(value: string): Date {
        if (value) {
            return new Date(parseInt(value.substr(6)));
        }
        else {
            return null;
        }
    }

    static toImage(arrayBuffer:[]){
        if (arrayBuffer) {
            return "data:image/jpg;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        }
        else {
            return emptyImage;
        }
    }

    static formatDate(value: string): string {
        if (value) {
            if (value.length == 8) {
                return value.substr(4, 2) + '/' + value.substr(6, 2) + '/' + value.substr(0, 4);
            }
        }
        return null;
    }

    static dateToString(date: Date): string {
        return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))
            + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
            + '/' + date.getFullYear();
    }

    static nonenumerable (target: any, propertyKey: string) {
        let descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.enumerable !== false) {
            descriptor.enumerable = false;
            descriptor.writable = true;
            Object.defineProperty(target, propertyKey, descriptor)
        }
    }
}