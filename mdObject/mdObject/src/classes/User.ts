//
import { UserCallFunction } from '../enums/enums';

export class User {

    private data: Array<string> = (this._value === undefined) ? [] : this._value.split('^');

    loginName: string;
    searchName: string;
    phoneNumber: string;
    homeLocation: string;
    group: string;
    jobTitle: string;
    specialty: string;
    roles: Array<string>;
    npi: string;
    prescriberId: string;
    deaId: string;
    stateLicenceId: string;
    memberLogin: string;
    data2000: string;
    uniquePhysicianId: string;
    activationDate: string;
    expirationDate: string;
    currentLocation: string;
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(
        public _value: string,
        public callFunction: UserCallFunction
    ) {
        if (callFunction === UserCallFunction.UserInfo) {
            this.loginName = (this.data.length > 0) ? this.data[0] : '';
            this.searchName = (this.data.length > 1) ? this.data[1] : '';
            this.phoneNumber = (this.data.length > 2) ? this.data[2] : '';
            this.homeLocation = (this.data.length > 3) ? this.data[3] : '';
            this.group = (this.data.length > 4) ? this.data[4] : '';
            this.jobTitle = (this.data.length > 5) ? this.data[5] : '';
            this.specialty = (this.data.length > 6) ? this.data[6] : '';
            this.roles = (this.data.length > 7) ? this.data[7].split(';') : [];
            this.npi = (this.data.length > 8) ? this.data[8] : '';
            this.prescriberId = (this.data.length > 9) ? this.data[9] : '';
            this.deaId = (this.data.length > 10) ? this.data[10] : '';
            this.stateLicenceId = (this.data.length > 11) ? this.data[11] : '';
            this.memberLogin = (this.data.length > 12) ? this.data[12] : '';
            this.data2000 = (this.data.length > 13) ? this.data[13] : '';
            this.uniquePhysicianId = (this.data.length > 14) ? this.data[14] : '';
            this.activationDate = (this.data.length > 15) ? this.data[15] : '';
            this.expirationDate = (this.data.length > 16) ? this.data[16] : '';
            this.currentLocation = (this.data.length > 17) ? this.data[17] : '';
            this.firstName = (this.data.length > 18) ? this.data[18] : '';
            this.middleName = (this.data.length > 19) ? this.data[19] : '';
            this.lastName = (this.data.length > 20) ? this.data[20] : '';
        };

        if (callFunction === UserCallFunction.UserList) {
            this.loginName = (this.data.length > 0) ? this.data[0] : '';
            this.searchName = (this.data.length > 1) ? this.data[1] : '';
            this.phoneNumber = (this.data.length > 2) ? this.data[2] : '';
            this.homeLocation = (this.data.length > 3) ? this.data[3] : '';
            this.group = (this.data.length > 4) ? this.data[4] : '';
            this.jobTitle = (this.data.length > 5) ? this.data[5] : '';
            this.specialty = (this.data.length > 6) ? this.data[6] : '';
            this.npi = (this.data.length > 7) ? this.data[7] : '';
            this.prescriberId = (this.data.length > 8) ? this.data[8] : '';
            this.deaId = (this.data.length > 9) ? this.data[9] : '';
            this.stateLicenceId = (this.data.length > 10) ? this.data[10] : '';
            this.memberLogin = (this.data.length > 11) ? this.data[11] : '';
            this.data2000 = (this.data.length > 12) ? this.data[12] : '';
            this.uniquePhysicianId = (this.data.length > 13) ? this.data[13] : '';
            this.activationDate = (this.data.length > 14) ? this.data[14] : '';
            this.expirationDate = (this.data.length > 15) ? this.data[15] : '';
            this.roles = [];
        };
    }

    toMelString = () => {
        return this._value;
    }
}

