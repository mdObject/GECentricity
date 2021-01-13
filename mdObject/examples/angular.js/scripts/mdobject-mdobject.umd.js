(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@mdobject/mdobject', ['exports'], factory) :
    (global = global || self, factory((global.mdobject = global.mdobject || {}, global.mdobject.mdobject = {})));
}(this, (function (exports) { 'use strict';

    var ObsTermsMap = /** @class */ (function () {
        function ObsTermsMap() {
            this.weight = 'Weight';
            this.height = 'Height';
        }
        return ObsTermsMap;
    }());

    var LocationType;
    (function (LocationType) {
        LocationType[LocationType["None"] = 0] = "None";
        LocationType[LocationType["Home"] = 1] = "Home";
        LocationType[LocationType["Current"] = 2] = "Current";
    })(LocationType || (LocationType = {}));

    var UserCallFunction;
    (function (UserCallFunction) {
        UserCallFunction[UserCallFunction["None"] = 0] = "None";
        UserCallFunction[UserCallFunction["UserList"] = 1] = "UserList";
        UserCallFunction[UserCallFunction["UserInfo"] = 2] = "UserInfo";
    })(UserCallFunction || (UserCallFunction = {}));

    var AllergyClassification;
    (function (AllergyClassification) {
        AllergyClassification["none"] = "";
        AllergyClassification["drug"] = "Drug";
        AllergyClassification["food"] = "Food";
        AllergyClassification["environmental"] = "Environmental";
    })(AllergyClassification || (AllergyClassification = {}));

    var AllergyCriticality;
    (function (AllergyCriticality) {
        AllergyCriticality["undefined"] = "";
        AllergyCriticality["critical"] = "C";
        AllergyCriticality["severe"] = "S";
        AllergyCriticality["moderate"] = "N";
        AllergyCriticality["mild"] = "I";
    })(AllergyCriticality || (AllergyCriticality = {}));

    var ObjectState;
    (function (ObjectState) {
        ObjectState[ObjectState["None"] = 0] = "None";
        ObjectState[ObjectState["Add"] = 1] = "Add";
        ObjectState[ObjectState["Update"] = 2] = "Update";
        ObjectState[ObjectState["Remove"] = 3] = "Remove";
    })(ObjectState || (ObjectState = {}));

    var Location = /** @class */ (function () {
        function Location(id, name, locationType) {
            this.id = id;
            this.name = name;
            this.locationType = locationType;
            this.id = (this.id != null) ? this.id : '';
            this.name = (this.name != null) ? this.name : '';
            this.locationType = (this.locationType != null) ? this.locationType : LocationType.None;
        }
        return Location;
    }());

    var EmrContent = /** @class */ (function () {
        function EmrContent(_value, _mel, _window) {
            var _this = this;
            this._value = _value;
            this._mel = _mel;
            this._window = _window;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.isNew = (this._value == null) ? true : false;
            this.contentId = (this.data.length > 0) ? this.data[0] : '';
            this.key = (this.data.length > 1) ? this.data[1] : '';
            this.name = (this.data.length > 2) ? this.data[2] : '';
            this.value = (this.data.length > 3) ? this.data[3] : '';
            this._unk0 = (this.data.length > 4) ? this.data[4] : '';
            this._unk1 = (this.data.length > 5) ? this.data[5] : '';
            this._unk2 = (this.data.length > 6) ? this.data[6] : '';
            this._unk3 = (this.data.length > 7) ? this.data[7] : '';
            this._unk4 = (this.data.length > 8) ? this.data[8] : '';
            this._unk5 = (this.data.length > 9) ? this.data[9] : '';
            this.toAddString = function (encodeValue) {
                var recordValue = (encodeValue == null) ? _this.value : _this._window.btoa(_this.value);
                return _this.key + '^' +
                    _this.name + '^' +
                    recordValue + '^' +
                    _this._unk0 + '^' +
                    _this._unk1 + '^' +
                    _this._unk2 + '^' +
                    _this._unk3 + '^' +
                    _this._unk4 + '^' +
                    _this._unk5;
            };
            this.save = function (encodeValue) {
                if (_this.isNew) {
                    _this._mel.melFunc('{MEL_ADD_CONTENT("' + _this.toAddString(encodeValue) + '")}');
                    _this.isNew = false;
                }
                else {
                    _this._mel.melFunc('{MEL_REMOVE_CONTENT("' + _this.contentId + '")}');
                    _this._mel.melFunc('{MEL_ADD_CONTENT("' + _this.toAddString(encodeValue) + '")}');
                }
            };
            this.remove = function () {
                _this._mel.melFunc('{MEL_REMOVE_CONTENT("' + _this.contentId + '")}');
            };
        }
        return EmrContent;
    }());

    var PatientContact = /** @class */ (function () {
        function PatientContact(_value) {
            var _this = this;
            this._value = _value;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.name = (this.data.length > 0) ? this.data[0] : '';
            this.type = (this.data.length > 1) ? this.data[1] : '';
            this.phone = (this.data.length > 2) ? this.data[2] : '';
            this.phoneType = (this.data.length > 3) ? this.data[3] : '';
            this.address1 = (this.data.length > 4) ? this.data[4] : '';
            this.address2 = (this.data.length > 5) ? this.data[5] : '';
            this.city = (this.data.length > 6) ? this.data[6] : '';
            this.state = (this.data.length > 7) ? this.data[7] : '';
            this.zip = (this.data.length > 8) ? this.data[8] : '';
            this.country = (this.data.length > 9) ? this.data[9] : '';
            this.address = this.address1.concat(' ' + this.address2);
            this.toMelString = function () {
                return _this._value;
            };
        }
        return PatientContact;
    }());

    var Problem = /** @class */ (function () {
        function Problem(_value) {
            this._value = _value;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.type = (this.data.length > 0) ? this.data[0] : '';
            this.description = (this.data.length > 1) ? this.data[1] : '';
            this.codeIcd9 = (this.data.length > 2) ? this.data[2] : '';
            this.comment = (this.data.length > 3) ? this.data[3] : '';
            this.onsetDate = (this.data.length > 4) ? this.data[4] : '';
            this.stopDate = (this.data.length > 5) ? this.data[5] : '';
            this.stopReason = (this.data.length > 6) ? this.data[6] : '';
            this.codeIcd10 = (this.data.length > 7) ? this.data[7] : '';
            this.lastModifiedDate = (this.data.length > 9) ? this.data[9] : '';
        }
        Object.defineProperty(Problem.prototype, "problemId", {
            get: function () {
                this._problemId = (this.data.length > 8) ? this.data[8] : '';
                var index = this._problemId.indexOf('.');
                this._problemId = (index > -1) ? this._problemId.substr(0, index) : this._problemId;
                return this._problemId;
            },
            enumerable: false,
            configurable: true
        });
        return Problem;
    }());

    var Immunization = /** @class */ (function () {
        function Immunization(_value, _mel) {
            var _this = this;
            this._value = _value;
            this._mel = _mel;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.isNew = this._value == null ? true : false;
            this.immunizationId = (this.data.length > 0) ? this.data[0] : '';
            this.immunizationGroupId = (this.data.length > 1) ? this.data[1] : '';
            this.vaccineGroupName = (this.data.length > 2) ? this.data[2] : '';
            this.vaccineName = (this.data.length > 3) ? this.data[3] : '';
            this.medicalDisplayName = (this.data.length > 4) ? this.data[4] : '';
            this.series = (this.data.length > 5) ? this.data[5] : '';
            this.wasGiven = (this.data.length > 6) ? this.data[6] : '';
            this.reasonNotGiven = (this.data.length > 7) ? this.data[7] : '';
            this.historical = (this.data.length > 8) ? this.data[8] : '';
            this.historicalSource = (this.data.length > 9) ? this.data[9] : '';
            this.vfcElegibility = (this.data.length > 10) ? this.data[10] : '';
            this.ddid = (this.data.length > 11) ? this.data[11] : '';
            this.dnid = (this.data.length > 12) ? this.data[12] : '';
            this.gpi = (this.data.length > 13) ? this.data[13] : '';
            this.kdc = (this.data.length > 14) ? this.data[14] : '';
            this.ndc = (this.data.length > 15) ? this.data[15] : '';
            this.cvxCode = (this.data.length > 16) ? this.data[16] : '';
            this.doseAmount = (this.data.length > 17) ? this.data[17] : '';
            this.dosageUnitOfMeasure = (this.data.length > 18) ? this.data[18] : '';
            this.route = (this.data.length > 19) ? this.data[19] : '';
            this.routeCode = (this.data.length > 20) ? this.data[20] : '';
            this.site = (this.data.length > 21) ? this.data[21] : '';
            this.siteCode = (this.data.length > 22) ? this.data[22] : '';
            this.manufacturer = (this.data.length > 23) ? this.data[23] : '';
            this.manufacturerCode = (this.data.length > 24) ? this.data[24] : '';
            this.lotNumber = (this.data.length > 25) ? this.data[25] : '';
            this.expirationDate = (this.data.length > 26) ? this.data[26] : '';
            this.visPublishedDate = (this.data.length > 27) ? this.data[27] : '';
            this.administeredByName = (this.data.length > 28) ? this.data[28] : '';
            this.administeredDate = (this.data.length > 29) ? this.data[29] : '';
            this.administeredDateType = (this.data.length > 30) ? this.data[30] : '';
            this.administeredComments = (this.data.length > 31) ? this.data[31] : '';
            this.advReactionDateTime = (this.data.length > 32) ? this.data[32] : '';
            this.advReactionDateTimeType = (this.data.length > 33) ? this.data[33] : '';
            this.advReactionComments = (this.data.length > 34) ? this.data[34] : '';
            this.advReactionCmtByName = (this.data.length > 35) ? this.data[35] : '';
            this.signed = (this.data.length > 36) ? this.data[36] : '';
            this.signedByName = (this.data.length > 37) ? this.data[37] : '';
            this.signedDate = (this.data.length > 38) ? this.data[38] : '';
            this.reasonRemoved = (this.data.length > 39) ? this.data[39] : '';
            this.stopDate = (this.data.length > 40) ? this.data[40] : '';
            this.reasonNotGivenMedical = (this.data.length > 41) ? this.data[41] : '';
            this.reasonNotGivenMedicalDetail = (this.data.length > 42) ? this.data[42] : '';
            this.save = function () {
                if (_this.isNew) {
                    var isError = _this.validateAdd();
                    var response = void 0;
                    if (isError === '') {
                        response = _this._mel.melFunc('{IMMUN_ADD("' + _this.toStringAdd() + '")}');
                        if (response < 0) {
                            alert(response);
                        }
                    }
                    else {
                        alert(isError);
                    }
                }
                else {
                }
            };
            this.toMelString = function () {
                return _this._value;
            };
            this.validateAdd = function () {
                var errorMessage = ' is required.';
                if (_this.vaccineGroupName === '') {
                    return 'vaccineGroupName' + errorMessage;
                }
                if (_this.wasGiven === '') {
                    return 'wasGiven' + errorMessage;
                }
                if (_this.historical === '') {
                    return 'historical' + errorMessage;
                }
                if (_this.vfcElegibility === '') {
                    return 'vfcElegibility' + errorMessage;
                }
                if (_this.administeredDate === '') {
                    return 'administeredDate' + errorMessage;
                }
                if (_this.doseAmount.match(/[0-9]{1,25}/g) == null) {
                    return 'doseAmount should be numeric.';
                }
                return '';
            };
            this.toStringAdd = function () {
                return _this.vaccineGroupName + '^' +
                    _this.vaccineName + '^' +
                    _this.medicalDisplayName + '^' +
                    _this.series + '^' +
                    _this.wasGiven + '^' +
                    _this.reasonNotGiven + '^' +
                    _this.historical + '^' +
                    _this.historicalSource + '^' +
                    _this.vfcElegibility + '^' +
                    _this.ddid + '^' +
                    _this.dnid + '^' +
                    _this.gpi + '^' +
                    _this.kdc + '^' +
                    _this.ndc + '^' +
                    _this.cvxCode + '^' +
                    _this.doseAmount + '^' +
                    _this.dosageUnitOfMeasure + '^' +
                    _this.route + '^' +
                    _this.routeCode + '^' +
                    _this.site + '^' +
                    _this.siteCode + '^' +
                    _this.manufacturer + '^' +
                    _this.manufacturerCode + '^' +
                    _this.lotNumber + '^' +
                    _this.expirationDate + '^' +
                    _this.visPublishedDate + '^' +
                    _this.administeredByName + '^' +
                    _this.administeredDate + '^' +
                    _this.administeredDateType + '^' +
                    _this.administeredComments + '^' +
                    _this.advReactionDateTime + '^' +
                    _this.advReactionDateTimeType + '^' +
                    _this.advReactionComments + '^' +
                    _this.advReactionCmtByName + '^' +
                    _this.signed + '^' +
                    _this.signedByName + '^' +
                    _this.signedDate + '^' +
                    _this.reasonRemoved + '^' +
                    _this.stopDate + '^' +
                    _this.reasonNotGivenMedical + '^' +
                    _this.reasonNotGivenMedicalDetail;
            };
        }
        return Immunization;
    }());

    var ObservationType = /** @class */ (function () {
        function ObservationType() {
            this.None = 'Undefined';
            this.Signed = 'Signed';
            this.DocumentUnsigned = 'Update';
        }
        return ObservationType;
    }());

    var User = /** @class */ (function () {
        function User(_value, callFunction) {
            var _this = this;
            this._value = _value;
            this.callFunction = callFunction;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.toMelString = function () {
                return _this._value;
            };
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
            }
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
            }
        }
        return User;
    }());

    var AllergyList = /** @class */ (function () {
        function AllergyList(_value) {
            this._value = _value;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.name = (this.data.length > 0) ? this.data[0] : '';
            this.onSetDate = (this.data.length > 1) ? this.data[1] : '';
            this.criticalIndicator = (this.data.length > 2) ? this.data[2] : '';
            this.classification = (this.data.length > 3) ? this.data[3] : '';
            this.description = (this.data.length > 4) ? this.data[4] : '';
            this.gpiCode = (this.data.length > 5) ? this.data[5] : '';
            this.severity = (this.data.length > 6) ? this.data[6] : '';
            this.allergyId = (this.data.length > 7) ? this.data[7] : '';
            this.stopDate = null;
        }
        return AllergyList;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var AllergyListRemoved = /** @class */ (function (_super) {
        __extends(AllergyListRemoved, _super);
        function AllergyListRemoved(_value) {
            var _this = _super.call(this, _value) || this;
            _this._value = _value;
            _this.name = (_this.data.length > 0) ? _this.data[0] : '';
            _this.onSetDate = (_this.data.length > 1) ? _this.data[1] : '';
            _this.stopDate = (_this.data.length > 2) ? _this.data[2] : '';
            _this.criticalIndicator = (_this.data.length > 3) ? _this.data[3] : '';
            _this.classification = (_this.data.length > 4) ? _this.data[4] : '';
            _this.description = (_this.data.length > 5) ? _this.data[5] : '';
            _this.gpiCode = (_this.data.length > 6) ? _this.data[6] : '';
            _this.severity = (_this.data.length > 7) ? _this.data[7] : '';
            _this.allergyId = (_this.data.length > 8) ? _this.data[8] : '';
            return _this;
        }
        return AllergyListRemoved;
    }(AllergyList));

    function DocumentVariable(value, saveCallback) {
        var result = (value == null) ? new Object() : value;
        result.save = function () {
            if (saveCallback != null) {
                saveCallback();
            }
        };
        return result;
    }

    function StringInternal(value, tag) {
        var result = new String(value);
        result.toList = function (seporator) {
            if (seporator == null) {
                seporator = '|';
            }
            var dataArray = value.split(seporator);
            dataArray = dataArray.filter(function (item) {
                return item.length !== 0;
            });
            return dataArray;
        };
        result.startsWith = function (str) {
            return value.slice(0, str.length) === str;
        };
        result.endsWith = function (str) {
            return value.slice(-str.length) === str;
        };
        result.tag = (tag != null) ? tag : '';
        result.toDate = function () {
            return new Date(value.toString());
        };
        return result;
    }

    function GetCurrentUser(_mel) {
        return _mel.melFunc('{GETUSERINFO("' + _mel.melFunc('{USER.LOGINNAME}') + '")}') + '^' +
            _mel.melFunc('{USER.CURLOCATIONNAME}') + '^' +
            _mel.melFunc('{USER.FIRSTNAME}') + '^' +
            _mel.melFunc('{USER.MIDDLENAME}') + '^' +
            _mel.melFunc('{USER.LASTNAME}');
    }

    function IsActiveXSupported(_window) {
        var result = 'ActiveXObject' in _window;
        if (!result) {
            console.log("Your browser does not support ActiveX objects");
        }
        return result;
    }

    function GetActiveXErrorMessage(objectName, e) {
        var result = "Unable to load ActiveX interface " + objectName;
        result += ((e != null && e.hasOwnProperty("Message")) ? ".\nError message: " + e.Message : "");
        return result;
    }

    var Allergies = /** @class */ (function () {
        function Allergies(_mel) {
            this._mel = _mel;
            this._addedArray = [];
            this._currentArray = [];
            this._removedArray = [];
        }
        Object.defineProperty(Allergies.prototype, "added", {
            get: function () {
                if (this._addedArray.length === 0) {
                    this._added = (this._added != null) ? this._added : this._mel.melFunc('{ALL_NEW("delimited")}');
                    var dataArray = StringInternal(this._added).toList();
                    for (var index = 0; index < dataArray.length; index++) {
                        this._addedArray.push(new AllergyList(dataArray[index]));
                    }
                }
                return this._addedArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Allergies.prototype, "current", {
            get: function () {
                if (this._currentArray.length === 0) {
                    this._current = (this._current != null) ? this._current : this._mel.melFunc('{ALL_PRIOR("delimited")}');
                    var dataArray = StringInternal(this._current).toList();
                    for (var index = 0; index < dataArray.length; index++) {
                        this._currentArray.push(new AllergyList(dataArray[index]));
                    }
                }
                return this._currentArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Allergies.prototype, "removed", {
            get: function () {
                if (this._removedArray.length === 0) {
                    this._removed = (this._removed != null) ? this._removed : this._mel.melFunc('{ALL_REMOVED("delimited")}');
                    var dataArray = StringInternal(this._removed).toList();
                    for (var index = 0; index < dataArray.length; index++) {
                        this._removedArray.push(new AllergyListRemoved(dataArray[index]));
                    }
                }
                return this._removedArray;
            },
            enumerable: false,
            configurable: true
        });
        return Allergies;
    }());

    var Observation = /** @class */ (function () {
        function Observation(_name, _observationType, _value, _mel) {
            var _this = this;
            this._name = _name;
            this._observationType = _observationType;
            this._value = _value;
            this._mel = _mel;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.observationType = new ObservationType();
            this.name = (this._name != null) ? this._name : '';
            this.value = (this.data.length > 0) ? this.data[0] : '';
            this.date = (this.data.length > 1) ? this.data[1] : '';
            this.time = (this.data.length > 2) ? this.data[2] : '';
            this.signingUser = (this.data.length > 3) ? this.data[3] : '';
            this.enteringUser = (this.data.length > 4) ? this.data[4] : '';
            this.flags = (this.data.length > 5) ? this.data[5] : '';
            this.comment = (this.data.length > 6) ? this.data[6] : '';
            this.state = (this.data.length > 7) ? this.data[7] : '';
            this.locationOfCare = (this.data.length > 8) ? this.data[8] : '';
            this.documentType = (this.data.length > 9) ? this.data[9] : '';
            this.documentId = (this.data.length > 10) ? this.data[10] : '';
            this.type = this._observationType;
            this.save = function () {
                var response = _this._mel.saveObservation(_this.name, _this.value, _this.date);
                if (_this.tag != null && _this.tag != '') {
                    response = _this._mel.melFunc('{OBSTAGNOW("' + _this.name + '","' + _this.tag + '")}');
                }
                if (_this.comment != null && _this.comment != '') {
                    response = _this._mel.melFunc('{OBSMODIFIERNOW("' + _this.name + '","' + _this.comment + '")}');
                }
                return response;
            };
            this.remove = function () {
            };
        }
        Object.defineProperty(Observation.prototype, "unitOfMeasure", {
            get: function () {
                this._unitOfMeasure = (this._unitOfMeasure != null) ? this._unitOfMeasure : this._mel.melFunc('{OBSUNIT("' + this.name + '")}');
                return this._unitOfMeasure;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Observation.prototype, "tag", {
            get: function () {
                this._tag = (this._tag != null) ? this._tag
                    : (this._observationType === this.observationType.DocumentUnsigned) ? this._mel.melFunc('{OBSTAGNOW("' + this.name + '")}')
                        : '';
                return this._tag;
            },
            enumerable: false,
            configurable: true
        });
        return Observation;
    }());

    var Protocol = /** @class */ (function () {
        function Protocol(_value) {
            this._value = _value;
            this.name = (this._value != null) ? this._value : '';
        }
        return Protocol;
    }());

    var Measurement = /** @class */ (function () {
        function Measurement(isCurrent, _weight, _height, _mel) {
            this.isCurrent = isCurrent;
            this._weight = _weight;
            this._height = _height;
            this._mel = _mel;
        }
        Object.defineProperty(Measurement.prototype, "weight", {
            get: function () {
                return this._mel.getObs(this.isCurrent, this._weight);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Measurement.prototype, "height", {
            get: function () {
                return this._mel.getObs(this.isCurrent, this._height);
            },
            enumerable: false,
            configurable: true
        });
        return Measurement;
    }());

    var Measurements = /** @class */ (function () {
        function Measurements(_weight, _height, _mel) {
            this._weight = _weight;
            this._height = _height;
            this._mel = _mel;
        }
        Object.defineProperty(Measurements.prototype, "current", {
            get: function () {
                return (this._current != null) ? this._current : new Measurement(true, this._weight, this._height, this._mel);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Measurements.prototype, "previous", {
            get: function () {
                return (this._previous != null) ? this._previous : new Measurement(false, this._weight, this._height, this._mel);
            },
            enumerable: false,
            configurable: true
        });
        return Measurements;
    }());

    var Insurance = /** @class */ (function () {
        function Insurance(insuranceType, _mel) {
            this.insuranceType = insuranceType;
            this._mel = _mel;
        }
        Object.defineProperty(Insurance.prototype, "name", {
            get: function () {
                this._name = (this._name == null) ? this._mel.melFunc('{INS_NAME("' + this.insuranceType + '")}') : this._name;
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "address", {
            get: function () {
                this._address = (this._address == null) ? this._mel.melFunc('{INS_ADDR("' + this.insuranceType + '")}') : this._address;
                return this._address;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "insuranceId", {
            get: function () {
                this._insuranceId = (this._insuranceId == null) ? this._mel.melFunc('{INS_ID("' + this.insuranceType + '")}') : this._insuranceId;
                return this._insuranceId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "planName", {
            get: function () {
                this._planName = (this._planName == null) ? this._mel.melFunc('{INS_PLAN("' + this.insuranceType + '")}') : this._planName;
                return this._planName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "groupNumber", {
            get: function () {
                this._groupNumber = (this._groupNumber == null) ? this._mel.melFunc('{INS_GRP("' + this.insuranceType + '")}') : this._groupNumber;
                return this._groupNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "phone", {
            get: function () {
                this._phone = (this._phone == null) ? this._mel.melFunc('{INS_PHONE("' + this.insuranceType + '")}') : this._phone;
                return this._phone;
            },
            enumerable: false,
            configurable: true
        });
        return Insurance;
    }());

    var CarePlan = /** @class */ (function () {
        function CarePlan(_value, _mel) {
            var _this = this;
            this._value = _value;
            this._mel = _mel;
            this.data = this._value == null ? [] : this._value.split('^');
            this.isNew = this._value == null ? true : false;
            this.carePlanId = (this.data.length > 0) ? this.data[0] : '';
            this.goal = (this.data.length > 1) ? this.data[1] : '';
            this.snomedCTCode = (this.data.length > 2) ? this.data[2] : '';
            this.target = (this.data.length > 3) ? this.data[3] : '';
            this.instructions = (this.data.length > 4) ? this.data[4] : '';
            this.goalSetDate = (this.data.length > 5) ? this.data[5] : '';
            this.goalMetDate = (this.data.length > 6) ? this.data[6] : '';
            this.recordCreatedDateTime = (this.data.length > 7) ? this.data[7] : '';
            this.sign = (this.data.length > 8) ? this.data[8] : '';
            this.signedBy = (this.data.length > 9) ? this.data[9] : '';
            this.signedDate = (this.data.length > 10) ? this.data[10] : '';
            this.recordChangedDateTime = (this.data.length > 11) ? this.data[11] : '';
            this.recordChangedBy = (this.data.length > 12) ? this.data[12] : '';
            this.patientConditionDescription = (this.data.length > 13) ? this.data[13] : '';
            this.patientConditionCode = (this.data.length > 14) ? this.data[14] : '';
            this.save = function () {
                if (_this.isNew) {
                    var isError = _this.validateAdd();
                    var response = void 0;
                    if (isError === '') {
                        response = _this._mel.melFunc('{MEL_ADD_CARE_PLAN(' + _this.toStringAdd() + ')}');
                        if (response < 0) {
                            alert(_this.carePlanAddError(response));
                        }
                    }
                    else {
                        alert(isError);
                    }
                }
                else {
                }
            };
            this.toMelString = function () {
                return _this._value;
            };
            this.validateAdd = function () {
                var errorMessage = ' is required.';
                if (_this.goal === '') {
                    return 'goal' + errorMessage;
                }
                return '';
            };
            this.toStringAdd = function () {
                return '\"' + _this.goal + '\",\"' +
                    _this.snomedCTCode + '\",\"' +
                    _this.target + '\",\"' +
                    _this.instructions + '\",\"' +
                    _this.goalSetDate + '\",\"' +
                    _this.goalMetDate + '\",\"' +
                    _this.patientConditionCode + '\"';
            };
            this.carePlanAddError = function (code) {
                var response = '';
                switch (code) {
                    case "-1":
                        response = "Error Code -1: Description or blank is too long.";
                        break;
                    case "-2":
                        response = "Error Code -2: Code is too long.";
                        break;
                    case "-3":
                        response = "Error Code -3: Target is too long.";
                        break;
                    case "-4":
                        response = "Error Code -4: Instruction is too long.";
                        break;
                    case "-5":
                        response = "Error Code -5: goalSetDate is invalid.";
                        break;
                    case "-6":
                        response = "Error Code -6: goalMetDate is invalid or less than goalSetDate.";
                        break;
                    case "-7":
                        response = "Error Code -7: Invalid patientConditionCode. Use $mdObject.patient.problems[index].problemId";
                        break;
                    case "-8":
                        response = "Error Code -8: Cannot add Care Plan for some other reason.";
                        break;
                    case "-21":
                        response = "Error Code -21: Service layer error.";
                        break;
                    default:
                }
                return response;
            };
        }
        return CarePlan;
    }());

    var Address = /** @class */ (function () {
        function Address(_mel, _mailingAddressExternal) {
            this._mel = _mel;
            this._mailingAddressExternal = _mailingAddressExternal;
            if (this._mailingAddressExternal) {
                this._address1 = this._mailingAddressExternal.line1Addr;
                this._address2 = this._mailingAddressExternal.line2Addr;
                this._city = this._mailingAddressExternal.cityName;
                this._country = this._mailingAddressExternal.countryCode;
                this._postCode = this._mailingAddressExternal.postalCode;
                this._state = this._mailingAddressExternal.stateCode;
            }
        }
        Object.defineProperty(Address.prototype, "address1", {
            get: function () {
                this._address1 = (this._address1 !== undefined) ? this._address1 : this._mel.melFunc('{PATIENT.ADDRESS1}');
                return this._address1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "address2", {
            get: function () {
                this._address2 = (this._address2 !== undefined) ? this._address2 : this._mel.melFunc('{PATIENT.ADDRESS2}');
                return this._address2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "city", {
            get: function () {
                this._city = (this._city !== undefined) ? this._city : this._mel.melFunc('{PATIENT.CITY}');
                return this._city;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "country", {
            get: function () {
                this._country = (this._country !== undefined) ? this._country : this._mel.melFunc('{PATIENT.COUNTRY}');
                return this._country;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "postCode", {
            get: function () {
                this._postCode = (this._postCode !== undefined) ? this._postCode : this._mel.melFunc('{PATIENT.ZIP}');
                return this._postCode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Address.prototype, "state", {
            get: function () {
                this._state = (this._state !== undefined) ? this._state : this._mel.melFunc('{PATIENT.STATE}');
                return this._state;
            },
            enumerable: false,
            configurable: true
        });
        return Address;
    }());

    var Phone = /** @class */ (function () {
        function Phone(_mel) {
            this._mel = _mel;
        }
        Object.defineProperty(Phone.prototype, "home", {
            get: function () {
                this._home = (this._home != null) ? this._home : this._mel.melFunc('{PATIENT.ALTPHONE}');
                return this._home;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Phone.prototype, "business", {
            get: function () {
                this._business = (this._business != null) ? this._business : this._mel.melFunc('{PATIENT.WORKPHONE}');
                return this._business;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Phone.prototype, "mobile", {
            get: function () {
                this._mobile = (this._mobile != null) ? this._mobile : this._mel.melFunc('{PATIENT.CELLPHONE}');
                return this._mobile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Phone.prototype, "fax", {
            get: function () {
                this._fax = (this._fax != null) ? this._fax : this._mel.melFunc('{PATIENT.FAXPHONE}');
                return this._fax;
            },
            enumerable: false,
            configurable: true
        });
        return Phone;
    }());

    var ReferringProviderPhone = /** @class */ (function () {
        function ReferringProviderPhone(_mel) {
            this._mel = _mel;
        }
        Object.defineProperty(ReferringProviderPhone.prototype, "office", {
            get: function () {
                this._office = (this._office != null) ? this._office : this._mel.melFunc('{PATIENT.REFMDOFFICEPHONE}');
                return this._office;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProviderPhone.prototype, "alternative", {
            get: function () {
                this._alternative = (this._alternative != null) ? this._alternative : this._mel.melFunc('{PATIENT.REFMDALTPHONE}');
                return this._alternative;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProviderPhone.prototype, "fax", {
            get: function () {
                this._fax = (this._fax != null) ? this._fax : this._mel.melFunc('{PATIENT.REFMDFAXPHONE}');
                return this._fax;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProviderPhone.prototype, "pager", {
            get: function () {
                this._pager = (this._pager != null) ? this._pager : this._mel.melFunc('{PATIENT.REFMDPAGERPHONE}');
                return this._pager;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProviderPhone.prototype, "mobile", {
            get: function () {
                this._mobile = (this._mobile != null) ? this._mobile : this._mel.melFunc('{PATIENT.REFMDCELLPHONE}');
                return this._mobile;
            },
            enumerable: false,
            configurable: true
        });
        return ReferringProviderPhone;
    }());

    var ReferringProvider = /** @class */ (function () {
        function ReferringProvider(_mel) {
            this._mel = _mel;
            this._phone = new ReferringProviderPhone(this._mel);
        }
        Object.defineProperty(ReferringProvider.prototype, "referringProviderId", {
            get: function () {
                this._referringProviderId = (this._referringProviderId != null) ? this._referringProviderId : this._mel.melFunc('{PATIENT.REFMDID}');
                return this._referringProviderId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProvider.prototype, "firstName", {
            get: function () {
                this._firstName = (this._firstName != null) ? this._firstName : this._mel.melFunc('{PATIENT.REFMDFIRSTNAME}');
                return this._firstName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProvider.prototype, "lastName", {
            get: function () {
                this._lastName = (this._lastName != null) ? this._lastName : this._mel.melFunc('{PATIENT.REFMDLASTNAME}');
                return this._lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProvider.prototype, "email", {
            get: function () {
                this._email = (this._email != null) ? this._email : this._mel.melFunc('{PATIENT.REFMDEMAILADDRESS}');
                return this._email;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProvider.prototype, "fullAddress", {
            get: function () {
                this._fullAddress = (this._fullAddress != null) ? this._fullAddress : this._mel.melFunc('{PATIENT.REFMDADDRESS}');
                return this._fullAddress;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReferringProvider.prototype, "phone", {
            get: function () {
                return this._phone;
            },
            enumerable: false,
            configurable: true
        });
        return ReferringProvider;
    }());

    var version = '2.0.0-alpha.1.2';

    var productType = 'GE';

    var emptyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII===';
    var simulatorChromeExtensionId = "gcjidgolppaalnedpaadmcnmhmdohflp";

    var System = /** @class */ (function () {
        function System() {
        }
        System.toDate = function (value) {
            if (value) {
                return new Date(parseInt(value.substr(6)));
            }
            else {
                return null;
            }
        };
        System.toImage = function (arrayBuffer) {
            if (arrayBuffer) {
                return "data:image/jpg;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
            }
            else {
                return emptyImage;
            }
        };
        System.formatDate = function (value) {
            if (value) {
                if (value.length == 8) {
                    return value.substr(4, 2) + '/' + value.substr(6, 2) + '/' + value.substr(0, 4);
                }
            }
            return null;
        };
        return System;
    }());
    System.isSimulator = false;

    var EmrBase = /** @class */ (function () {
        function EmrBase(_window, _simulator) {
            this._window = _window;
            this._simulator = _simulator;
            this.isActiveXSupported = IsActiveXSupported(this._window);
            this.noData = 'Data Access Error';
            this.isExternalSupported = (this.external) ? true : false;
            this._window['_isSimulator'] = this.isSimulator;
        }
        Object.defineProperty(EmrBase.prototype, "external", {
            get: function () {
                if (this._external === 'UnitTest') {
                    return undefined;
                }
                if (this._external) {
                    return this._external;
                }
                this._external = this._external ? this._external
                    : (this._window.opener && this._window.opener.external) ? this._window.opener.external
                        : this._window.external;
                if (this._external.IsDebugMode === undefined) {
                    this._external = this._simulator.externalSimulator;
                }
                return this._external;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EmrBase.prototype, "isSimulator", {
            get: function () {
                this._isSimulator = (this._window.opener != null && this._window.opener['_isSimulator'] != undefined) ? this._window.opener['_isSimulator']
                    : (this._isSimulator) ? this._isSimulator
                        : System.isSimulator;
                return this._isSimulator;
            },
            enumerable: false,
            configurable: true
        });
        return EmrBase;
    }());

    var EmrMel = /** @class */ (function (_super) {
        __extends(EmrMel, _super);
        function EmrMel(_window, _simulator) {
            var _this = _super.call(this, _window, _simulator) || this;
            _this._window = _window;
            _this._simulator = _simulator;
            _this.melObjectName = 'GE.CPO.EMR.80.MEL';
            _this.melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
            _this.noData = 'Data Access Error';
            _this.initialization = function () {
                if (IsActiveXSupported(_this._window)) {
                    try {
                        _this.mel = new _this._window.ActiveXObject(_this.melObjectName);
                    }
                    catch (e) {
                        _this.errorMessage = GetActiveXErrorMessage(_this.melObjectName, e);
                    }
                    if (_this.errorMessage != null) {
                        try {
                            _this.mel = new _this._window.ActiveXObject(_this.melObjectNameSimulator);
                            System.isSimulator = true;
                        }
                        catch (e) {
                            console.log(_this.errorMessage);
                        }
                    }
                }
            };
            _this.melFunc = function (data) {
                return (_this.external) ? _this.external.EvaluateMel(data, false) : (_this.mel) ? _this.mel.eval(data) : _this.noData;
            };
            _this.saveObservation = function (obs, value, date) {
                return (_this.mel == null) ? _this.noData : _this.mel.OBSNOW(obs, value, date);
            };
            _this.getObs = function (isCurrent, data) {
                return (_this.mel == null) ? _this.noData : ((isCurrent == true) ? _this.mel.OBSNOW(data, '', '') : _this.mel.OBSPREV(data));
            };
            _this.showUrlDialog = function (url) {
                _this.melFunc('{SHOWHTMLFORM("' + url + '","test")}');
            };
            _this.initialization();
            return _this;
        }
        Object.defineProperty(EmrMel.prototype, "externalSimulator", {
            get: function () {
                return (this.mel == null) ? this.noData : this.mel.external;
            },
            enumerable: false,
            configurable: true
        });
        return EmrMel;
    }(EmrBase));

    var ApplicationBase = /** @class */ (function () {
        function ApplicationBase() {
        }
        return ApplicationBase;
    }());

    var EmrApp = /** @class */ (function (_super) {
        __extends(EmrApp, _super);
        function EmrApp(_window, _simulator) {
            var _this = _super.call(this, _window, _simulator) || this;
            _this._window = _window;
            _this._simulator = _simulator;
            _this.appObjectName = 'GE.CPO.EMR.90.Application';
            _this.appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
            _this.initialization = function () {
                if (_this.isActiveXSupported) {
                    try {
                        _this.app = new _this._window.ActiveXObject(_this.appObjectName);
                        _this.app.SetPasscode(_this._window.external['Passcode']);
                    }
                    catch (e) {
                        _this.errorMessage = GetActiveXErrorMessage(_this.appObjectName, e);
                    }
                    if (_this.errorMessage != null) {
                        try {
                            _this.app = new _this._window.ActiveXObject(_this.appObjectNameSimulator);
                            System.isSimulator = true;
                        }
                        catch (e) {
                            _this.errorMessage = GetActiveXErrorMessage(_this.appObjectName, e);
                            alert(_this.errorMessage);
                        }
                    }
                }
            };
            _this.showUrlDialog = function (url) {
                return (_this.app == null) ? _this.noData : _this.app.ShowURLDialog(url);
            };
            _this.initialization();
            return _this;
        }
        Object.defineProperty(EmrApp.prototype, "enterpriseId", {
            get: function () {
                return (this.app == null) ? this.noData : this.app.EnterpriseID;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EmrApp.prototype, "databaseVersion", {
            get: function () {
                return (this.app == null) ? this.noData : this.app.DatabaseVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EmrApp.prototype, "externalSimulator", {
            get: function () {
                return (this.app == null) ? this.noData : this.app.external;
            },
            enumerable: false,
            configurable: true
        });
        return EmrApp;
    }(EmrBase));

    var EmrWindow = /** @class */ (function () {
        function EmrWindow(_mel, _app, _window, _document) {
            var _this = this;
            this._mel = _mel;
            this._app = _app;
            this._window = _window;
            this._document = _document;
            this.openDialog = function (url) {
                ((StringInternal(url.toLowerCase())).startsWith('//localserver')) ? _this._mel.showUrlDialog(url) : _this._app.showUrlDialog(url);
            };
            this.open = function (url, verb, target, features, data) {
                var form = _this._document.createElement("form");
                form.action = url;
                form.method = verb || 'GET';
                form.target = target || "_self";
                if (data) {
                    for (var key in data) {
                        var input = _this._document.createElement("textarea");
                        input.name = key;
                        input.value = (typeof data[key] === "object") ? JSON.stringify(data[key]) : data[key];
                        form.appendChild(input);
                    }
                }
                form.style.display = 'none';
                _this._document.body.appendChild(form);
                var _window = _this._window.open("about:blank", target, features);
                form.submit();
                return _window;
            };
        }
        return EmrWindow;
    }());

    var DemographicsExternal = /** @class */ (function () {
        function DemographicsExternal(json) {
            var _this = this;
            this.json = json;
            this.toJson = function () { return _this._json; };
            if (json) {
                this._json = json;
                var obj = JSON.parse(json);
                this.confidentialityCode = obj.confidentialityCode;
                this.contactList = obj.contactList;
                this.electronicAddressList = obj.electronicAddressList;
                this.excludedUserAccess = obj.excludedUserAccess;
                this.excludedUserAccessSpecified = obj.excludedUserAccessSpecified;
                this.guarantorList = obj.guarantorList;
                this.guardianList = obj.guardianList;
                this.hasPatientAccess = obj.hasPatientAccess;
                this.hasPatientAccessSpecified = obj.hasPatientAccessSpecified;
                this.healthIssueList = obj.healthIssueList;
                this.identifierList = obj.identifierList;
                this.lastOfficeVisitDate = System.toDate(obj.lastOfficeVisitDate);
                this.lastOfficeVisitDateSpecified = obj.lastOfficeVisitDateSpecified;
                this.mailingAddressList = obj.mailingAddressList;
                this.medicareAdvantagePatient = obj.medicareAdvantagePatient;
                this.medicareAdvantagePatientSpecified = obj.medicareAdvantagePatientSpecified;
                this.mqicEPatientId = obj.mqicEPatientId;
                this.mqicEPatientIdSpecified = obj.mqicEPatientIdSpecified;
                this.organization = obj.organization;
                this.patientKey = obj.patientKey;
                this.patientKeySpecified = obj.patientKeySpecified;
                this.patientPicture = System.toImage(obj.patientPicture);
                this.person = obj.person;
                this.personAge = obj.personAge;
                this.preferredLanguage = obj.preferredLanguage;
                this.primaryProviderRelationshipList = obj.primaryProviderRelationshipList;
                this.registrationNote = obj.registrationNote;
                this.statusCode = obj.statusCode;
                this.vipCode = obj.vipCode;
            }
        }
        return DemographicsExternal;
    }());

    var PersonExternal = /** @class */ (function () {
        function PersonExternal(obj) {
            this.obj = obj;
            this.birthDate = obj.birthDate;
            this.birthPlaceName = obj.birthPlaceName;
            this.birthTime = obj.birthTime;
            this.birthTimeSpecified = obj.birthTimeSpecified;
            this.cdcEthnicityCode = obj.cdcEthnicityCode;
            this.cdcRaceCode = obj.cdcRaceCode;
            this.citizenList = obj.citizenList;
            this.deceaseInd = obj.deceaseInd;
            this.deceaseIndSpecified = obj.deceaseIndSpecified;
            this.deceaseTime = obj.deceaseTime;
            this.disabilityList = obj.disabilityList;
            this.educationLevelCode = obj.educationLevelCode;
            this.electronicAddressList = obj.electronicAddressList;
            this.employeeList = obj.employeeList;
            this.entityKey = obj.entityKey;
            this.entityKeySpecified = obj.entityKeySpecified;
            this.ethnicGroupList = obj.ethnicGroupList;
            this.genderCode = obj.genderCode;
            this.hl7MaritalStatusCode = obj.hl7MaritalStatusCode;
            this.identifierList = obj.identifierList;
            this.insuranceSetList = obj.insuranceSetList;
            this.languageList = obj.languageList;
            this.livingArrangmentCode = obj.livingArrangmentCode;
            this.mailingAddressList = obj.mailingAddressList;
            this.maritalStatusCode = obj.maritalStatusCode;
            this.multibirthInd = obj.multibirthInd;
            this.multibirthIndSpecified = obj.multibirthIndSpecified;
            this.multibirthOrderNbr = obj.multibirthOrderNbr;
            this.multibirthOrderNbrSpecified = obj.multibirthOrderNbrSpecified;
            this.personDeathCauseCode = obj.personDeathCauseCode;
            this.personKey = obj.personKey;
            this.personKeySpecified = obj.personKeySpecified;
            this.personNameList = obj.personNameList;
            this.personRelationshipList = obj.personRelationshipList;
            this.portalEmailAddressList = obj.portalEmailAddressList;
            this.providerCredentialList = obj.providerCredentialList;
            this.raceList = obj.raceList;
            this.religionCode = obj.religionCode;
            this.subjectHealthIssueList = obj.subjectHealthIssueList;
        }
        return PersonExternal;
    }());

    var PersonNameExternal = /** @class */ (function () {
        function PersonNameExternal(obj) {
            this.obj = obj;
            this.effectEndTime = obj.effectEndTime;
            this.effectStartTime = obj.effectStartTime;
            this.familyName = obj.familyName;
            this.givenName = obj.givenName;
            this.middleName = obj.middleName;
            this.nameStatusCode = obj.nameStatusCode;
            this.nameTypeCode = obj.nameTypeCode;
            this.nameUseCode = obj.nameUseCode;
            this.personNameKey = obj.personNameKey;
            this.personNameKeySpecified = obj.personNameKeySpecified;
            this.prefixName = obj.prefixName;
            this.suffixName = obj.suffixName;
            this.titleName = obj.titleName;
            this.voorvoegselName = obj.voorvoegselName;
        }
        return PersonNameExternal;
    }());

    var IdentifierDomainExternal = /** @class */ (function () {
        function IdentifierDomainExternal() {
        }
        return IdentifierDomainExternal;
    }());

    var IdentifierExternal = /** @class */ (function () {
        function IdentifierExternal() {
        }
        return IdentifierExternal;
    }());

    var PersonAgeExternal = /** @class */ (function () {
        function PersonAgeExternal() {
        }
        return PersonAgeExternal;
    }());

    var PrimaryProviderRelationshipExternal = /** @class */ (function () {
        function PrimaryProviderRelationshipExternal() {
        }
        return PrimaryProviderRelationshipExternal;
    }());

    var PrimaryProviderRelationshipItemExternal = /** @class */ (function () {
        function PrimaryProviderRelationshipItemExternal() {
        }
        return PrimaryProviderRelationshipItemExternal;
    }());

    var ElectronicAddressExternal = /** @class */ (function () {
        function ElectronicAddressExternal() {
        }
        return ElectronicAddressExternal;
    }());

    var InsurancePolicyExternal = /** @class */ (function () {
        function InsurancePolicyExternal() {
        }
        return InsurancePolicyExternal;
    }());

    var InsuranceSetExternal = /** @class */ (function () {
        function InsuranceSetExternal() {
        }
        return InsuranceSetExternal;
    }());

    var InsuranceSetItemExternal = /** @class */ (function () {
        function InsuranceSetItemExternal() {
        }
        return InsuranceSetItemExternal;
    }());

    var MailingAddressExternal = /** @class */ (function () {
        function MailingAddressExternal() {
        }
        return MailingAddressExternal;
    }());

    var PayorExternal = /** @class */ (function () {
        function PayorExternal() {
        }
        return PayorExternal;
    }());

    var UserDetailExternal = /** @class */ (function () {
        function UserDetailExternal() {
        }
        UserDetailExternal.fromExternal = function (_obj) {
            var userDetailExternal = new UserDetailExternal();
            userDetailExternal.activationDate = System.toDate(_obj.activationDate);
            userDetailExternal.activationDateSpecified = _obj.activationDateSpecified;
            userDetailExternal.authorizations = _obj.authorizations;
            userDetailExternal.authorizedLocationOfCares = _obj.authorizedLocationOfCares;
            userDetailExternal.currentLocation = _obj.currentLocation;
            userDetailExternal.currentLocationDetail = _obj.currentLocationDetail;
            userDetailExternal.currentLocationSpecified = _obj.currentLocationSpecified;
            userDetailExternal.data2000 = _obj.data2000;
            userDetailExternal.deaNumber = _obj.deaNumber;
            userDetailExternal.errorDetails = _obj.errorDetails;
            userDetailExternal.expirationDate = System.toDate(_obj.expirationDate);
            userDetailExternal.expirationDateSpecified = _obj.expirationDateSpecified;
            userDetailExternal.firstName = _obj.firstName;
            userDetailExternal.globalID = _obj.globalID;
            userDetailExternal.globalIDSpecified = _obj.globalIDSpecified;
            userDetailExternal.groupList = _obj.groupList;
            userDetailExternal.homeLocation = _obj.homeLocation;
            userDetailExternal.homeLocationDetail = _obj.homeLocationDetail;
            userDetailExternal.homeLocationSpecified = _obj.homeLocationSpecified;
            userDetailExternal.isrespprov = _obj.isrespprov;
            userDetailExternal.isrespprovSpecified = _obj.isrespprovSpecified;
            userDetailExternal.jobTitle = _obj.jobTitle;
            userDetailExternal.jobTitleDetail = _obj.jobTitleDetail;
            userDetailExternal.jobTitleSpecified = _obj.jobTitleSpecified;
            userDetailExternal.lastLoginDate = System.toDate(_obj.lastLoginDate);
            userDetailExternal.lastLoginDateSpecified = _obj.lastLoginDateSpecified;
            userDetailExternal.lastName = _obj.lastName;
            userDetailExternal.lastPasswordChange = System.toDate(_obj.lastPasswordChange);
            userDetailExternal.lastPasswordChangeSpecified = _obj.lastPasswordChangeSpecified;
            userDetailExternal.licenseNumber = _obj.licenseNumber;
            userDetailExternal.loginAttempts = _obj.loginAttempts;
            userDetailExternal.loginAttemptsSpecified = _obj.loginAttemptsSpecified;
            userDetailExternal.loginName = _obj.loginName;
            userDetailExternal.memberID = _obj.memberID;
            userDetailExternal.middleName = _obj.middleName;
            userDetailExternal.mqicUserName = _obj.mqicUserName;
            userDetailExternal.npi = _obj.npi;
            userDetailExternal.orgName = _obj.orgName;
            userDetailExternal.phone = _obj.phone;
            userDetailExternal.pidList = _obj.pidList;
            userDetailExternal.pmpRoleID = _obj.pmpRoleID;
            userDetailExternal.pmpRoleIDSpecified = _obj.pmpRoleIDSpecified;
            userDetailExternal.pmpRoleName = _obj.pmpRoleName;
            userDetailExternal.prescriberID = _obj.prescriberID;
            userDetailExternal.providerID = _obj.providerID;
            userDetailExternal.providerIDSpecified = _obj.providerIDSpecified;
            userDetailExternal.result = _obj.result;
            userDetailExternal.resultSpecified = _obj.resultSpecified;
            userDetailExternal.roleList = _obj.roleList;
            userDetailExternal.specialty = _obj.specialty;
            userDetailExternal.specialtyDetail = _obj.specialtyDetail;
            userDetailExternal.specialtySpecified = _obj.specialtySpecified;
            userDetailExternal.spi = _obj.spi;
            userDetailExternal.stateName = _obj.stateName;
            userDetailExternal.status = _obj.status;
            userDetailExternal.subscriptionureg = _obj.subscriptionureg;
            userDetailExternal.tocElectronicAddress = _obj.tocElectronicAddress;
            userDetailExternal.updateType = _obj.updateType;
            userDetailExternal.upin = _obj.upin;
            return userDetailExternal;
        };
        return UserDetailExternal;
    }());

    var AllergyExternal = /** @class */ (function () {
        function AllergyExternal() {
        }
        AllergyExternal.fromExternal = function (_obj) {
            var allergyExternal = new AllergyExternal();
            allergyExternal.allclass = _obj.allclass;
            allergyExternal.allergyGroupID = _obj.allergyGroupID;
            allergyExternal.allergyGroupIDSpecified = _obj.allergyGroupIDSpecified;
            allergyExternal.allergyID = _obj.allergyID;
            allergyExternal.annotate = _obj.annotate;
            allergyExternal.aproxonsetdate = _obj.aproxonsetdate;
            allergyExternal.change = _obj.change;
            allergyExternal.changeSpecified = _obj.changeSpecified;
            allergyExternal.dbCreateDate = System.toDate(_obj.dbCreateDate);
            allergyExternal.dbCreateDateSpecified = _obj.dbCreateDateSpecified;
            allergyExternal.dbUpdatedDate = System.toDate(_obj.dbUpdatedDate);
            allergyExternal.dbUpdatedDateSpecified = _obj.dbUpdatedDateSpecified;
            allergyExternal.description = _obj.description;
            allergyExternal.documentDetail = _obj.documentDetail;
            allergyExternal.drugDescID = _obj.drugDescID;
            allergyExternal.drugDescIDSpecified = _obj.drugDescIDSpecified;
            allergyExternal.errorDetails = _obj.errorDetails;
            allergyExternal.expirationID = _obj.expirationID;
            allergyExternal.extAllergyID = _obj.extAllergyID;
            allergyExternal.extAllergyIDSpecified = _obj.extAllergyIDSpecified;
            allergyExternal.externalAllergyInfoDetail = _obj.externalAllergyInfoDetail;
            allergyExternal.genericProductIndex = _obj.genericProductIndex;
            allergyExternal.gi = _obj.gi;
            allergyExternal.heme = _obj.heme;
            allergyExternal.iscritical = _obj.iscritical;
            allergyExternal.kind = _obj.kind;
            allergyExternal.knowledgeBaseDrugCode = _obj.knowledgeBaseDrugCode;
            allergyExternal.knowledgeBaseDrugCodeSpecified = _obj.knowledgeBaseDrugCodeSpecified;
            allergyExternal.medicationInfo = _obj.medicationInfo;
            allergyExternal.name = _obj.name;
            allergyExternal.ndclabprod = _obj.ndclabprod;
            allergyExternal.ndcpackage = _obj.ndcpackage;
            allergyExternal.onsetdate = System.toDate(_obj.onsetdate);
            allergyExternal.onsetdateSpecified = _obj.onsetdateSpecified;
            allergyExternal.other = _obj.other;
            allergyExternal.pendUserIndent = _obj.pendUserIndent;
            allergyExternal.pendUserIndentSpecified = _obj.pendUserIndentSpecified;
            allergyExternal.pendUserSort = _obj.pendUserSort;
            allergyExternal.pendUserSortSpecified = _obj.pendUserSortSpecified;
            allergyExternal.personID = _obj.personID;
            allergyExternal.pubtime = _obj.pubtime;
            allergyExternal.pubtimeSpecified = _obj.pubtimeSpecified;
            allergyExternal.pubUser = _obj.pubUser;
            allergyExternal.pubUserDetail = UserDetailExternal.fromExternal(_obj.pubUserDetail);
            allergyExternal.pubUserSpecified = _obj.pubUserSpecified;
            allergyExternal.rash = _obj.rash;
            allergyExternal.resp = _obj.resp;
            allergyExternal.result = _obj.result;
            allergyExternal.resultSpecified = _obj.resultSpecified;
            allergyExternal.searchCriteria = _obj.searchCriteria;
            allergyExternal.secondaryDocumentID = _obj.secondaryDocumentID;
            allergyExternal.secondaryDocumentIDSpecified = _obj.secondaryDocumentIDSpecified;
            allergyExternal.severity = _obj.severity;
            allergyExternal.shock = _obj.shock;
            allergyExternal.snomedID = _obj.snomedID;
            allergyExternal.snomedIDSpecified = _obj.snomedIDSpecified;
            allergyExternal.stopdate = System.toDate(_obj.stopdate);
            allergyExternal.stopdateSpecified = _obj.stopdateSpecified;
            allergyExternal.stopreason = _obj.stopreason;
            allergyExternal.userDetail = UserDetailExternal.fromExternal(_obj.userDetail);
            allergyExternal.userID = _obj.userID;
            allergyExternal.userIDSpecified = _obj.userIDSpecified;
            allergyExternal.userIndent = _obj.userIndent;
            allergyExternal.userIndentSpecified = _obj.userIndentSpecified;
            allergyExternal.userSort = _obj.userSort;
            allergyExternal.userSortSpecified = _obj.userSortSpecified;
            return allergyExternal;
        };
        return AllergyExternal;
    }());

    var ProblemExternal = /** @class */ (function () {
        function ProblemExternal() {
        }
        ProblemExternal.fromExternal = function (_obj) {
            var problemExternal = new ProblemExternal();
            problemExternal.annotate = _obj.annotate;
            problemExternal.aproxonsetdate = _obj.aproxonsetdate;
            problemExternal.aproxstopdate = _obj.aproxstopdate;
            problemExternal.assessmentList = _obj.assessmentList;
            problemExternal.change = _obj.change;
            problemExternal.code = _obj.code;
            problemExternal.codechange = _obj.codechange;
            problemExternal.covered = _obj.covered;
            problemExternal.dbCreateDate = System.toDate(_obj.dbCreateDate);
            problemExternal.dbCreateDateSpecified = _obj.dbCreateDateSpecified;
            problemExternal.dbUpdatedDate = System.toDate(_obj.dbUpdatedDate);
            problemExternal.dbUpdatedDateSpecified = _obj.dbUpdatedDateSpecified;
            problemExternal.description = _obj.description;
            problemExternal.documentDetail = _obj.documentDetail;
            problemExternal.errorDetails = _obj.errorDetails;
            problemExternal.expirationID = _obj.expirationID;
            problemExternal.expirationIDSpecified = _obj.expirationIDSpecified;
            problemExternal.externalProblemDetail = _obj.externalProblemDetail;
            problemExternal.extSecondaryProblemID = _obj.extSecondaryProblemID;
            problemExternal.extSecondaryProblemIDSpecified = _obj.extSecondaryProblemIDSpecified;
            problemExternal.icd9CodeDetail = _obj.icd9CodeDetail;
            problemExternal.icd9MasterDiagnosisID = _obj.icd9MasterDiagnosisID;
            problemExternal.icd9MasterDiagnosisIDSpecified = _obj.icd9MasterDiagnosisIDSpecified;
            problemExternal.icd10CodeDetail = _obj.icd10CodeDetail;
            problemExternal.icd10MasterDiagnosisID = _obj.icd10MasterDiagnosisID;
            problemExternal.icd10MasterDiagnosisIDSpecified = _obj.icd10MasterDiagnosisIDSpecified;
            problemExternal.lastClaimedDate = System.toDate(_obj.lastClaimedDate);
            problemExternal.lastClaimedDateSpecified = _obj.lastClaimedDateSpecified;
            problemExternal.medicareAdvantageAlert = _obj.medicareAdvantageAlert;
            problemExternal.medicareAdvantageAlertSpecified = _obj.medicareAdvantageAlertSpecified;
            problemExternal.medicareAdvantageRiskAdjustmentFactor = _obj.medicareAdvantageRiskAdjustmentFactor;
            problemExternal.onsetdate = System.toDate(_obj.onsetdate);
            problemExternal.onsetdateSpecified = _obj.onsetdateSpecified;
            problemExternal.pendUserIndent = _obj.pendUserIndent;
            problemExternal.pendUserIndentSpecified = _obj.pendUserIndentSpecified;
            problemExternal.pendUserSort = _obj.pendUserSort;
            problemExternal.pendUserSortSpecified = _obj.pendUserSortSpecified;
            problemExternal.personID = _obj.personID;
            problemExternal.priority = _obj.priority;
            problemExternal.prioritySpecified = _obj.prioritySpecified;
            problemExternal.problemID = _obj.problemID;
            problemExternal.problemIDSpecified = _obj.problemIDSpecified;
            problemExternal.pubtime = _obj.pubtime;
            problemExternal.pubtimeSpecified = _obj.pubtimeSpecified;
            problemExternal.pubUser = _obj.pubUser;
            problemExternal.pubUserDetail = UserDetailExternal.fromExternal(_obj.pubUserDetail);
            problemExternal.pubUserSpecified = _obj.pubUserSpecified;
            problemExternal.qualifier = _obj.qualifier;
            problemExternal.result = _obj.result;
            problemExternal.resultSpecified = _obj.resultSpecified;
            problemExternal.searchCriteria = _obj.searchCriteria;
            problemExternal.secondaryDocumentID = _obj.secondaryDocumentID;
            problemExternal.secondaryDocumentIDSpecified = _obj.secondaryDocumentIDSpecified;
            problemExternal.secondaryProblemID = _obj.secondaryProblemID;
            problemExternal.secondaryProblemIDSpecified = _obj.secondaryProblemIDSpecified;
            problemExternal.snoMedCodeDetail = _obj.snoMedCodeDetail;
            problemExternal.snoMedMasterDiagnosisID = _obj.snoMedMasterDiagnosisID;
            problemExternal.snoMedMasterDiagnosisIDSpecified = _obj.snoMedMasterDiagnosisIDSpecified;
            problemExternal.stopdate = System.toDate(_obj.stopdate);
            problemExternal.stopdateSpecified = _obj.stopdateSpecified;
            problemExternal.stopreason = _obj.stopreason;
            problemExternal.userDetail = UserDetailExternal.fromExternal(_obj.userDetail);
            problemExternal.userDim = _obj.userDim;
            problemExternal.userDimSpecified = _obj.userDimSpecified;
            problemExternal.userID = _obj.userID;
            problemExternal.userIDSpecified = _obj.userIDSpecified;
            problemExternal.userIndent = _obj.userIndent;
            problemExternal.userIndentSpecified = _obj.userIndentSpecified;
            problemExternal.userSort = _obj.userSort;
            problemExternal.userSortSpecified = _obj.userSortSpecified;
            return problemExternal;
        };
        return ProblemExternal;
    }());

    var CodeDetailExternal = /** @class */ (function () {
        function CodeDetailExternal() {
        }
        return CodeDetailExternal;
    }());

    var FlowsheetObservation = /** @class */ (function () {
        function FlowsheetObservation(_value) {
            this._value = _value;
            this.data = (this._value == null) ? [] : this._value.split('^');
            this.name = (this.data.length > 0) ? this.data[0] : '';
            this.value = (this.data.length > 1) ? this.data[1] : '';
            this.date = (this.data.length > 2) ? this.data[2] : '';
        }
        return FlowsheetObservation;
    }());

    var __awaiter$1 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var Patient = /** @class */ (function () {
        function Patient(_mel, _demographics) {
            var _this = this;
            this._mel = _mel;
            this._demographics = _demographics;
            this.observationType = new ObservationType();
            this._contactsArray = [];
            this._problemsArray = [];
            this._observations = {};
            this._observatiosArray = [];
            this._protocolsArray = [];
            this._insurances = [];
            this._immunizationsArray = [];
            this._carePlansArray = [];
            this._locationsArray = [];
            this._allergies = new Allergies(this._mel);
            this._referringProvider = new ReferringProvider(this._mel);
            this._phone = new Phone(this._mel);
            this.observations = function (name) {
                if (_this._observations[name] == null) {
                    var updateData = _this._mel.melFunc('{LIST_OBS("' + name + '","Update","Delimited","value")}');
                    var dataArray = StringInternal(updateData).toList();
                    var observationsArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        observationsArray.push(new Observation(name, _this.observationType.DocumentUnsigned, dataArray[index], _this._mel));
                    }
                    _this._observations[name] = observationsArray;
                    var signedData = _this._mel.melFunc('{LIST_OBS("' + name + '","Signed","Delimited","value")}');
                    var dataArrayU = StringInternal(signedData).toList();
                    for (var index = 0; index < dataArrayU.length; index++) {
                        _this._observations[name].push(new Observation(name, _this.observationType.Signed, dataArrayU[index], _this._mel));
                    }
                    _this._observations[name].tag = 'LIST_OBS.' + name;
                }
                return _this._observations[name];
            };
            if (_demographics) {
                this._patientPicture = _demographics.patientPicture;
                this._lastOfficeVisit = _demographics.lastOfficeVisitDate;
                this._registrationNote = _demographics.registrationNote;
                this._language = _demographics.preferredLanguage;
                if (_demographics.identifierList) {
                    var patientId = _demographics.identifierList.find(function (e) { return e.identifierDomain.domainId === "1.2.3.4.700"; });
                    this._patientId = (patientId) ? patientId.idValue : this._patientId;
                    this._printId = this._patientId;
                    var externalId = _demographics.identifierList.find(function (e) { return e.identifierDomain.domainId === "1.2.3.4.200"; });
                    this._externalId = (externalId) ? externalId.idValue : this._externalId;
                    var medicalRecordId = _demographics.identifierList.find(function (e) { return e.identifierDomain.domainId === "1.2.3.4.400"; });
                    this._medicalRecordId = (medicalRecordId) ? medicalRecordId.idValue : this._medicalRecordId;
                }
                if (_demographics.person) {
                    var birthDate = System.formatDate(_demographics.person.birthDate);
                    this._dateOfBirth = (birthDate) ? birthDate : this._dateOfBirth;
                    this._dateOfDeath = (_demographics.person.deceaseIndSpecified && _demographics.person.deceaseInd) ?
                        System.formatDate(_demographics.person.deceaseTime) : this._dateOfDeath;
                    this._sex = _demographics.person.genderCode;
                    if (_demographics.person.mailingAddressList && _demographics.person.mailingAddressList[0]) {
                        this._address = (this._address) ? this._address : new Address(this._mel, _demographics.person.mailingAddressList[0]);
                    }
                    if (_demographics.person.personNameList && _demographics.person.personNameList[0]) {
                        this._firstName = (_demographics.person.personNameList[0].givenName === null) ?
                            '' : _demographics.person.personNameList[0].givenName;
                        this._lastName = (_demographics.person.personNameList[0].familyName === null) ?
                            '' : _demographics.person.personNameList[0].familyName;
                        this._middleName = (_demographics.person.personNameList[0].middleName === null) ?
                            '' : _demographics.person.personNameList[0].middleName;
                        this._labelName = this._firstName
                            + ' ' + this._middleName
                            + ' ' + this._lastName;
                        this._namePrefix = _demographics.person.personNameList[0].prefixName;
                        this._nameSuffix = _demographics.person.personNameList[0].suffixName;
                    }
                    this._pid = _demographics.patientKeySpecified ? _demographics.patientKey.toString() : this._pid;
                    if (_demographics.person.identifierList) {
                        var ssn = _demographics.person.identifierList.find(function (e) { return e.identifierDomain.domainId === "1.2.3.4.300"; });
                        this._ssn = (ssn) ? ssn.idValue : this._ssn;
                        this._ssn = (this._ssn) ? this._ssn.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3') : this._ssn;
                    }
                }
            }
            this._address = (this._address) ? this._address : new Address(this._mel);
        }
        Object.defineProperty(Patient.prototype, "lastOfficeVisit", {
            get: function () {
                return this._lastOfficeVisit;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "patientPicture", {
            get: function () {
                this._patientPicture = (this._patientPicture !== undefined) ? this._patientPicture
                    : emptyImage;
                return this._patientPicture;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "patientId", {
            get: function () {
                this._patientId = (this._patientId !== undefined) ? this._patientId : this._mel.melFunc('{PATIENT.PATIENTID}');
                return this._patientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "pid", {
            get: function () {
                this._pid = (this._pid !== undefined) ? this._pid : this._mel.melFunc('{find("patient", "PID")}');
                return this._pid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "medicalRecordId", {
            get: function () {
                this._medicalRecordId = (this._medicalRecordId !== undefined) ? this._medicalRecordId : this._mel.melFunc('{PATIENT.MEDRECNO}');
                return this._medicalRecordId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "externalId", {
            get: function () {
                this._externalId = (this._externalId !== undefined) ? this._externalId : this._mel.melFunc('{PATIENT.EXTERNALID}');
                return this._externalId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "printId", {
            get: function () {
                this._printId = (this._printId !== undefined) ? this._printId : this._mel.melFunc('{PATIENT.PRINTID}');
                return this._printId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "ssn", {
            get: function () {
                this._ssn = (this._ssn !== undefined) ? this._ssn : this._mel.melFunc('{PATIENT.SOCSECNO}');
                return this._ssn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "firstName", {
            get: function () {
                this._firstName = (this._firstName !== undefined) ? this._firstName : this._mel.melFunc('{PATIENT.FIRSTNAME}');
                return this._firstName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "lastName", {
            get: function () {
                this._lastName = (this._lastName !== undefined) ? this._lastName : this._mel.melFunc('{PATIENT.LASTNAME}');
                return this._lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "middleName", {
            get: function () {
                this._middleName = (this._middleName !== undefined) ? this._middleName : this._mel.melFunc('{PATIENT.MIDDLENAME}');
                return this._middleName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "labelName", {
            get: function () {
                this._labelName = (this._labelName !== undefined) ? this._labelName : this._mel.melFunc('{PATIENT.LABELNAME}');
                return this._labelName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "namePrefix", {
            get: function () {
                this._namePrefix = (this._namePrefix !== undefined) ? this._namePrefix : this._mel.melFunc('{PATIENT.TITLE}');
                return this._namePrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "nameSuffix", {
            get: function () {
                this._nameSuffix = (this._nameSuffix !== undefined) ? this._nameSuffix : this._mel.melFunc('{PATIENT.ENTITLEMENTS}');
                return this._nameSuffix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "sex", {
            get: function () {
                this._sex = (this._sex !== undefined) ? this._sex : this._mel.melFunc('{PATIENT.SEX}');
                return this._sex;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "race", {
            get: function () {
                this._race = (this._race !== undefined) ? this._race : this._mel.melFunc('{PATIENT.RACE}');
                return this._race;
            },
            enumerable: false,
            configurable: true
        });
        Patient.prototype.raceAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            if (!(this._race !== undefined)) return [3 /*break*/, 1];
                            _b = this._race;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this._mel.melFunc('{PATIENT.RACE}')];
                        case 2:
                            _b = _c.sent();
                            _c.label = 3;
                        case 3:
                            _a._race = _b;
                            return [2 /*return*/, this._race];
                    }
                });
            });
        };
        Object.defineProperty(Patient.prototype, "ethnicity", {
            get: function () {
                this._ethnicity = (this._ethnicity !== undefined) ? this._ethnicity : this._mel.melFunc('{PATIENT.ETHNICITY}');
                return this._ethnicity;
            },
            enumerable: false,
            configurable: true
        });
        Patient.prototype.ethnicityAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            if (!(this._ethnicity !== undefined)) return [3 /*break*/, 1];
                            _b = this._ethnicity;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this._mel.melFunc('{PATIENT.ETHNICITY}')];
                        case 2:
                            _b = _c.sent();
                            _c.label = 3;
                        case 3:
                            _a._ethnicity = _b;
                            return [2 /*return*/, this._ethnicity];
                    }
                });
            });
        };
        Object.defineProperty(Patient.prototype, "dateOfBirth", {
            get: function () {
                this._dateOfBirth = (this._dateOfBirth !== undefined) ? this._dateOfBirth : this._mel.melFunc('{PATIENT.DATEOFBIRTH}');
                return this._dateOfBirth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "dateOfDeath", {
            get: function () {
                this._dateOfDeath = (this._dateOfDeath !== undefined) ? this._dateOfDeath : this._mel.melFunc('{PATIENT.DATEOFDEATH}');
                return this._dateOfDeath;
            },
            enumerable: false,
            configurable: true
        });
        Patient.prototype.dateOfDeathAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            if (!(this._dateOfDeath !== undefined)) return [3 /*break*/, 1];
                            _b = this._dateOfDeath;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this._mel.melFunc('{PATIENT.DATEOFDEATH}')];
                        case 2:
                            _b = _c.sent();
                            _c.label = 3;
                        case 3:
                            _a._dateOfDeath = _b;
                            return [2 /*return*/, this._dateOfDeath];
                    }
                });
            });
        };
        Object.defineProperty(Patient.prototype, "maritalStatus", {
            get: function () {
                this._maritalStatus = (this._maritalStatus !== undefined) ? this._maritalStatus : this._mel.melFunc('{PATIENT.MARITALSTATUS}');
                return this._maritalStatus;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "language", {
            get: function () {
                this._language = (this._language !== undefined) ? this._language : this._mel.melFunc('{PATIENT.PREFLANG}');
                return this._language;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "email", {
            get: function () {
                this._email = (this._email !== undefined) ? this._email : this._mel.melFunc('{PATIENT.EMAIL}');
                return this._email;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "contactBy", {
            get: function () {
                this._contactBy = (this._contactBy !== undefined) ? this._contactBy : this._mel.melFunc('{PATIENT.CONTACTBY}');
                return this._contactBy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "registrationNote", {
            get: function () {
                this._registrationNote = (this._registrationNote !== undefined) ? this._registrationNote : this._mel.melFunc('{PATIENT.REGNOTE}');
                return this._registrationNote;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "contacts", {
            get: function () {
                var _this = this;
                if (this._contactsArray.length === 0) {
                    this._contacts = (this._contacts !== undefined) ? this._contacts : this._mel.melFunc('{PATIENT.CONTACTS}');
                    var dataArray = StringInternal(this._contacts).toList();
                    this._contactsArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        this._contactsArray.push(new PatientContact(dataArray[index]));
                    }
                    this._contactsArray.tag = 'PATIENT.CONTACTS';
                    this._contactsArray.toMelString = function () {
                        return _this._contacts;
                    };
                }
                return this._contactsArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "employmentStatus", {
            get: function () {
                this._employmentStatus = (this._employmentStatus !== undefined) ? this._employmentStatus : this._mel.melFunc('{PATIENT.EMPLSTATUS}');
                return this._employmentStatus;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "clinicStatus", {
            get: function () {
                this._clinicStatus = (this._clinicStatus !== undefined) ? this._clinicStatus : this._mel.melFunc('{PATIENT.PSTATUS}');
                return this._clinicStatus;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "primaryCarePhysicianName", {
            get: function () {
                this._primaryCarePhysicianName = (this._primaryCarePhysicianName !== undefined) ? this._primaryCarePhysicianName : this._mel.melFunc('{PATIENT.PCP}');
                return this._primaryCarePhysicianName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "problems", {
            get: function () {
                var _this = this;
                if (this._problemsArray.length === 0) {
                    this._problems = (this._problems !== undefined) ? this._problems : this._mel.melFunc('{PROB_AFTER("delimited","dat","com")}');
                    var dataArray = StringInternal(this._problems).toList();
                    this._problemsArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        this._problemsArray.push(new Problem(dataArray[index]));
                    }
                    this._problemsArray.tag = 'PROB_AFTER';
                    this._problemsArray.toMelString = function () {
                        return _this._problems;
                    };
                }
                return this._problemsArray;
            },
            enumerable: false,
            configurable: true
        });
        Patient.prototype.flowsheetObservations = function (flowsheet) {
            var _this = this;
            var flowsheetValue = '';
            if (flowsheet) {
                flowsheetValue = flowsheet;
            }
            else {
                flowsheetValue = this._mel.melFunc('{_EncodeViewNameBS}');
            }
            if (this._observatiosArray.length === 0 || this._observatiosArray.tag != 'GET_FLOWSHEET_VALUES:' + flowsheetValue) {
                this._observationList = this._mel.melFunc('{GET_FLOWSHEET_VALUES("' + flowsheetValue + '","DELIM")}');
                var dataArray = StringInternal(this._observationList).toList();
                this._observatiosArray = [];
                for (var index = 0; index < dataArray.length; index++) {
                    this._observatiosArray.push(new FlowsheetObservation(dataArray[index]));
                }
                this._observatiosArray.tag = 'GET_FLOWSHEET_VALUES:' + flowsheetValue;
                this._observatiosArray.toMelString = function () {
                    return _this._observationList;
                };
            }
            return this._observatiosArray;
        };
        Object.defineProperty(Patient.prototype, "protocols", {
            get: function () {
                var _this = this;
                if (this._protocolsArray.length === 0) {
                    this._protocols = (this._protocols !== undefined) ? this._protocols : this._mel.melFunc('{LISTPROTOCOLSHORT("list")}');
                    var dataArray = StringInternal(this._protocols).toList('\r\n');
                    this._protocolsArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        this._protocolsArray.push(new Protocol(dataArray[index]));
                    }
                    this._protocolsArray.tag = 'LISTPROTOCOLSHORT("list")';
                    this._protocolsArray.toMelString = function () {
                        return _this._protocols;
                    };
                }
                return this._protocolsArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "insurances", {
            get: function () {
                if (this._insurances.length === 0) {
                    this._insurances.push(new Insurance('P', this._mel));
                    this._insurances.push(new Insurance('S', this._mel));
                    this._insurances.push(new Insurance('T', this._mel));
                }
                return this._insurances;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "immunizations", {
            get: function () {
                var _this = this;
                if (this._immunizationsArray.length === 0) {
                    this._immunizations = (this._immunizations !== undefined) ? this._immunizations : this._mel.melFunc('{IMMUN_GETLIST()}');
                    var dataArray = StringInternal(this._immunizations).toList();
                    this._immunizationsArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        this._immunizationsArray.push(new Immunization(dataArray[index], this._mel));
                    }
                    this._immunizationsArray.tag = 'IMMUN_GETLIST';
                    this._immunizationsArray.toMelString = function () {
                        return _this._immunizations;
                    };
                }
                return this._immunizationsArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "carePlans", {
            get: function () {
                var _this = this;
                if (this._carePlansArray.length === 0) {
                    this._carePlans = (this._carePlans !== undefined) ? this._carePlans : this._mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
                    var dataArray = StringInternal(this._carePlans).toList();
                    this._carePlansArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        this._carePlansArray.push(new CarePlan(dataArray[index], this._mel));
                    }
                    this._carePlansArray.tag = 'MEL_LIST_CARE_PLAN';
                    this._carePlansArray.toMelString = function () {
                        return _this._carePlans;
                    };
                }
                return this._carePlansArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "locations", {
            get: function () {
                if (this._locationsArray.length === 0) {
                    this._locations = (this._locations !== undefined) ? this._locations : this._mel.melFunc('{PATIENT.HOMELOCATIONNAME}');
                    this._locationsId = (this._locationsId !== undefined) ? this._locationsId : this._mel.melFunc('{PATIENT.HOMELOCATIONABBREVNAME}');
                    var locationProperty = new Location(this._locationsId, this._locations, LocationType.Home);
                    this._locationsArray.push(locationProperty);
                    this._locationsArray.findByType =
                        (function (value) {
                            var index;
                            if (typeof (value) === "number") {
                                for (index = 0; index < this.length; index++) {
                                    if (this[index].locationType === value) {
                                        return this[index];
                                    }
                                }
                            }
                            return undefined;
                        });
                }
                return this._locationsArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "allergies", {
            get: function () {
                return this._allergies;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "referringProvider", {
            get: function () {
                return this._referringProvider;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "phone", {
            get: function () {
                return this._phone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Patient.prototype, "address", {
            get: function () {
                return this._address;
            },
            enumerable: false,
            configurable: true
        });
        return Patient;
    }());

    var Users = /** @class */ (function () {
        function Users(_mel) {
            var _this = this;
            this._mel = _mel;
            this._usersArray = [];
            this.getUser = function (value) {
                if (value != null) {
                    _this._user = (_this._user != null) ? _this._user : new User(_this._mel.melFunc('{GETUSERINFO("' + value + '")}'), UserCallFunction.UserInfo);
                    return _this._user;
                }
                _this._currentUser = (_this._currentUser != null) ? _this._currentUser : new User(GetCurrentUser(_this._mel), UserCallFunction.UserInfo);
                return _this._currentUser;
            };
            this.getUsers = function () {
                if (_this._usersArray.length === 0) {
                    _this._users = _this._mel.melFunc('{GET_USER_LIST(USER.CURLOCATIONABBREVNAME, "", "delimited", true)}');
                    var dataArray = StringInternal(_this._users).toList();
                    for (var index = 0; index < dataArray.length; index++) {
                        _this._usersArray.push(new User(dataArray[index], UserCallFunction.UserList));
                    }
                    _this._usersArray.tag = 'GET_USER_LIST';
                    _this._usersArray.toMelString = function () {
                        return _this._users;
                    };
                }
                return _this._usersArray;
            };
        }
        return Users;
    }());

    var ExtensionExternalSimulator = /** @class */ (function () {
        function ExtensionExternalSimulator() {
            var _this = this;
            this.EvaluateMel = function (data, _showWait) {
                if (_showWait === void 0) { _showWait = false; }
                return _this.sendMessage(simulatorChromeExtensionId, { type: 'EvaluateMel', data: data });
            };
            this.Demographics = function () {
                return _this.sendMessage(simulatorChromeExtensionId, { type: 'Demographics' });
            };
            this.sendMessage = function (editorExtensionId, data) { return new Promise(function (resolve, reject) {
                if (typeof (chrome) !== 'undefined') {
                    chrome.runtime.sendMessage(editorExtensionId, data, function (response) {
                        if (response) {
                            resolve(response);
                        }
                        else {
                            resolve(null);
                        }
                    });
                }
                else {
                    reject('unsupported');
                }
            }); };
        }
        return ExtensionExternalSimulator;
    }());

    var __awaiter$2 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var Simulator = /** @class */ (function () {
        function Simulator(_window) {
            var _this = this;
            this._window = _window;
            this.appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
            this.noData = 'Data Access Error';
            this._isExtensionEvaluated = false;
            this._isActiveX = false;
            this._isSimulator = false;
            this._ExtensionExternalSimulator = new ExtensionExternalSimulator();
            this.isSimulatorAsync = function () { return __awaiter$2(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this._isSimulator) return [3 /*break*/, 1];
                            return [2 /*return*/, this._isSimulator];
                        case 1:
                            if (!!this._isExtensionEvaluated) return [3 /*break*/, 3];
                            _a = this;
                            return [4 /*yield*/, this.sendMessage(simulatorChromeExtensionId, { type: "version" })];
                        case 2:
                            _a._isSimulator = _b.sent();
                            this._isExtensionEvaluated = true;
                            _b.label = 3;
                        case 3: return [2 /*return*/, this._isSimulator];
                    }
                });
            }); };
            this.initialization = function () {
                if (IsActiveXSupported(_this._window)) {
                    try {
                        _this.app = new _this._window.ActiveXObject(_this.appObjectNameSimulator);
                        _this._isActiveX = true;
                        _this._isSimulator = true;
                        console.info('mdObject is using ActiveX Simulator: ' + _this.appObjectNameSimulator);
                    }
                    catch (e) {
                        var errorMessage = GetActiveXErrorMessage(_this.appObjectNameSimulator, e);
                        console.info(errorMessage);
                    }
                }
            };
            this.sendMessage = function (editorExtensionId, data) { return new Promise(function (resolve, _reject) {
                if (typeof (chrome) !== 'undefined') {
                    chrome.runtime.sendMessage(editorExtensionId, data, function (response) {
                        if (response) {
                            console.info('mdObject is using Chrome Extension Simulator: ' + simulatorChromeExtensionId);
                            resolve(true);
                        }
                        else {
                            console.info('mdObject: Chrome Extension Simulator is missing or inactive');
                            resolve(false);
                        }
                    });
                }
                else {
                    resolve(false);
                }
            }); };
            this.initialization();
        }
        Object.defineProperty(Simulator.prototype, "externalSimulator", {
            get: function () {
                return ((!this._isActiveX) ? this._ExtensionExternalSimulator : (this.app) ? this.app.external : this.noData);
            },
            enumerable: false,
            configurable: true
        });
        return Simulator;
    }());

    var __awaiter$3 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var ClinicalDocument = /** @class */ (function () {
        function ClinicalDocument(_mel, _emr) {
            var _this = this;
            this._mel = _mel;
            this._emr = _emr;
            this._locationPropertyArray = [];
            this.save = function () {
                _this._mel.melFunc('{DOCUMENT.mdObject_letiables = "' + JSON.stringify(_this.rawValue).replace(/"/g, '\\"') + '"}');
            };
            this.rawValue = DocumentVariable({}, this.save);
            this.val = function (key, value) {
                if (key == null || key.length === 0) {
                    return undefined;
                }
                if (value == null) {
                    return _this._mel.melFunc('{DOCUMENT.' + key + '}');
                }
                else {
                    return _this._mel.melFunc('{DOCUMENT.' + key + '="' + value + '"}');
                }
            };
        }
        Object.defineProperty(ClinicalDocument.prototype, "letiables", {
            get: function () {
                if (this._letiables == null) {
                    this._letiables = (this._letiables != null) ? this._letiables : this._mel.melFunc('{DOCUMENT.mdObject_letiables}');
                    this._letiables = (this._letiables !== '') ? this._letiables : JSON.stringify(this.rawValue);
                    try {
                        this.rawValue = DocumentVariable(JSON.parse(this._letiables), this.save);
                    }
                    catch (e) {
                        this.rawValue = {};
                    }
                }
                return this.rawValue;
            },
            set: function (val) {
                for (var key in val) {
                    this.rawValue[key] = val[key];
                }
                this._mel.melFunc('{DOCUMENT.mdObject_letiables = "' + JSON.stringify(this.rawValue).replace(/"/g, '\\"') + '"}');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "did", {
            get: function () {
                this._did = (this._did != null) ? this._did : this._mel.melFunc('{find("DOCUMENT","DID")}');
                return this._did;
            },
            enumerable: false,
            configurable: true
        });
        ClinicalDocument.prototype.didAsync = function () {
            return __awaiter$3(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            if (!(this._did != null)) return [3 /*break*/, 1];
                            _b = this._did;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this._emr.melFuncAsync('{find("DOCUMENT","DID")}')];
                        case 2:
                            _b = _c.sent();
                            _c.label = 3;
                        case 3:
                            _a._did = _b;
                            return [2 /*return*/, this._did];
                    }
                });
            });
        };
        Object.defineProperty(ClinicalDocument.prototype, "xid", {
            get: function () {
                this._xid = (this._xid != null) ? this._xid : this._mel.melFunc('{DOCUMENT.XID}').split('.')[0];
                return this._xid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "documentId", {
            get: function () {
                this._documentId = (this._documentId != null) ? this._documentId : this._mel.melFunc('{DOCUMENT.VISDOCID}');
                return this._documentId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "status", {
            get: function () {
                this._status = (this._status != null) ? this._status : this._mel.melFunc('{DOCUMENT.STATUS}');
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "location", {
            get: function () {
                if (this._locationPropertyArray.length === 0) {
                    this._location = (this._location != null) ? this._location : this._mel.melFunc('{DOCUMENT.LOCOFCARENAME}');
                    this._locationProperty = (this._locationProperty != null) ? this._locationProperty : new Location(this._location, this._location, LocationType.Current);
                    this._locationPropertyArray.push(this._locationProperty);
                    this._locationPropertyArray.findByType =
                        (function (value) {
                            var i;
                            if (typeof (value) === "number") {
                                for (i = 0; i < this.length; i++) {
                                    if (this[i].locationType === value) {
                                        return this[i];
                                    }
                                }
                            }
                            return undefined;
                        });
                }
                return this._locationPropertyArray;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "dateOfUpdate", {
            get: function () {
                this._dateOfUpdate = (this._dateOfUpdate != null) ? this._dateOfUpdate : this._mel.melFunc('{DOCUMENT.CLINICALDATE}');
                return this._dateOfUpdate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "provider", {
            get: function () {
                this._provider = (this._provider != null) ? this._provider : this._mel.melFunc('{DOCUMENT.PROVIDER}');
                return this._provider;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClinicalDocument.prototype, "userLoginName", {
            get: function () {
                this._userLoginName = (this._userLoginName != null) ? this._userLoginName : this._mel.melFunc('{DOCUMENT.USERLOGINNAME}');
                return this._userLoginName;
            },
            enumerable: false,
            configurable: true
        });
        return ClinicalDocument;
    }());

    var __awaiter$4 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var Emr = /** @class */ (function () {
        function Emr(_window, _document) {
            var _this = this;
            this._window = _window;
            this._document = _document;
            this._melContent = {};
            this._allergyExternalList = [];
            this._problemExternalList = [];
            this.externalAsync = function () { return __awaiter$4(_this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (this._external) {
                                return [2 /*return*/, this._external];
                            }
                            _a = this;
                            if (!this._external) return [3 /*break*/, 1];
                            _b = this._external;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this._simulator.isSimulatorAsync()];
                        case 2:
                            _b = (_c.sent()) ? this._simulator.externalSimulator
                                : (this._window.opener && this._window.opener.external) ? this._window.opener.external
                                    : this._window.external;
                            _c.label = 3;
                        case 3:
                            _a._external = _b;
                            return [2 /*return*/, this._external];
                    }
                });
            }); };
            this.melContent = function (name) {
                if (_this._melContent[name] == null) {
                    var data_1 = _this.emrMel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');
                    var dataArray = StringInternal(data_1).toList();
                    var melContentArray = [];
                    for (var index = 0; index < dataArray.length; index++) {
                        melContentArray.push(new EmrContent(dataArray[index], _this.emrMel, _this._window));
                    }
                    _this._melContent[name] = melContentArray;
                    _this._melContent[name].tag = function () {
                        return 'MEL_GET_CONTENT';
                    }();
                    _this._melContent[name].toMelString = function () {
                        return data_1;
                    };
                }
                return _this._melContent[name];
            };
            this.demographicsAsync = function () { return __awaiter$4(_this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this;
                            if (!(this._demographics)) return [3 /*break*/, 1];
                            _b = this._demographics;
                            return [3 /*break*/, 6];
                        case 1: return [4 /*yield*/, this.externalAsync()];
                        case 2:
                            if (!(_d.sent())) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.externalAsync().then(function (e) { return e.Demographics(); })];
                        case 3:
                            _c = _d.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            _c = this._demographics;
                            _d.label = 5;
                        case 5:
                            _b = (_c);
                            _d.label = 6;
                        case 6:
                            _a._demographics = _b;
                            return [2 /*return*/, new DemographicsExternal(this._demographics)];
                    }
                });
            }); };
            this.allergiesJson = function () {
                _this._allergiesJson = (_this._allergiesJson) ? _this._allergiesJson
                    : ((_this.external) ? _this.external.Allergies : _this._allergiesJson);
                return _this._allergiesJson;
            };
            this.problemsJson = function () {
                _this._problemsJson = (_this._problemsJson) ? _this._problemsJson
                    : ((_this.external) ? _this.external.Problems : _this._problemsJson);
                return _this._problemsJson;
            };
            this.patientAsync = function () { return __awaiter$4(_this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!(this._patient === undefined)) return [3 /*break*/, 2];
                            _a = this;
                            _b = Patient.bind;
                            _c = [void 0, this.emrMel];
                            return [4 /*yield*/, this.demographicsAsync()];
                        case 1:
                            _a._patient = new (_b.apply(Patient, _c.concat([_d.sent()])))();
                            _d.label = 2;
                        case 2: return [2 /*return*/, this._patient];
                    }
                });
            }); };
            this.clinicalDocumentAsync = function () { return __awaiter$4(_this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!(this._clinicalDocument === undefined)) return [3 /*break*/, 2];
                            _a = this;
                            _b = ClinicalDocument.bind;
                            _c = [void 0, this.emrMel];
                            return [4 /*yield*/, this];
                        case 1:
                            _a._clinicalDocument = new (_b.apply(ClinicalDocument, _c.concat([_d.sent()])))();
                            _d.label = 2;
                        case 2: return [2 /*return*/, this._clinicalDocument];
                    }
                });
            }); };
            this.melFuncAsync = function (data, showWait) {
                if (showWait === void 0) { showWait = false; }
                return __awaiter$4(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.externalAsync().then(function (e) { return e.EvaluateMel(data, showWait); })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            };
            this._simulator = new Simulator(this._window);
            this._window['_melOpener'] = this.emrMel;
            this._window['_appOpener'] = this.emrApp;
            this._obsTermsMap = new ObsTermsMap();
            this._emrWindow = new EmrWindow(this.emrMel, this.emrApp, this._window, this._document);
        }
        Object.defineProperty(Emr.prototype, "enterpriseId", {
            get: function () {
                return this.emrApp.enterpriseId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "external", {
            get: function () {
                if (this._external) {
                    return this._external;
                }
                this._external = this._external ? this._external
                    : (this._window.opener && this._window.opener.external) ? this._window.opener.external
                        : this._window.external;
                if (this._external.IsDebugMode === undefined) {
                    this._external = this._simulator.externalSimulator;
                }
                return this._external;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "databaseVersion", {
            get: function () {
                return this.emrApp.databaseVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "version", {
            get: function () {
                this._version = (this._version != null) ? this._version : this.emrMel.melFunc('{VER_EMR()}');
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "emrWindow", {
            get: function () {
                return this._emrWindow;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "emrMel", {
            get: function () {
                this._emrMel = (this._window.opener != null && this._window.opener['_melOpener'] != undefined) ? this._window.opener['_melOpener']
                    : (this._emrMel != null) ? this._emrMel
                        : new EmrMel(this._window, this._simulator);
                return this._emrMel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "emrApp", {
            get: function () {
                this._emrApp = (this._window.opener != null && this._window.opener['_appOpener'] != undefined) ? this._window.opener['_appOpener']
                    : (this._emrApp != null) ? this._emrApp
                        : new EmrApp(this._window, this._simulator);
                return this._emrApp;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "baseServicesUrl", {
            get: function () {
                this._baseServicesUrl = (this._baseServicesUrl) ? this._baseServicesUrl
                    : ((this.external) ? this.external.BaseServicesUrl : this._baseServicesUrl);
                return this._baseServicesUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "demographics", {
            get: function () {
                this._demographics = (this._demographics) ? this._demographics
                    : ((this.external) ? this.external.Demographics : this._demographics);
                return new DemographicsExternal(this._demographics);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "allergies", {
            get: function () {
                if (this._allergyExternalList.length === 0) {
                    var allergiesJson = this.allergiesJson();
                    if (allergiesJson) {
                        var dataArray = JSON.parse(allergiesJson);
                        for (var index = 0; index < dataArray.length; index++) {
                            this._allergyExternalList.push(AllergyExternal.fromExternal(dataArray[index]));
                        }
                    }
                }
                return this._allergyExternalList;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "problems", {
            get: function () {
                if (this._problemExternalList.length === 0) {
                    var problemsJson = this.problemsJson();
                    if (problemsJson) {
                        var dataArray = JSON.parse(problemsJson);
                        for (var index = 0; index < dataArray.length; index++) {
                            this._problemExternalList.push(ProblemExternal.fromExternal(dataArray[index]));
                        }
                    }
                }
                return this._problemExternalList;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "patient", {
            get: function () {
                if (this._patient === undefined) {
                    this._patient = new Patient(this.emrMel, this.demographics);
                }
                return this._patient;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "users", {
            get: function () {
                if (this._users === undefined) {
                    this._users = new Users(this.emrMel);
                }
                return this._users;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "clinicalDocument", {
            get: function () {
                if (this._clinicalDocument === undefined) {
                    this._clinicalDocument = new ClinicalDocument(this.emrMel, this);
                }
                return this._clinicalDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "obsTermsMap", {
            get: function () {
                return this._obsTermsMap;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "LocationType", {
            get: function () {
                return LocationType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Emr.prototype, "UserCallFunction", {
            get: function () {
                return UserCallFunction;
            },
            enumerable: false,
            configurable: true
        });
        return Emr;
    }());

    var HumanName = /** @class */ (function () {
        function HumanName() {
        }
        return HumanName;
    }());

    var Address$1 = /** @class */ (function () {
        function Address() {
        }
        return Address;
    }());

    var Attachment = /** @class */ (function () {
        function Attachment() {
        }
        return Attachment;
    }());

    var Person = /** @class */ (function () {
        function Person() {
        }
        Object.defineProperty(Person.prototype, "resourceType", {
            get: function () { return "Person"; },
            enumerable: false,
            configurable: true
        });
        ;
        return Person;
    }());

    var Patient$1 = /** @class */ (function () {
        function Patient() {
        }
        Object.defineProperty(Patient.prototype, "resourceType", {
            get: function () { return "Patient"; },
            enumerable: false,
            configurable: true
        });
        ;
        return Patient;
    }());

    var Fhir = /** @class */ (function () {
        function Fhir() {
        }
        return Fhir;
    }());

    var MdObject = /** @class */ (function () {
        function MdObject(_window, _document) {
            this._window = _window;
            this._document = _document;
            if (typeof this._window === 'undefined' && typeof this._document === 'undefined') {
                throw new Error("MdObject requires a _window with a _document");
            }
            console.info("The mdObject Version:" + this.version);
            this._emr = new Emr(this._window, this._document);
            this._fhir = new Fhir();
        }
        Object.defineProperty(MdObject.prototype, "version", {
            get: function () {
                return version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MdObject.prototype, "productType", {
            get: function () {
                return productType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MdObject.prototype, "emr", {
            get: function () {
                return this._emr;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MdObject.prototype, "fhir", {
            get: function () {
                return this._fhir;
            },
            enumerable: false,
            configurable: true
        });
        return MdObject;
    }());

    var Allergy = /** @class */ (function () {
        function Allergy(_mel) {
            var _this = this;
            this._mel = _mel;
            this.state = ObjectState.None;
            this.name = '';
            this.criticalIndicator = AllergyCriticality.undefined;
            this.classification = AllergyClassification.none;
            this.description = '';
            this.gpiCode = '';
            this.severity = '';
            this.stopDate = '';
            this.allergyId = '';
            this.reactionCode = 32;
            this.save = function () {
                switch (_this.state) {
                    case ObjectState.Add: {
                        var code = _this._mel.melFunc('{MEL_ADD_ALLERGY("' + _this.toAddString() + '")}');
                        if (code !== '') {
                            var error = 'Allergy.save error. Code is ' + code;
                            console.error(error);
                            throw new Error('Allergy not saved. ' + error);
                        }
                        _this.state = ObjectState.None;
                        break;
                    }
                    case ObjectState.Update: {
                        _this._mel.melFunc('{MEL_CHANGE_ALLERGY("' + _this.toChangeString() + '")}');
                        _this.state = ObjectState.None;
                        break;
                    }
                    case ObjectState.Remove: {
                        _this._mel.melFunc('{MEL_REMOVE_ALLERGY("' + _this.toRemoveString() + '")}');
                        _this.state = ObjectState.None;
                        break;
                    }
                }
            };
            this.toChangeString = function () { return ''; };
            this.toRemoveString = function () { return ''; };
            this.toAddString = function () {
                return _this.name + '","' +
                    _this.description + '","' +
                    _this.onSetDate + '","' +
                    _this.allergyId + '",' +
                    _this.reactionCode + ',"' +
                    _this.gpiCode + '","' +
                    _this.stopDate + '","' +
                    _this.criticalIndicator + '","' +
                    _this.classification;
            };
        }
        return Allergy;
    }());

    (function (window) {
        var mdObject;
        try {
            mdObject = new MdObject(window, window.document);
            window['mdObject'] = mdObject;
        }
        catch (e) {
            console.error(e);
        }
        return mdObject;
    })(window);

    exports.MdObject = MdObject;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mdobject-mdobject.umd.js.map
