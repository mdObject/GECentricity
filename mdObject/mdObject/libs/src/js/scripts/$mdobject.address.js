var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="$mdobject.objectbase.ts" />
var $mdObject;
(function ($mdObject) {
    var Address = (function (_super) {
        __extends(Address, _super);
        function Address() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Address.prototype, "address1", {
            get: function () {
                return this._address1 = this.getPatientProperty(this._address1, '{PATIENT.ADDRESS1}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "address2", {
            get: function () {
                return this._address2 = this.getPatientProperty(this._address2, '{PATIENT.ADDRESS2}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "city", {
            get: function () {
                return this._city = this.getPatientProperty(this._city, '{PATIENT.CITY}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "state", {
            get: function () {
                return this._state = this.getPatientProperty(this._state, '{PATIENT.STATE}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "postCode", {
            get: function () {
                return this._postCode = this.getPatientProperty(this._postCode, '{PATIENT.ZIP}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "country", {
            get: function () {
                return this._country = this.getPatientProperty(this._country, '{PATIENT.COUNTRY}');
            },
            enumerable: true,
            configurable: true
        });
        return Address;
    }($mdObject.ObjectBase));
    $mdObject.Address = Address;
})($mdObject || ($mdObject = {}));
