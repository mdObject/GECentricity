import { EmrMel } from "./EmrMel";

export abstract class EmrObject<T> {
    // All base properties MUST have an initial value!!! 
    protected objectSetup(base?: T, item?: T) {
        if (item && base) {
            Object.keys(base)
                .filter(key => (typeof base[key]) !== "function")
                .forEach(key => {
                    base[key] = item[key] ? item[key] : base[key];
                });
        }
    }

    abstract saveAsync(mel: EmrMel): Promise<void>;
}