//
import { LocationType } from '../enums/enums';

export class Location {

    constructor(
        public id: string,
        public name: string,
        public locationType: LocationType
    ) {
        this.id = (this.id != null) ? this.id : '';
        this.name = (this.name != null) ? this.name : '';
        this.locationType = (this.locationType != null) ? this.locationType : LocationType.None
    }

}