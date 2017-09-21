//
import { ReferringProviderPhone, EmrMel } from './classes';

export class ReferringProvider {

    private _referringProviderId: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _fullAddress: string;
    private _phone = new ReferringProviderPhone(this._mel);

    constructor(
        public _mel: EmrMel
    ) { }


    get referringProviderId() {
        this._referringProviderId = (this._referringProviderId !== undefined) ? this._referringProviderId : this._mel.melFunc('{PATIENT.REFMDID}');
        return this._referringProviderId;
    };

    get firstName() {
        this._firstName = (this._firstName !== undefined) ? this._firstName : this._mel.melFunc('{PATIENT.REFMDFIRSTNAME}');
        return this._firstName;
    };

    get lastName() {
        this._lastName = (this._lastName !== undefined) ? this._lastName : this._mel.melFunc('{PATIENT.REFMDLASTNAME}');
        return this._lastName;
    };

    get email() {
        this._email = (this._email !== undefined) ? this._email : this._mel.melFunc('{PATIENT.REFMDEMAILADDRESS}');
        return this._email;
    };

    get fullAddress() {
        this._fullAddress = (this._fullAddress !== undefined) ? this._fullAddress : this._mel.melFunc('{PATIENT.REFMDADDRESS}');
        return this._fullAddress;
    };

    get phone() {
        return this._phone;
    }
}