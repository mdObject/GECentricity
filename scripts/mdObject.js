/*!
 * ==============================================================================
 * mdObject JavaScript Library v0.0.1
 * http://mdObject.com/
 *
 * Copyright (c) 2013, 2014 mdObject, Inc. and other contributors
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

    var mdObject = {};

    function getActiveXErrorMessage(objectName, e) {
        return "Unable to load ActiveX interface " + objectName + ((e !== undefined && e.hasOwnProperty("Message")) ? ".\nError message: " + e.Message :
            "");
    }

    function isActiveXSupported() {
        var activeXsupport = false;

        // Verify ActiveX support in this browser
        if (window.ActiveXObject) {
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
    function StringInternal(value) {
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

        return sb;
    }
    
    function EmrContent(value) {
        var data = value === undefined ? [] : value.split('^'),
            contentProperty = {
                "contentId": (data.length > 0) ? data[0] : '',
                "key": (data.length > 1) ? data[1] : '',
                "name": (data.length > 2) ? data[2] : '',
                "value": (data.length > 3) ? window.atob(data[3]) : '',
                "_unk0": (data.length > 4) ? data[4] : '',
                "_unk1": (data.length > 5) ? data[5] : '',
                "_unk2": (data.length > 6) ? data[6] : '',
                "_unk3": (data.length > 7) ? data[7] : '',
                "_unk4": (data.length > 8) ? data[8] : '',
                "_unk5": (data.length > 9) ? data[9] : ''
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

    function CarePlan(plan) {
        var data = plan.split('^'),
            carePlanProperty = {
                carePlanId: (data.length >= 1) ? data[0] : {},
                goal: (data.length >= 2) ? data[1] : {},
                snomedCTCode: (data.length >= 3) ? data[2] : {},
                target: (data.length >= 4) ? data[3] : {},
                instructions: (data.length >= 5) ? data[4] : {},
                goalSetDate: (data.length >= 6) ? data[5] : {},
                goalMetDate: (data.length >= 7) ? data[6] : {},
                recordCreatedDateTime: (data.length >= 8) ? data[7] : {},
                sign: (data.length >= 9) ? data[8] : {},
                signedBy: (data.length >= 10) ? data[9] : {},
                signedDate: (data.length >= 11) ? data[10] : {},
                recordChangedDateTime: (data.length >= 12) ? data[11] : {},
                recordChangedBy: (data.length >= 13) ? data[12] : {},
                patientConditionDescription: (data.length >= 14) ? data[13] : {},
                patientConditionCode: (data.length >= 15) ? data[14] : {}
            };

        return carePlanProperty;
    }

    function AllertyData() {
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
            allergyListProperty = new AllertyData();

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
            allergyListProperty = new AllertyData();

        allergyListProperty.name = (data.length >= 1) ? data[0] : {};
        allergyListProperty.onDate = (data.length >= 2) ? data[1] : {};

        allergyListProperty.offDate = (data.length >= 3) ? data[2] : {};
        allergyListProperty.classification = (data.length >= 5) ? data[4] : {};
        allergyListProperty.description = (data.length >= 6) ? data[5] : {};
        allergyListProperty.gpiCode = (data.length >= 7) ? data[6] : {};
        allergyListProperty.severity = (data.length >= 8) ? data[7] : {};

        return allergyListProperty;
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
    //-------------- /classes --------------


    var document = window.document,

        version = "0.0.2",

        productType = "GE",

        _mel = new EmrMel(),

        _app = new EmrApp(),

        _immunizations = null,

        _carePlans = null;

    mdObject.obsTermsMap = {
        // patient’s weight
        weight: "Weight",
        // patient’s Height 
        height: "Height"
    };

    mdObject.patient = {
        // List all medications and refills
        medications: {},
        // Lists all problems 
        problems: {},
        // Lists all observations. 
        observations: {},
        // List of all orders
        orders: {},
        // List of observations required for this patient, as indicated by protocols set up in this clinic comment
        protocols: {},
        // List of all directives
        directives: {},
        // Lists appointments
        appointments: {},
        // List of patient insurances 
        insurances: {}
    };

    //"Returns the patient’s ID number"
    mdObject.patient.patientId =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PATIENTID}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.PATIENTID';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s medical record number.
    mdObject.patient.medicalRecordId =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.MEDRECNO}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.MEDRECNO';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s ID from an external system, such as a billing or lab system
    mdObject.patient.externalId =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.EXTERNALID}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.EXTERNALID';
                    }
                };
            return propertyObject;
        }());

    // Returns the preferred patient ID number for printed materials.
    mdObject.patient.printId =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PRINTID}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.PRINTID';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s Social Security number.
    mdObject.patient.ssn =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.SOCSECNO}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.SOCSECNO';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s first name.
    mdObject.patient.firstName =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.FIRSTNAME}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.FIRSTNAME';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s last name.
    mdObject.patient.lastName =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.LASTNAME}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.LASTNAME';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s middle name.
    mdObject.patient.middleName =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.MIDDLENAME}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.MIDDLENAME';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s full name formatted as follows: title first middle last, suffix
    mdObject.patient.labelName =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.LABELNAME}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.LABELNAME';
                    }
                };
            return propertyObject;
        }());

    // Name Prefix
    mdObject.patient.namePrefix =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.TITLE}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.TITLE';
                    }
                };
            return propertyObject;
        }());

    // Name Suffix
    mdObject.patient.nameSuffix =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ENTITLEMENTS}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.ENTITLEMENTS';
                    }
                };
            return propertyObject;
        }());

    // Represent patient address object
    mdObject.patient.address =
        (function () {
            var addressProperty = {};

            // Returns the first line of the patient’s address
            addressProperty.address1 =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ADDRESS1}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.ADDRESS1';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the second line of the patient’s address
            addressProperty.address2 =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ADDRESS2}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.ADDRESS2';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s city of residence
            addressProperty.city =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.CITY}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.CITY';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s state or province
            addressProperty.state =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.STATE}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.STATE';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s ZIP/Postal code
            addressProperty.postCode =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ZIP}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.ZIP';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s country of residence
            addressProperty.country =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.COUNTRY}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.COUNTRY';
                            }
                        };
                    return propertyObject;
                }());

            return addressProperty;
        }());

    // Patient’s sex.
    mdObject.patient.sex =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.SEX}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.SEX';
                    }
                };
            return propertyObject;
        }());

    // Patient’s race
    mdObject.patient.race =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.RACE}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.RACE';
                    }
                };
            return propertyObject;
        }());

    // Patient’s ethnicity
    mdObject.patient.ethnicity =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ETHNICITY}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.ETHNICITY';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s birth date/time
    mdObject.patient.dateOfBirth =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.DATEOFBIRTH}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.DATEOFBIRTH';
                    },
                    toDate: function () {
                        return new Date(this.toString());
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s date of death
    mdObject.patient.dateOfDeath =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.DATEOFDEATH}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.DATEOFDEATH';
                    },
                    toDate: function () {
                        return new Date(this.toString());
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s marital status (Single, Married, Divorced, Widowed, Separated, Other or Undetermined)
    mdObject.patient.maritalStatus =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.MARITALSTATUS}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.MARITALSTATUS';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s preferred language
    mdObject.patient.language =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PREFLANG}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.PREFLANG';
                    }
                };
            return propertyObject;
        }());

    mdObject.patient.phone =
        (function () {
            var addressProperty = {};

            addressProperty.home =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.ALTPHONE}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.ALTPHONE';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s business/work telephone number
            addressProperty.business =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.WORKPHONE}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.WORKPHONE';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s cell phone number
            addressProperty.mobile =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.CELLPHONE}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.CELLPHONE';
                            }
                        };
                    return propertyObject;
                }());

            // Returns the patient’s fax number
            addressProperty.fax =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.FAXPHONE}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.FAXPHONE';
                            }
                        };
                    return propertyObject;
                }());

            return addressProperty;
        }());

    // Returns the patient’s e-mail address
    mdObject.patient.email =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.EMAIL}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.EMAIL';
                    }
                };
            return propertyObject;
        }());

    // Returns the patient’s contact by information
    mdObject.patient.contactBy =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.CONTACTBY}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.CONTACTBY';
                    }
                };
            return propertyObject;
        }());

    // Returns a list of the contacts for the current patient
    mdObject.patient.contacts =
        (function () {
            var data = _mel.melFunc('{PATIENT.CONTACTS}'),
                dataArray = new StringInternal(data).toList(),
                index;

            /*jslint plusplus: true */
            for (index = 0; index < dataArray.length; index++) {
                dataArray[index] = new PatientContact(dataArray[index]);
            }

            dataArray.tag = function () {
                return 'PATIENT.CONTACTS';
            };

            dataArray.toMelString = function () {
                return data;
            };


            return dataArray;
        }());

    // Returns the patient’s employment status.
    mdObject.patient.employmentStatus =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.EMPLSTATUS}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.EMPLSTATUS';
                    }
                };
            return propertyObject;
        }());

    // Patient’s current status in the clinic
    mdObject.patient.clinicStatus =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PSTATUS}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.PSTATUS';
                    }
                };
            return propertyObject;
        }());

    // Name of the primary care physician
    mdObject.patient.primaryCarePhysicianName =
        (function () {
            var melValue,
                propertyObject = {
                    toString: function () {
                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PCP}');
                        return melValue;
                    },
                    tag: function () {
                        return 'PATIENT.PCP';
                    }
                };
            return propertyObject;
        }());

    // referring provider
    mdObject.patient.referringProvider =
        (function () {
            var providerProperty = {};

            providerProperty.referringProviderId =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDID}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.REFMDID';
                            }
                        };
                    return propertyObject;
                }());

            providerProperty.firstName =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDFIRSTNAME}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.REFMDFIRSTNAME';
                            }
                        };
                    return propertyObject;
                }());

            providerProperty.lastName =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDLASTNAME}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.REFMDLASTNAME';
                            }
                        };
                    return propertyObject;
                }());

            providerProperty.email =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDEMAILADDRESS}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.REFMDEMAILADDRESS';
                            }
                        };
                    return propertyObject;
                }());

            providerProperty.phone =
                (function () {
                    var phoneProperty = {};

                    // Office phone number of the referring provider
                    phoneProperty.office =
                        (function () {
                            var melValue,
                                propertyObject = {
                                    toString: function () {
                                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDOFFICEPHONE}');
                                        return melValue;
                                    },
                                    tag: function () {
                                        return 'PATIENT.REFMDOFFICEPHONE';
                                    }
                                };
                            return propertyObject;
                        }());

                    // Alternative phone number of the referring provider
                    phoneProperty.alternative =
                        (function () {
                            var melValue,
                                propertyObject = {
                                    toString: function () {
                                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDALTPHONE}');
                                        return melValue;
                                    },
                                    tag: function () {
                                        return 'PATIENT.REFMDALTPHONE';
                                    }
                                };
                            return propertyObject;
                        }());

                    // Fax number of the referring physician
                    phoneProperty.fax =
                        (function () {
                            var melValue,
                                propertyObject = {
                                    toString: function () {
                                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDFAXPHONE}');
                                        return melValue;
                                    },
                                    tag: function () {
                                        return 'PATIENT.REFMDFAXPHONE';
                                    }
                                };
                            return propertyObject;
                        }());

                    // Pager number of the referring provider
                    phoneProperty.pager =
                        (function () {
                            var melValue,
                                propertyObject = {
                                    toString: function () {
                                        melValue = (melValue !== "undefined") ? melValue : _mel.melFunc('{PATIENT.REFMDPAGERPHONE}');
                                        return melValue;
                                    },
                                    tag: function () {
                                        return 'PATIENT.REFMDPAGERPHONE';
                                    }
                                };
                            return propertyObject;
                        }());

                    // Cell phone number of the referring provider
                    phoneProperty.mobile =
                        (function () {
                            var melValue,
                                propertyObject = {
                                    toString: function () {
                                        melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDCELLPHONE}');
                                        return melValue;
                                    },
                                    tag: function () {
                                        return 'PATIENT.REFMDCELLPHONE';
                                    }
                                };
                            return propertyObject;
                        }());

                    return phoneProperty;
                }());

            // Address of the referring physician
            providerProperty.fullAddress =
                (function () {
                    var melValue,
                        propertyObject = {
                            toString: function () {
                                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.REFMDADDRESS}');
                                return melValue;
                            },
                            tag: function () {
                                return 'PATIENT.REFMDADDRESS';
                            }
                        };
                    return propertyObject;
                }());

            return providerProperty;
        }());

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

    mdObject.patient.carePlans = function () {
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

        _carePlans.toMelString = function () {
            return data;
        };

        return _carePlans;
    };

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

    // List all immunizations
    mdObject.patient.immunizations =
        (function () {
            // pull immunization only one time
            var data;
            if (_immunizations === null) {
                data = _mel.melFunc('{IMMUN_GETLIST()}');

                var dataArray = new StringInternal(data).toList();
                for (var i = 0; i < dataArray.length; i++) {
                    dataArray[i] = new Immunization(dataArray[i]);
                }
                _immunizations = dataArray;
            }

            _immunizations.tag = function () {
                return 'IMMUN_GETLIST';
            };
            _immunizations.toMelString = function () {
                return data;
            };

            return _immunizations;
        }());

    mdObject.emr = new

    function () {
        var emrProperty = {};

        emrProperty.enterpriseId = function () {
            return _app.enterpriseId();
        };

        emrProperty.databaseVersion = function () {
            return _app.databaseVersion();
        };

        emrProperty.window = function () {
            var property = {
                open: function (url) {
                    (url.toLowerCase().startsWith('//localserver')) ? _mel.showUrlDialog(url) : _app.showUrlDialog(url);
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
            };
            dataArray.toMelString = function () {
                return data;
            };
            return dataArray;
        };
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

    return mdObject;
}));