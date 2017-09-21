//
import { Measurement, EmrMel } from './classes';

export class Measurements {

    constructor(
        public _weight: string,
        public _height: string,
        public _mel: EmrMel
    ) { }

    get current() {
        return new Measurement(true, this._weight, this._height, this._mel);
    }

    get previous() {
        return new Measurement(false, this._weight, this._height, this._mel);
    }

}

