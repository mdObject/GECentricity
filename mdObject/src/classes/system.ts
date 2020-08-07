import { emptyImage } from "../consts/consts";

export class System {
    static isSimulator: boolean = false;

    static toDate(value: string): Date {
        return new Date(parseInt(value.substr(6)));
    }

    static toImage(arrayBuffer:[]){
        if (arrayBuffer) {
            return "data:image/jpg;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        }
        else {
            return emptyImage;
        }
    }
}