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
/// <reference path="$mdobject.address.ts" />
/// <reference path="$mdobject.phone.ts" />
var $mdObject;
(function ($mdObject) {
    var Patient = (function (_super) {
        __extends(Patient, _super);
        function Patient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Patient.prototype, "patientId", {
            get: function () {
                return this._patientId = this.getPatientProperty(this._patientId, '{PATIENT.PATIENTID}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "pid", {
            get: function () {
                return this._pid = this.getPatientProperty(this._pid, '{find("patient", "PID")}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "medicalRecordId", {
            get: function () {
                return this._medicalRecordId = this.getPatientProperty(this._medicalRecordId, '{PATIENT.MEDRECNO}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "externalId", {
            get: function () {
                return this._externalId = this.getPatientProperty(this._externalId, '{PATIENT.EXTERNALID}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "printId", {
            get: function () {
                return this._printId = this.getPatientProperty(this._printId, '{PATIENT.PRINTID}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "ssn", {
            get: function () {
                return this._ssn = this.getPatientProperty(this._ssn, '{PATIENT.SOCSECNO}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "firstName", {
            get: function () {
                return this._firstName = this.getPatientProperty(this._firstName, '{PATIENT.FIRSTNAME}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "lastName", {
            get: function () {
                return this._lastName = this.getPatientProperty(this._lastName, '{PATIENT.LASTNAME}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "middleName", {
            get: function () {
                return this._middleName = this.getPatientProperty(this._middleName, '{PATIENT.MIDDLENAME}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "labelName", {
            get: function () {
                return this._labelName = this.getPatientProperty(this._labelName, '{PATIENT.LABELNAME}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "namePrefix", {
            get: function () {
                return this._namePrefix = this.getPatientProperty(this._namePrefix, '{PATIENT.TITLE}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "nameSuffix", {
            get: function () {
                return this._nameSuffix = this.getPatientProperty(this._nameSuffix, '{PATIENT.ENTITLEMENTS}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "sex", {
            get: function () {
                return this._sex = this.getPatientProperty(this._sex, '{PATIENT.SEX}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "race", {
            get: function () {
                return this._race = this.getPatientProperty(this._race, '{PATIENT.RACE}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "ethnicity", {
            get: function () {
                return this._ethnicity = this.getPatientProperty(this._ethnicity, '{PATIENT.ETHNICITY}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "maritalStatus", {
            get: function () {
                return this._maritalStatus = this.getPatientProperty(this._maritalStatus, '{PATIENT.MARITALSTATUS}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "language", {
            get: function () {
                return this._language = this.getPatientProperty(this._language, '{PATIENT.PREFLANG}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "email", {
            get: function () {
                return this._email = this.getPatientProperty(this._email, '{PATIENT.EMAIL}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "contactBy", {
            get: function () {
                return this._contactBy = this.getPatientProperty(this._contactBy, '{PATIENT.CONTACTBY}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "employmentStatus", {
            get: function () {
                return this._employmentStatus = this.getPatientProperty(this._employmentStatus, '{PATIENT.EMPLSTATUS}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "clinicStatus", {
            get: function () {
                return this._clinicStatus = this.getPatientProperty(this._clinicStatus, '{PATIENT.PSTATUS}');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "phone", {
            get: function () {
                return this._phone = (this._phone !== undefined) ? this._phone : new $mdObject.Phone();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "address", {
            get: function () {
                return this._address = (this._address !== undefined) ? this._address : new $mdObject.Address();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "immunizations", {
            get: function () {
                this._immunizationsString = this.getPatientProperty(this._immunizations, '{IMMUN_GETLIST()}');
                if (this._immunizations === undefined) {
                    var data = this.InternalString(this._immunizationsString).toList();
                    /*jslint plusplus: true */
                    for (var index = 0; index < data.length; index++) {
                        this._immunizations[index] = new $mdObject.Immunization(data[index]);
                    }
                    //this._immunizations.tag = function () {
                    //    return 'IMMUN_GETLIST';
                    //} ();
                    //this._immunizations.toMelString = function () {
                    //    return this._immunizationsString;
                    //};
                }
                return this._immunizations;
            },
            enumerable: true,
            configurable: true
        });
        return Patient;
    }($mdObject.ObjectBase));
    $mdObject.patient = new Patient();
})($mdObject || ($mdObject = {}));
