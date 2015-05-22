/*!
 * ==============================================================================
 * mdObject JavaScript Library v1.0.11
 * http://mdObject.com/
 *
 * Copyright (c) 2015 mdObject, Inc. and other contributors
 * All Rights RESERVED
 * Released under the Microsoft Public License (MS-PL)
 * http://opensource.org/licenses/MS-PL
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Note: This mdObject are compatible only with GE EMR 9.8 & CPS 12.0 or above.
 * This file should not be modified
 *
 * Date: 2013-11-4
 * ============================================================================ */
/*jslint node: true */
'use strict';
(function (global, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper window is present,
        // execute the factory and get mdObject
        // For environments that do not inherently posses a window with a document
        // (such as Node.js), expose a mdObject-making factory as module.exports
        // This accentuates the need for the creation of a real window
        // e.g. var mdObject = require("mdobject")(window);
        module.exports = global.document ? factory(global, true) : function (w) {
            if (!w.document) {
                throw new Error("mdObject requires a window with a document");
            }
            return factory(w);
        };
    } else {
        return factory(global);
    }

    // Pass this if window is not defined yet
}(window !== undefined ? window : this, function (window, noGlobal) {

    var _melOpener, _appOpener;
    if (window.opener !== undefined && window.opener.$mdObject !== undefined && window.opener.$mdObject.emr !== undefined) {
        if (window.opener.$mdObject.emr.EmrMel !== undefined) {
            _melOpener = window.opener.$mdObject.emr.EmrMel;
        }

        if (window.opener.$mdObject.emr.EmrApp !== undefined) {
            _appOpener = window.opener.$mdObject.emr.EmrApp;
        }
    };

    var mdObject = {
        // Emr Users
        "users": {},
        // Selected EMR patient object
        "patient": {}

    };

    function getActiveXErrorMessage(objectName, e) {
        return "Unable to load ActiveX interface " + objectName + ((e !== undefined && e.hasOwnProperty("Message")) ? ".\nError message: " + e.Message :
            "");
    }

    function isActiveXSupported() {
        var activeXsupport = false;

        // Verify ActiveX support in this browser
        if (window.ActiveXObject !== undefined) {
            activeXsupport = true;
        } else {
            activeXsupport = false;
            alert("Your browser does not support ActiveX objects");
        }
        return activeXsupport;
    }

    function EmrMel() {
        var activeXsupport = isActiveXSupported(),
            melObjectName = 'GE.CPO.EMR.80.MEL',
            melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR',
            noMelData = 'Data Access Error',
            mel = null,
            error = false,
            errorMessage = '';

        if (activeXsupport) {
            try {
                mel = new ActiveXObject(melObjectName);
            } catch (e) {
                error = true;
                errorMessage = getActiveXErrorMessage(melObjectName, e);
            }
            // Try to activate simulator
            if (error) {
                try {
                    mel = new ActiveXObject(melObjectNameSimulator);
                } catch (e) {
                    alert(errorMessage);
                }
            }
        }

        // Implements MEL eval function
        this.melFunc = function (data) {
            return (mel === null) ? noMelData : mel.eval(data);
        };

        this.saveObservation = function (obs, value, date) {
            return (mel === null) ? noMelData : mel.OBSNOW(obs, value, date);
        }

        this.getObs = function (isCurrent, data) {
            return (mel === null) ? noMelData : ((isCurrent === true) ? mel.OBSNOW(data, '', '') : mel.OBSPREV(data));
        };

        this.showUrlDialog = function (url) {
            this.melFunc('{SHOW_HTML_FORM("' + url + '","test")}');
        };

    }

    function EmrApp() {
        var activeXsupport = isActiveXSupported(),
            appObjectName = 'GE.CPO.EMR.90.Application',
            appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR',
            noAppData = 'Data Access Error',
            app = null,
            error = false,
            errorMessage = '';

        if (activeXsupport && app === null) {
            try {
                app = new ActiveXObject(appObjectName);
                app.SetPasscode(window.external.Passcode);
            } catch (e) {
                error = true;
                errorMessage = getActiveXErrorMessage(appObjectName, e);
            }
            // Try to activate simulator
            if (error) {
                try {
                    app = new ActiveXObject(appObjectNameSimulator);
                } catch (e) {
                    alert(errorMessage);
                }
            }
        }

        this.enterpriseId = function () {
            return (app === null) ? noAppData : app.EnterpriseID;
        };
        this.databaseVersion = function () {
            return (app === null) ? noAppData : app.DatabaseVersion;
        };
        this.showUrlDialog = function (url) {
            return (app === null) ? noAppData : app.ShowURLDialog(url);
        };
    }

    //-------------- classes --------------

    function DocumentVariable(value, saveCallback) {
        var ar = (value === undefined) ? new Object() : value;
        ar.save = function () {
            if (saveCallback !== undefined) {
                saveCallback();
            }
        };

        return ar;
    }

    function StringInternal(value, tag) {
        var sb = new String(value);

        // Function parse string object to array of string 
        sb.toList = function (seporator) {
            if (seporator === undefined) {
                seporator = '|';
            }

            var dataArray = value.split(seporator),
                index;
            /*jslint plusplus: true */
            for (index = 0; index < dataArray.length; index++) {
                if (dataArray[index].length === 0) {
                    dataArray.splice(index, 1);
                }
            }

            return dataArray;
        };

        // String helper function to validate that string start with specified string
        sb.startsWith = function (str) {
            return value.slice(0, str.length) === str;
        };

        // String helper function to validate that string end with specified string
        sb.endsWith = function (str) {
            return value.slice(-str.length) === str;
        };

        sb.tag = (tag !== undefined) ? tag : '';

        sb.toDate = function () {
            return new Date(value.toString());
        };

        return sb;
    }

    function EmrContent(value) {
        var data = value === undefined ? [] : value.split('^'),
            isNew = value === undefined ? true : false,
            contentProperty = {
                "contentId": (data.length > 0) ? data[0] : '',
                "key": (data.length > 1) ? data[1] : '',
                "name": (data.length > 2) ? data[2] : '',
                "value": (data.length > 3) ? data[3] : '',
                "_unk0": (data.length > 4) ? data[4] : '',
                "_unk1": (data.length > 5) ? data[5] : '',
                "_unk2": (data.length > 6) ? data[6] : '',
                "_unk3": (data.length > 7) ? data[7] : '',
                "_unk4": (data.length > 8) ? data[8] : '',
                "_unk5": (data.length > 9) ? data[9] : '',
                toAddString: function (encodeValue) {
                    var recordValue = encodeValue === undefined ? this.value : window.btoa(this.value);
                    return this.key + '^' + this.name + '^' + recordValue + '^' + this._unk0 + '^' + this._unk1 + '^' + this._unk2 + '^' + this._unk3 + '^' + this._unk4 + '^' + this._unk5;
                },
                save: function (encodeValue) {
                    var response;
                    if (isNew) {
                        response = _mel.melFunc('{MEL_ADD_CONTENT("' + this.toAddString(encodeValue) + '")}');
                        isNew = false;
                    } else {
                        response = _mel.melFunc('{MEL_REMOVE_CONTENT("' + this.contentId + '")}');
                        response = _mel.melFunc('{MEL_ADD_CONTENT("' + this.toAddString(encodeValue) + '")}');
                    }
                },
                remove: function () { _mel.melFunc('{MEL_REMOVE_CONTENT("' + this.contentId + '")}'); }
            };

        return contentProperty;
    }

    function PatientContact(value) {
        var data = value === undefined ? [] : value.split('^'),
            contactProperty = {
                name: (data.length > 0) ? data[0] : '',
                type: (data.length > 1) ? data[1] : '',
                phone: (data.length > 2) ? data[2] : '',
                phoneType: (data.length > 3) ? data[3] : '',
                address: (data.length > 4) ? data[4] : '',
                toMelString: function () {
                    return value;
                }
            };
        return contactProperty;
    }

    function Immunization(value) {
        var data = value === undefined ? [] : value.split('^'),
            isNew = value === undefined ? true : false,
            immunizationsProperty = {
                immunizationId: (data.length > 0) ? data[0] : '',
                immunizationGroupId: (data.length > 1) ? data[1] : '',
                vaccineGroupName: (data.length > 2) ? data[2] : '',
                vaccineName: (data.length > 3) ? data[3] : '',
                medicalDisplayName: (data.length > 4) ? data[4] : '',
                series: (data.length > 5) ? data[5] : '',
                wasGiven: (data.length > 6) ? data[6] : '',
                reasonNotGiven: (data.length > 7) ? data[7] : '',
                historical: (data.length > 8) ? data[8] : '',
                historicalSource: (data.length > 9) ? data[9] : '',
                vfcElegibility: (data.length > 10) ? data[10] : '',
                ddid: (data.length > 11) ? data[11] : '',
                dnid: (data.length > 12) ? data[12] : '',
                gpi: (data.length > 13) ? data[13] : '',
                kdc: (data.length > 14) ? data[14] : '',
                ndc: (data.length > 15) ? data[15] : '',
                cvxCode: (data.length > 16) ? data[16] : '',
                doseAmount: (data.length > 17) ? data[17] : '',
                dosageUnitOfMeasure: (data.length > 18) ? data[18] : '',
                route: (data.length > 19) ? data[19] : '',
                routeCode: (data.length > 20) ? data[20] : '',
                site: (data.length > 21) ? data[21] : '',
                siteCode: (data.length > 22) ? data[22] : '',
                manufacturer: (data.length > 23) ? data[23] : '',
                manufacturerCode: (data.length > 24) ? data[24] : '',
                lotNumber: (data.length > 25) ? data[25] : '',
                expirationDate: (data.length > 26) ? data[26] : '',
                visPublishedDate: (data.length > 27) ? data[27] : '',
                administeredByName: (data.length > 28) ? data[28] : '',
                administeredDate: (data.length > 29) ? data[29] : '',
                administeredDateType: (data.length > 30) ? data[30] : '',
                administeredComments: (data.length > 31) ? data[31] : '',
                advReactionDateTime: (data.length > 32) ? data[32] : '',
                advReactionDateTimeType: (data.length > 33) ? data[33] : '',
                advReactionComments: (data.length > 34) ? data[34] : '',
                advReactionCmtByName: (data.length > 35) ? data[35] : '',
                signed: (data.length > 36) ? data[36] : '',
                signedByName: (data.length > 37) ? data[37] : '',
                signedDate: (data.length > 38) ? data[38] : '',
                reasonRemoved: (data.length > 39) ? data[39] : '',
                stopDate: (data.length > 40) ? data[40] : '',
                reasonNotGivenMedical: (data.length > 41) ? data[41] : '',
                reasonNotGivenMedicalDetail: (data.length > 42) ? data[42] : '',
                save: function () {
                    if (isNew) {
                        var isError = this.validateAdd(),
                            response;
                        if (isError === '') {
                            response = _mel.melFunc('{IMMUN_ADD("' + this.toStringAdd() + '")}');
                            if (response < 0) {
                                alert(response);
                            }
                        } else {
                            alert(isError);
                        }
                    } else {
                        // update
                    }
                },
                toMelString: function () {
                    return value;
                }
            };

        immunizationsProperty.validateAdd = function () {
            var errorMessage = ' is required.';
            // check required parameters
            if (this.vaccineGroupName === '') {
                return 'vaccineGroupName' + errorMessage;
            }
            if (this.wasGiven === '') {
                return 'wasGiven' + errorMessage;
            }
            if (this.historical === '') {
                return 'historical' + errorMessage;
            }
            if (this.vfcElegibility === '') {
                return 'vfcElegibility' + errorMessage;
            }
            if (this.administeredDate === '') {
                return 'administeredDate' + errorMessage;
            }
            if (this.doseAmount.match(/[^0-9.]/g)) {
                return 'doseAmount should be numeric.';
            }
            return '';
        };

        immunizationsProperty.toStringAdd = function () {
            return this.vaccineGroupName + '^' + this.vaccineName + '^' + this.medicalDisplayName + '^' + this.series + '^' + this.wasGiven +
                '^' + this.reasonNotGiven + '^' + this.historical + '^' + this.historicalSource + '^' + this.vfcElegibility + '^' + this.ddid +
                '^' + this.dnid + '^' + this.gpi + '^' + this.kdc + '^' + this.ndc + '^' + this.cvxCode + '^' + this.doseAmount + '^' + this.dosageUnitOfMeasure +
                '^' + this.route + '^' + this.routeCode + '^' + this.site + '^' + this.siteCode + '^' + this.manufacturer + '^' + this.manufacturerCode +
                '^' + this.lotNumber + '^' + this.expirationDate + '^' + this.visPublishedDate + '^' + this.administeredByName + '^' + this.administeredDate +
                '^' + this.administeredDateType + '^' + this.administeredComments + '^' + this.advReactionDateTime + '^' + this.advReactionDateTimeType +
                '^' + this.advReactionComments + '^' + this.advReactionCmtByName + '^' + this.signed + '^' + this.signedByName + '^' + this.signedDate +
                '^' + this.reasonRemoved + '^' + this.stopDate + '^' + this.reasonNotGivenMedical + '^' + this.reasonNotGivenMedicalDetail;
        };
        return immunizationsProperty;
    }

    var UserCallFunction = {
        "None": 0,
        "UserList": 1,
        "UserInfo": 2
    };

    var ObservationType = {
        "None": 'Undefined',
        "Signed": 'Signed',
        "DocumentUnsigned": 'Update'
    };

    if (Object.freeze) {
        LocationType = Object.freeze(UserCallFunction);
    }

    function User(value, callFunction) {
        var data = value === undefined ? [] : value.split('^'),
                    isNew = value === undefined ? true : false,
                    userProperty = {
                        toMelString: function () {
                            return value;
                        }
                    };
        if (callFunction === UserCallFunction.UserInfo) {
            userProperty.loginName = (data.length > 0) ? data[0] : '';
            userProperty.searchName = (data.length > 1) ? data[1] : '';
            userProperty.phoneNumber = (data.length > 2) ? data[2] : '';
            userProperty.homeLocation = (data.length > 3) ? data[3] : '';
            userProperty.group = (data.length > 4) ? data[4] : '';
            userProperty.jobTitle = (data.length > 5) ? data[5] : '';
            userProperty.specialty = (data.length > 6) ? data[6] : '';
            userProperty.roles = (data.length > 7) ? data[7].split(';') : [];
            userProperty.npi = (data.length > 8) ? data[8] : '';
            userProperty.prescriberId = (data.length > 9) ? data[9] : '';
            userProperty.deaId = (data.length > 10) ? data[10] : '';
            userProperty.stateLicenceId = (data.length > 11) ? data[11] : '';
            userProperty.memberLogin = (data.length > 12) ? data[12] : '';
            userProperty.data2000 = (data.length > 13) ? data[13] : '';
            userProperty.uniquePhysicianId = (data.length > 14) ? data[14] : '';
            userProperty.activationDate = (data.length > 15) ? data[15] : '';
            userProperty.expirationDate = (data.length > 16) ? data[16] : '';
            userProperty.currentLocation = (data.length > 17) ? data[17] : '';
            userProperty.firstName = (data.length > 18) ? data[18] : '';
            userProperty.middleName = (data.length > 19) ? data[19] : '';
            userProperty.lastName = (data.length > 20) ? data[20] : '';
        };

        if (callFunction === UserCallFunction.UserList) {
            userProperty.loginName = (data.length > 0) ? data[0] : '';
            userProperty.searchName = (data.length > 1) ? data[1] : '';
            userProperty.phoneNumber = (data.length > 2) ? data[2] : '';
            userProperty.homeLocation = (data.length > 3) ? data[3] : '';
            userProperty.group = (data.length > 4) ? data[4] : '';
            userProperty.jobTitle = (data.length > 5) ? data[5] : '';
            userProperty.specialty = (data.length > 6) ? data[6] : '';
            userProperty.npi = (data.length > 7) ? data[7] : '';
            userProperty.prescriberId = (data.length > 8) ? data[8] : '';
            userProperty.deaId = (data.length > 9) ? data[9] : '';
            userProperty.stateLicenceId = (data.length > 10) ? data[10] : '';
            userProperty.memberLogin = (data.length > 11) ? data[11] : '';
            userProperty.data2000 = (data.length > 12) ? data[12] : '';
            userProperty.uniquePhysicianId = (data.length > 13) ? data[13] : '';
            userProperty.activationDate = (data.length > 14) ? data[14] : '';
            userProperty.expirationDate = (data.length > 15) ? data[15] : '';
            userProperty.roles = [];
        };

        return userProperty;
    }

    function Location(id, name, type) {
        var locationProperty = {
            id: (id !== undefined) ? id : '',
            name: (name !== undefined) ? name : '',
            locationType: (type !== undefined) ? type : LocationType.None
        };
        return locationProperty;
    }

    var LocationType = {
        "None": 0,
        "Home": 1,
        "Current": 2
    };
    if (Object.freeze) {
        LocationType = Object.freeze(LocationType);
    }

    function CarePlan(plan) {
        var data = plan.split('^'),
            carePlanProperty = {
                carePlanId: (data.length >= 1) ? data[0] : '',
                goal: (data.length >= 2) ? data[1] : '',
                snomedCTCode: (data.length >= 3) ? data[2] : '',
                target: (data.length >= 4) ? data[3] : '',
                instructions: (data.length >= 5) ? data[4] : '',
                goalSetDate: (data.length >= 6) ? data[5] : '',
                goalMetDate: (data.length >= 7) ? data[6] : '',
                recordCreatedDateTime: (data.length >= 8) ? data[7] : '',
                sign: (data.length >= 9) ? data[8] : '',
                signedBy: (data.length >= 10) ? data[9] : '',
                signedDate: (data.length >= 11) ? data[10] : '',
                recordChangedDateTime: (data.length >= 12) ? data[11] : '',
                recordChangedBy: (data.length >= 13) ? data[12] : '',
                patientConditionDescription: (data.length >= 14) ? data[13] : '',
                patientConditionCode: (data.length >= 15) ? data[14] : ''
            };

        return carePlanProperty;
    }

    function AllergyData() {
        var allergyDataProperty = {
            name: {},
            onDate: {},
            //criticalIndicator: {}, // not always works
            classification: {},
            description: {},
            gpiCode: {},
            severity: {},
            offDate: {}
        };
        return allergyDataProperty;
    }

    function AllergyList(list) {
        var data = list.split('^'),
            allergyListProperty = new AllergyData();

        allergyListProperty.name = (data.length >= 1) ? data[0] : {};
        allergyListProperty.onDate = (data.length >= 2) ? data[1] : {};
        allergyListProperty.classification = (data.length >= 4) ? data[3] : {};
        allergyListProperty.description = (data.length >= 5) ? data[4] : {};
        allergyListProperty.gpiCode = (data.length >= 6) ? data[5] : {};
        allergyListProperty.severity = (data.length >= 7) ? data[6] : {};
        allergyListProperty.offDate = null;

        return allergyListProperty;
    }

    function AllergyListRemoved(list) {
        var data = list.split('^'),
            allergyListProperty = new AllergyData();

        allergyListProperty.name = (data.length >= 1) ? data[0] : {};
        allergyListProperty.onDate = (data.length >= 2) ? data[1] : {};

        allergyListProperty.offDate = (data.length >= 3) ? data[2] : {};
        allergyListProperty.classification = (data.length >= 5) ? data[4] : {};
        allergyListProperty.description = (data.length >= 6) ? data[5] : {};
        allergyListProperty.gpiCode = (data.length >= 7) ? data[6] : {};
        allergyListProperty.severity = (data.length >= 8) ? data[7] : {};

        return allergyListProperty;
    }

    function Observation(name, type, valueString) {

        var data = valueString === undefined ? [] : valueString.split('^'),
            isNew = valueString === undefined ? true : false,
            tag,

         objectProperty = {
             "name": (name !== undefined) ? name : '',
             "value": (data.length > 0) ? data[0] : '',
             "date": (data.length > 1) ? data[1] : '',
             "time": (data.length > 2) ? data[2] : '',
             "signingUser": (data.length > 3) ? data[3] : '',
             "enteringUser": (data.length > 4) ? data[4] : '',
             "flags": (data.length > 5) ? data[5] : '',
             "comment": (data.length > 6) ? data[6] : '',
             "state": (data.length > 7) ? data[7] : '',
             "locationOfCare": (data.length > 8) ? data[8] : '',
             "documentType": (data.length > 9) ? data[9] : '',
             "documentId": (data.length > 10) ? data[10] : '',
             "tag": (type === ObservationType.DocumentUnsigned) ? _mel.melFunc('{OBSTAGNOW("' + this.name + '")}') : '',
             "type": type,
             "unitOfMeasure": '',
             "save": function () {
                 var response;
                 response = _mel.saveObservation(this.name, this.value, this.date); //  _mel.melFunc('{OBSNOW("' + this.name + '","' + this.value + '")}');
                 if (this.tag !== undefined && this.tag !== '') { response = _mel.melFunc('{OBSTAGNOW("' + this.name + '","' + this.tag + '")}'); }
                 if (this.comment !== undefined && this.comment != '') { response = _mel.melFunc('{OBSMODIFIERNOW("' + this.name + '","' + this.comment + '")}'); }
             },
             "remove": function () { }
         };

        Object.defineProperty(objectProperty, 'unitOfMeasure', (function () {
            var melValue,
                propertyObject = {
                    get: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{OBSUNIT("' + objectProperty.name + '")}');
                        return melValue;
                    }
                };
            return propertyObject;
        }()));

        Object.defineProperty(objectProperty, 'tag', (function () {
            var melValue,
                propertyObject = {
                    get: function () {
                        melValue = (melValue !== undefined) ? melValue : (type === ObservationType.DocumentUnsigned) ? _mel.melFunc('{OBSTAGNOW("' + objectProperty.name + '")}') : '';
                        return melValue;
                    }
                };
            return propertyObject;
        }()));

        return objectProperty;
    }

    function Protocol(name) {
        var objectProperty = {
            "name": (name !== undefined) ? name : ''
        };

        return objectProperty;
    }

    function Measurement(isCurrent) {
        var objectProperty = {
            // Returns the patient’s weight
            weight: {},
            // Returns the patient’s height
            height: {}
        };

        objectProperty.weight = function () {
            return _mel.getObs(isCurrent, mdObject.obsTermsMap.weight);
        };
        objectProperty.height = function () {
            return _mel.getObs(isCurrent, mdObject.obsTermsMap.height);
        };

        return objectProperty;
    }

    function Insurance(insuranceType) {
        var objectProperty = {
            // Type of insurance P = Primary S = Secondary O = Other
            type: insuranceType,
            // The name of the patient’s insurance carrier.
            name: function (type) {
                var value;
                if (value === undefined) {
                    value = _mel.melFunc('{INS_NAME("' + type + '")}');
                }
                return value;
            }(insuranceType),
            // The name and address of the patient’s insurance carrier.
            address: function (type) {
                var value;
                if (value === undefined) {
                    value = _mel.melFunc('{INS_ADDR("' + type + '")}');
                }
                return value;
            }(insuranceType),
            // The patient’s insurance ID number for insurance carrier.
            insuranceId: function (type) {
                var value;
                if (value === undefined) {
                    value = _mel.melFunc('{INS_ID("' + type + '")}');
                }
                return value;
            }(insuranceType),
            // The name of the patient’s plan for insurance
            planName: function (type) {
                var value;
                if (value === undefined) {
                    value = _mel.melFunc('{INS_PLAN("' + type + '")}');
                }
                return value;
            }(insuranceType),
            // The group number of the patient’s insurance carrier.
            groupNumber: function (type) {
                var value;
                if (value === undefined) {
                    value = _mel.melFunc('{INS_GRP("' + type + '")}');
                }
                return value;
            }(insuranceType),
            // The phone number of the patient’s insurance company
            phone: function (type) {
                var value;
                if (value === undefined) {
                    value = _mel.melFunc('{INS_PHONE("' + type + '")}');
                }
                return value;
            }(insuranceType)
        };
        return objectProperty;
    }
    //-------------- /classes --------------


    var document = window.document,

        version = "1.0.11",

        productType = "GE",

        _mel = (_mel !== undefined) ? _mel : (_melOpener !== undefined) ? _melOpener : new EmrMel(),

        _app = (_app !== undefined) ? _app : (_appOpener !== undefined) ? _appOpener : new EmrApp(),

        _observations = {},

        _carePlans = null;

    mdObject.version = version;

    mdObject.obsTermsMap = {
        // patient’s weight
        weight: "Weight",
        // patient’s Height 
        height: "Height"
    };

    mdObject.clinicalDocument = {};

    // The variables allows to save any JSON object with the clinicalDocument.
    // Usage: $mdObject.clinicalDocument.variables = {"alex":1}; - create object with variable alex and assigned value 1.
    //        $mdObject.clinicalDocument.variables["alex"]=4;  -changes value of alex to 4
    //        $mdObject.clinicalDocument.variables.save(); - saves the object with the document
    Object.defineProperty(mdObject.clinicalDocument, 'variables', (function () {
        var save = function () { _mel.melFunc('{DOCUMENT.mdObject_variables = "' + JSON.stringify(rawValue).replace(/"/g, '\\"') + '"}'); };
        var melValue,
            rawValue = new DocumentVariable({}, save),
            propertyObject = {
                get: function () {
                    if (melValue === undefined) {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.mdObject_variables}');
                        melValue = (melValue !== '') ? melValue : JSON.stringify(rawValue);
                        try {
                            rawValue = new DocumentVariable(JSON.parse(melValue), save);
                        }
                        catch (e) {
                            rawValue = {};
                        }
                    }
                    return rawValue;
                },
                set: function (val) {
                    for (var key in val) {
                        rawValue[key] = val[key];
                    }

                    _mel.melFunc('{DOCUMENT.mdObject_variables = "' + JSON.stringify(rawValue).replace(/"/g, '\\"') + '"}');
                }
            };
        return propertyObject;
    }()));

    Object.defineProperty(mdObject.clinicalDocument, 'did', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{find("DOCUMENT","DID")}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    Object.defineProperty(mdObject.clinicalDocument, 'xid', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.XID}').split('.')[0];
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // The unique document identifier for a document within a patient chart. You can see the Doc ID on each 
    // document and on a chart update. Each document in the patient’s chart has a Doc ID.
    Object.defineProperty(mdObject.clinicalDocument, 'documentId', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.VISDOCID}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Status of the current document. TODO: Convert to enum
    // Code for document status:
    //        A = Active
    //        H = Hold
    //        S = Signed
    Object.defineProperty(mdObject.clinicalDocument, 'status', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.STATUS}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // The location of care of the document for the current chart update.
    mdObject.clinicalDocument.location =
        (function () {
            var locationPropertyArray = new Array(),
                melValue = _mel.melFunc('{DOCUMENT.LOCOFCARENAME}'),
                locationProperty = new Location(melValue, melValue, LocationType.Current);

            locationPropertyArray.push(locationProperty)
            locationPropertyArray.findByType =
                (function (value) {
                    var i;
                    if (typeof (value) === "number") {
                        for (i = 0; i < this.length; i++) {
                            if (this[i].locationType === value) {
                                return this[i];
                            }
                        }
                    };
                    return undefined;

                });
            locationPropertyArray.tag = function () {
                return 'DOCUMENT.LOCOFCARENAME';
            }();

            return locationPropertyArray;
        }());

    Object.defineProperty(mdObject.clinicalDocument, 'dateOfUpdate', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.CLINICALDATE}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    Object.defineProperty(mdObject.clinicalDocument, 'provider', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.PROVIDER}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    Object.defineProperty(mdObject.clinicalDocument, 'userLoginName', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{DOCUMENT.USERLOGINNAME}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    var getCurrentUser = function () {
        return _mel.melFunc('{GETUSERINFO("' + _mel.melFunc('{USER.LOGINNAME}') + '")}')
        + '^' + _mel.melFunc('{USER.CURLOCATIONNAME}')
        + '^' + _mel.melFunc('{USER.FIRSTNAME}')
        + '^' + _mel.melFunc('{USER.MIDDLENAME}')
        + '^' + _mel.melFunc('{USER.LASTNAME}');
    }

    /*** Users Properties ***/
    mdObject.users.getUser = function (value) {
        if (value === undefined) {
            var melValueCurrent = (melValueCurrent !== undefined) ? melValueCurrent : new User(getCurrentUser(), UserCallFunction.UserInfo);
            return melValueCurrent;
        }
        else {
            var melValue = (melValue !== undefined) ? melValue : new User(_mel.melFunc('{GETUSERINFO("' + value + '")}'), UserCallFunction.UserInfo);
            return melValue;
        }
    };

    mdObject.users.getUsers = function (locations, roles) {
        var data = _mel.melFunc('{GET_USER_LIST(USER.CURLOCATIONABBREVNAME, "","delimited", true)}'),
        dataArray = new StringInternal(data).toList(),
        index;

        /*jslint plusplus: true */
        for (index = 0; index < dataArray.length; index++) {
            dataArray[index] = new User(dataArray[index], UserCallFunction.UserList);
        }

        dataArray.tag = function () {
            return 'GET_USER_LIST';
        }();

        dataArray.toMelString = function () {
            return data;
        };

        return dataArray;
    };


    // TODO: PATIENT.REGNOTE, REGGUARANTOR
    mdObject.patient = {
        // Returns the patient’s ID number
        patientId: '',
        // Returns the internal PID number for patient record
        pid: '',
        // Returns the patient’s medical record number.
        medicalRecordId: '',
        // Returns the patient’s ID from an external system, such as a billing or lab system
        externalId: '',
        // Returns the preferred patient ID number for printed materials.
        printId: '',
        // Returns the patient’s Social Security number.
        ssn: '',
        // Returns the patient’s first name.
        firstName: '',
        // Returns the patient’s last name.
        lastName: '',
        // Returns the patient’s middle name.
        middleName: '',
        // Returns the patient’s full name formatted as follows: title first middle last, suffix
        labelName: '',
        // Name Prefix
        namePrefix: '',
        // Name Suffix
        nameSuffix: '',
        // Represent patient address object
        address: {},
        // Patient’s sex.
        sex: '',
        // Patient’s race
        race: '',
        // Patient’s ethnicity
        ethnicity: '',
        // Returns the patient’s birth date/time
        dateOfBirth: {},
        // Returns the patient’s date of death
        dateOfDeath: {},
        // Returns the patient’s marital status (Single, Married, Divorced, Widowed, Separated, Other or Undetermined)
        maritalStatus: '',
        // Returns the patient’s preferred language
        language: '',
        phone: {},
        // Returns the patient’s e-mail address
        email: '',
        // Returns the patient’s contact by information
        contactBy: '',
        // Returns a list of the contacts for the current patient
        contacts: '',
        // Returns the patient’s employment status.
        employmentStatus: '',
        // Patient’s current status in the clinic
        clinicStatus: '',
        // Name of the primary care physician
        primaryCarePhysicianName: '',
        // referring provider
        referringProvider: {},

        // List all medications and refills
        medications: {},
        // Lists all problems 
        problems: {},
        // Lists all observations. 
        observations: {},
        // List of all orders
        orders: {},
        // Protocols tell you when a patient is due for a particular action, based on factors that include sex, age, current problems, and current medications. 
        // The protocols contains array of observations required for this patient, as indicated by protocols set up in this clinic.
        protocols: [],
        // List of all directives
        directives: {},
        // Lists appointments
        appointments: {},
        // List of patient insurances 
        insurances: {},
        // List of patient immunizations 
        immunizations: {},
        carePlans: {}
    };

    Object.defineProperty(mdObject.patient, 'protocols', (function () {
        var data,
            dataArray,
            index,
            propertyObject = {
                get: function () {
                    data = (data !== undefined) ? data : _mel.melFunc('{LISTPROTOCOLSHORT("list")}');
                    if (dataArray === undefined) {

                        dataArray = new StringInternal(data).toList('\r\n');

                        /*jslint plusplus: true */
                        for (index = 0; index < dataArray.length; index++) {
                            dataArray[index] = new Protocol(dataArray[index]);
                        };

                        dataArray.tag = function () {
                            return 'LISTPROTOCOLSHORT("list")';
                        }();

                        dataArray.toMelString = function () {
                            return data;
                        };
                    }
                    return dataArray;
                }
            };
        return propertyObject;
    }()));

    mdObject.patient.observations = function (name) {
        var data;
        if (_observations[name] === undefined) {
            data = _mel.melFunc('{LIST_OBS("' + name + '","Update","Delimited","value")}');

            var dataArray = new StringInternal(data).toList();
            for (var i = 0; i < dataArray.length; i++) {
                dataArray[i] = new Observation(name, ObservationType.DocumentUnsigned, dataArray[i]);
            }
            _observations[name] = dataArray;

            data = _mel.melFunc('{LIST_OBS("' + name + '","Signed","Delimited","value")}');

            var dataArrayU = new StringInternal(data).toList();
            for (var i = 0; i < dataArrayU.length; i++) {
                _observations[name].push(new Observation(name, ObservationType.Signed, dataArrayU[i]));
            }
        }

        _observations[name].tag = function () {
            return 'LIST_OBS.' + name;
        }();

        return _observations[name];
    };

    Object.defineProperty(mdObject.patient, 'patientId', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PATIENTID}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    Object.defineProperty(mdObject.patient, 'pid', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{find("patient", "PID")}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s medical record number.
    Object.defineProperty(mdObject.patient, 'medicalRecordId', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.MEDRECNO}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s ID from an external system, such as a billing or lab system
    Object.defineProperty(mdObject.patient, 'externalId', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.EXTERNALID}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the preferred patient ID number for printed materials.
    Object.defineProperty(mdObject.patient, 'printId', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PRINTID}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s Social Security number.
    Object.defineProperty(mdObject.patient, 'ssn', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.SOCSECNO}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s first name.
    Object.defineProperty(mdObject.patient, 'firstName', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.FIRSTNAME}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s last name.
    Object.defineProperty(mdObject.patient, 'lastName', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.LASTNAME}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s middle name.
    Object.defineProperty(mdObject.patient, 'middleName', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.MIDDLENAME}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s full name formatted as follows: title first middle last, suffix
    Object.defineProperty(mdObject.patient, 'labelName', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.LABELNAME}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Name Prefix
    Object.defineProperty(mdObject.patient, 'namePrefix', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.TITLE}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Name Suffix
    Object.defineProperty(mdObject.patient, 'nameSuffix', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ENTITLEMENTS}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Represent patient address object
    mdObject.patient.address =
        (function () {
            var addressProperty = {};

            // Returns the first line of the patient’s address
            Object.defineProperty(addressProperty, 'address1', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ADDRESS1}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the second line of the patient’s address
            Object.defineProperty(addressProperty, 'address2', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ADDRESS2}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s city of residence
            Object.defineProperty(addressProperty, 'city', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.CITY}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s state or province
            Object.defineProperty(addressProperty, 'state', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.STATE}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s ZIP/Postal code
            Object.defineProperty(addressProperty, 'postCode', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ZIP}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s country of residence
            Object.defineProperty(addressProperty, 'country', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.COUNTRY}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            return addressProperty;
        }());

    // Patient’s sex.
    Object.defineProperty(mdObject.patient, 'sex', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.SEX}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Patient’s race
    Object.defineProperty(mdObject.patient, 'race', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.RACE}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Patient’s ethnicity
    Object.defineProperty(mdObject.patient, 'ethnicity', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ETHNICITY}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s birth date/time
    Object.defineProperty(mdObject.patient, 'dateOfBirth', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.DATEOFBIRTH}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s date of death
    Object.defineProperty(mdObject.patient, 'dateOfDeath', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.DATEOFDEATH}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s marital status (Single, Married, Divorced, Widowed, Separated, Other or Undetermined)
    Object.defineProperty(mdObject.patient, 'maritalStatus', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.MARITALSTATUS}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s preferred language
    Object.defineProperty(mdObject.patient, 'language', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PREFLANG}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    mdObject.patient.phone =
        (function () {
            var addressProperty = {};

            Object.defineProperty(addressProperty, 'home', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ALTPHONE}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s business/work telephone number
            Object.defineProperty(addressProperty, 'business', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.WORKPHONE}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s cell phone number
            Object.defineProperty(addressProperty, 'mobile', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.CELLPHONE}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            // Returns the patient’s fax number
            Object.defineProperty(addressProperty, 'fax', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.FAXPHONE}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            return addressProperty;
        }());

    // Returns the patient’s e-mail address
    Object.defineProperty(mdObject.patient, 'email', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.EMAIL}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s contact by information
    Object.defineProperty(mdObject.patient, 'contactBy', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.CONTACTBY}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Returns a list of the contacts for the current patient
    Object.defineProperty(mdObject.patient, 'contacts', (function () {
        var data,
            dataArray,
             index,
            propertyObject = {
                get: function () {
                    data = (data !== undefined) ? data : _mel.melFunc('{PATIENT.CONTACTS}');
                    if (dataArray === undefined) {

                        dataArray = new StringInternal(data).toList();

                        /*jslint plusplus: true */
                        for (index = 0; index < dataArray.length; index++) {
                            dataArray[index] = new PatientContact(dataArray[index]);
                        }

                        dataArray.tag = function () {
                            return 'PATIENT.CONTACTS';
                        }();

                        dataArray.toMelString = function () {
                            return data;
                        };
                    }
                    return dataArray;
                }
            };
        return propertyObject;
    }()));

    // Returns the patient’s employment status.
    Object.defineProperty(mdObject.patient, 'employmentStatus', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.EMPLSTATUS}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Patient’s current status in the clinic
    Object.defineProperty(mdObject.patient, 'clinicStatus', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PSTATUS}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // Name of the primary care physician
    Object.defineProperty(mdObject.patient, 'primaryCarePhysicianName', (function () {
        var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PCP}');
                    return melValue;
                }
            };
        return propertyObject;
    }()));

    // referring provider
    mdObject.patient.referringProvider =
        (function () {
            var providerProperty = {};

            Object.defineProperty(providerProperty, 'referringProviderId', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDID}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            Object.defineProperty(providerProperty, 'firstName', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDFIRSTNAME}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            Object.defineProperty(providerProperty, 'lastName', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDLASTNAME}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            Object.defineProperty(providerProperty, 'email', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDEMAILADDRESS}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            providerProperty.phone =
                (function () {
                    var phoneProperty = {};

                    // Office phone number of the referring provider
                    Object.defineProperty(phoneProperty, 'office', (function () {
                        var melValue,
                            propertyObject = {
                                get: function () {
                                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDOFFICEPHONE}');
                                    return melValue;
                                }
                            };
                        return propertyObject;
                    }()));

                    // Alternative phone number of the referring provider
                    Object.defineProperty(phoneProperty, 'alternative', (function () {
                        var melValue,
                            propertyObject = {
                                get: function () {
                                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDALTPHONE}');
                                    return melValue;
                                }
                            };
                        return propertyObject;
                    }()));

                    // Fax number of the referring physician
                    Object.defineProperty(phoneProperty, 'fax', (function () {
                        var melValue,
                            propertyObject = {
                                get: function () {
                                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDFAXPHONE}');
                                    return melValue;
                                }
                            };
                        return propertyObject;
                    }()));

                    // Pager number of the referring provider
                    Object.defineProperty(phoneProperty, 'pager', (function () {
                        var melValue,
                            propertyObject = {
                                get: function () {
                                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDPAGERPHONE}');
                                    return melValue;
                                }
                            };
                        return propertyObject;
                    }()));

                    // Cell phone number of the referring provider
                    Object.defineProperty(phoneProperty, 'mobile', (function () {
                        var melValue,
                            propertyObject = {
                                get: function () {
                                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDCELLPHONE}');
                                    return melValue;
                                }
                            };
                        return propertyObject;
                    }()));

                    return phoneProperty;
                }());

            // Address of the referring physician
            Object.defineProperty(providerProperty, 'fullAddress', (function () {
                var melValue,
                    propertyObject = {
                        get: function () {
                            melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDADDRESS}');
                            return melValue;
                        }
                    };
                return propertyObject;
            }()));

            return providerProperty;
        }());

    Object.defineProperty(mdObject.patient, 'location', (function () {
        var melValue,
            melId,
            locationPropertyArray,
            locationProperty,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.HOMELOCATIONNAME}');
                    melId = (melId !== undefined) ? melId : _mel.melFunc('{PATIENT.HOMELOCATIONABBREVNAME}');
                    locationProperty = (locationProperty !== undefined) ? locationProperty : new Location(melId, melValue, LocationType.Home);
                    if (locationPropertyArray === undefined) {
                        locationPropertyArray = new Array();
                        locationPropertyArray.push(locationProperty);

                        locationPropertyArray.findByType =
                            (function (value) {
                                var i;
                                if (typeof (value) === "number") {
                                    for (i = 0; i < this.length; i++) {
                                        if (this[i].locationType === value) {
                                            return this[i];
                                        }
                                    }
                                };
                                return undefined;

                            });
                    }

                    return locationPropertyArray;
                }
            };
        return propertyObject;
    }()));

    mdObject.patient.measurements =
        (function () {
            var measurementProperty = {
                current: {},
                previous: {}
            };

            measurementProperty.current = (function () {
                return new Measurement(true);
            }());

            measurementProperty.previous = (function () {
                return new Measurement(false);
            }());

            return measurementProperty;
        }());

    mdObject.patient.carePlans = (function () {
        var data, dataArray, index;

        if (_carePlans === null) {
            data = _mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
            dataArray = new StringInternal(data).toList();

            /*jslint plusplus: true */
            for (index = 0; index < dataArray.length; index++) {
                dataArray[index] = new CarePlan(dataArray[index]);
            }
            _carePlans = dataArray;
        }

        _carePlans.tag = function () {
            return 'MEL_LIST_CARE_PLAN';
        }();
        _carePlans.toMelString = function () {
            return data;
        };

        return _carePlans;
    }());

    // Allergy list
    mdObject.patient.allergies = function () {
        var allergiesProperty = {
            added: {},
            removed: {},
            current: {}
        };

        allergiesProperty.added = function () {
            var dataArray = new StringInternal(_mel.melFunc('{ALL_NEW("delimited")}')).toList();
            for (var i = 0; i < dataArray.length; i++) {
                dataArray[i] = new AllergyList(dataArray[i]);
            }
            return dataArray;
        };

        allergiesProperty.removed = function () {
            var dataArray = new StringInternal(_mel.melFunc('{ALL_REMOVED("delimited")}')).toList();
            for (var i = 0; i < dataArray.length; i++) {
                dataArray[i] = new AllergyListRemoved(dataArray[i]);
            }
            return dataArray;
        };

        allergiesProperty.current = function () {
            var dataArray = new StringInternal(_mel.melFunc('{ALL_PRIOR("delimited")}')).toList();
            for (var i = 0; i < dataArray.length; i++) {
                dataArray[i] = new AllergyList(dataArray[i]);
            }
            return dataArray;
        };
        return allergiesProperty;
    }();

    mdObject.patient.insurances = (function () {
        var insArray;
        if (insArray === undefined) {
            insArray = new Array();
            insArray.push(new Insurance('P'));
            insArray.push(new Insurance('S'));
            insArray.push(new Insurance('T'));

        }
        return insArray;

    }());

    // List all immunizations
    Object.defineProperty(mdObject.patient, 'immunizations', (function () {
        var data,
            dataArray,
             index,
             propertyObject = {
                 get: function () {
                     data = (data !== undefined) ? data : _mel.melFunc('{IMMUN_GETLIST()}');
                     if (dataArray === undefined) {

                         dataArray = new StringInternal(data).toList();

                         /*jslint plusplus: true */
                         for (index = 0; index < dataArray.length; index++) {
                             dataArray[index] = new Immunization(dataArray[index]);
                         }

                         dataArray.tag = function () {
                             return 'IMMUN_GETLIST';
                         }();

                         dataArray.toMelString = function () {
                             return data;
                         };
                     }
                     return dataArray;
                 }
             };
        return propertyObject;
    }()));

    mdObject.emr = new function () {
        var emrProperty = {};

        emrProperty.enterpriseId = function () {
            return _app.enterpriseId();
        };

        emrProperty.databaseVersion = function () {
            return _app.databaseVersion();
        };

        Object.defineProperty(emrProperty, 'version', (function () {
            var melValue,
            propertyObject = {
                get: function () {
                    melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{VER_EMR()}');
                    return melValue;
                }
            };
            return propertyObject;
        }()));

        emrProperty.window = function () {
            var property = {
                openDialog: function (url) {
                    ((new StringInternal(url.toLowerCase())).startsWith('//localserver')) ? _mel.showUrlDialog(url) : _app.showUrlDialog(url);
                },
                // Arguments :
                //  verb : 'GET'|'POST', defaults to "GET"
                //  target : an optional opening target (a name, or "_blank"), defaults to "_self"
                open: function (url, verb, target, features, data) {
                    var form = document.createElement("form");
                    form.action = url;
                    form.method = verb || 'GET';
                    form.target = target || "_self";
                    if (data) {
                        for (var key in data) {
                            var input = document.createElement("textarea");
                            input.name = key;
                            input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
                            form.appendChild(input);
                        }
                    }
                    form.style.display = 'none';
                    document.body.appendChild(form);
                    var w = window.open("about:blank", target, features);
                    form.submit();
                    return w;
                }
            };
            return property;
        }();

        //"{MEL_GET_CONTENT(\"STC.IMMSLINK.SETTINGS\",\"MATCH\")}"
        emrProperty.melContent = function (value) {
            var data = _mel.melFunc('{MEL_GET_CONTENT(\"' + value + '\",\"MATCH\")}');
            var dataArray = new StringInternal(data).toList();
            for (var i = 0; i < dataArray.length; i++) {
                dataArray[i] = new EmrContent(dataArray[i]);
            }

            dataArray.tag = function () {
                return 'MEL_GET_CONTENT';
            }();
            dataArray.toMelString = function () {
                return data;
            };
            return dataArray;
        };

        emrProperty.mel = function (value) { return _mel.melFunc(value); }
        emrProperty.EmrMel = function () { return _mel; }();
        emrProperty.EmrApp = function () { return _app; }();

        return emrProperty;
    };

    var
    // Map over mdObject in case of overwrite
        _mdObject = window.mdObject,

        // Map over the $mdObject in case of overwrite
        _$mdObject = window.$mdObject;

    mdObject.noConflict = function (deep) {
        if (window.$mdObject === mdObject) {
            window.$mdObject = _$mdObject;
        }

        if (deep && window.mdObject === mdObject) {
            window.mdObject = _mdObject;
        }

        return mdObject;
    };

    // Expose mdObject and $mdObject identifiers, even in
    // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (typeof noGlobal === typeof undefined) {
        window.mdObject = window.$mdObject = mdObject;
    }

    mdObject.Immunization = function (value) {
        return Immunization(value);
    };

    mdObject.Observation = function (name) {
        return Observation(name);
    };

    mdObject.User = function (value) {
        return User(value);
    };

    mdObject.LocationType = LocationType;

    mdObject.EmrContent = function (value) {
        return EmrContent(value);
    };

    return mdObject;
}));