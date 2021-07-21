import { ObsTermsMap } from './ObsTermsMap';
import { EmrMel } from './EmrMel';

export class Measurement implements ObsTermsMap {

    constructor(
        public isCurrent: boolean,
        public _weight: string,
        public _height: string,
        public _mel: EmrMel
    ) { }

    // mdObject.obsTermsMap.weight
    get weight(): string {
        return this._mel.getObs(this.isCurrent, this._weight);
    }

    // mdObject.obsTermsMap.height
    get height(): string {
        return this._mel.getObs(this.isCurrent, this._height);
    }
}