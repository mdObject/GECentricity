import { EmrMel } from "./EmrMel";

export abstract class EmrObject<T> {
    constructor(item?:T) {
        if (item) {
            Object.keys(this).forEach(key => {
                this[key] = item[key] ? item[key] : this[key];
            });
        }
    }

    abstract saveAsync(mel: EmrMel): Promise<void>;
}