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
}