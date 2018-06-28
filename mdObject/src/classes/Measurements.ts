import { Measurement, EmrMel } from './classes';

export class Measurements {

    private _current: Measurement;
    private _previous: Measurement;

    constructor(
        public _weight: string,
        public _height: string,
        public _mel: EmrMel
    ) { }

    get current() {
        return (this._current != null) ? this._current : new Measurement(true, this._weight, this._height, this._mel);
    }

    get previous() {
        return (this._previous != null) ? this._previous : new Measurement(false, this._weight, this._height, this._mel);
    }
}