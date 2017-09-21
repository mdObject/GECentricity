//
import { LocationType } from '../enums/enums';

export class Location {

    constructor(
        public id: string,
        public name: string,
        public locationType: LocationType
    ) {
        this.id = (this.id !== undefined) ? this.id : '';
        this.name = (this.name !== undefined) ? this.name : '';
        this.locationType = (this.locationType !== undefined) ? this.locationType : LocationType.None
    }

}