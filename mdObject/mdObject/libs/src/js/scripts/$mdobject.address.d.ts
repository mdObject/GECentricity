/// <reference path="$mdobject.objectbase.d.ts" />
declare namespace $mdObject.Interfaces {
    interface IAddress {
        address1: string;
        address2: string;
        city: string;
        state: string;
        postCode: string;
        country: string;
    }
}
declare namespace $mdObject {
    class Address extends ObjectBase implements Interfaces.IAddress {
        private _address1;
        private _address2;
        private _city;
        private _state;
        private _postCode;
        private _country;
        readonly address1: string;
        readonly address2: string;
        readonly city: string;
        readonly state: string;
        readonly postCode: string;
        readonly country: string;
    }
}
