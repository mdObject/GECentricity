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

/// <reference path="ObsTermsMap.js" /> 

// Vilidates that ActiveX controls as supported by browser
function isActiveXSupported() {
    var activeXsupport = false;

    // Verify ActiveX support in this browser
    if (window.ActiveXObject) {
        activeXsupport = true;
    }
    else {
        activeXsupport = false;
        alert("Your browser does not support ActiveX objects");
    }
    return activeXsupport;
}

// Message to user that ActiveX cannot create object
function getActiveXErrorMessage(objectName, e) {
    return "Unable to load ActiveX interface " + objectName + (("Message" in e) ? ".\nError message: " + e.Message : "");
}

// Implement MEL object interface 
function emrMel() {
    var activeXsupport = isActiveXSupported();
    var melObjectName = 'GE.CPO.EMR.80.MEL';
    var melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
    var noMelData = 'Data Access Error';
    var mel = null;

    if (activeXsupport && mel == null) {
        var error = false;
        var errorMessage = '';
        try {
            var mel = new ActiveXObject(melObjectName);
        }
        catch (e) {
            error = true;
            errorMessage = getActiveXErrorMessage(melObjectName, e);
        }
        // Try to activate simulator
        if (error) {
            try {
                var mel = new ActiveXObject(melObjectNameSimulator);
            }
            catch (e) {
                alert(errorMessage);
            };
        };
    };

    // Implements MEL eval function
    this.getData = function (data) { return (mel == null) ? noMelData : mel.eval(data); }

    this.getObs = function (isCurrent, data) { return (mel == null) ? noMelData : ((isCurrent == true) ? mel.OBSNOW(data, '', '') : mel.OBSPREV(data)); }

    this.showUrlDialog = function (url) { this.getData('{SHOW_HTML_FORM("' + url + '","test")}'); }

}

// Implement App object interface
function emrApp() {
    var activeXsupport = isActiveXSupported();
    var appObjectName = 'GE.CPO.EMR.90.Application';
    var appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
    var noAppData = 'Data Access Error';
    var app = null;

    if (activeXsupport && app == null) {
        var error = false;
        var errorMessage = '';
        try {
            var app = new ActiveXObject(appObjectName);
            app.SetPasscode(window.external.Passcode);
        }
        catch (e) {
            error = true;
            errorMessage = getActiveXErrorMessage(appObjectName, e);
        };
        // Try to activate simulator
        if (error) {
            try {
                var app = new ActiveXObject(appObjectNameSimulator);
            }
            catch (e) {
                alert(errorMessage);
            };
        };
    };

    this.enterpriseId = function () { return (app == null) ? noAppData : app.EnterpriseID; }
    this.databaseVersion = function () { return (app == null) ? noAppData : app.DatabaseVersion; }
    this.showUrlDialog = function (url) { return (app == null) ? noAppData : app.ShowURLDialog(url); }
}

// $mdObject primary object
var $mdObject = {
    // Version of the mdObject
    version: '0.0.1',
    // Implementation type
    type: 'GE',
    // Get current patient
    patient: {},
    emr: {},

    // Internal members 
    _mel: new emrMel(),
    _app: new emrApp()
};

// Implementation of the Patient object
$mdObject.patient = function () {
    // Get current patient
    var patientProperty = {
        // Returns the patient’s ID number
        patientId: {},
        // Returns the patient’s medical record number.
        medicalRecordId: {},
        // Returns the patient’s ID from an external system, such as a billing or lab system
        externalId: {},
        // Returns the preferred patient ID number for printed materials.
        printId: {},
        // Returns the patient’s Social Security number.
        ssn: {},
        // Returns the patient’s first name.
        firstName: {},
        // Returns the patient’s last name.
        lastName: {},
        // Returns the patient’s middle name.
        middleName: {},
        // Returns the patient’s full name formatted as follows: title first middle last, suffix
        labelName: {},
        // Name Prefix
        namePrefix: {},
        // Name Suffix
        nameSuffix: {},
        // Represent patient address object
        address: {},
        // Patient’s sex.
        sex: {},
        // Patient’s race
        race: {},
        // Patient’s ethnicity
        ethnicity: {},
        // Returns the patient’s birth date/time
        dateOfBirth: {},
        // Returns the patient’s date of death
        dateOfDeath: {},
        // Returns the patient’s marital status (Single, Married, Divorced, Widowed, Separated, Other or Undetermined)
        maritalStatus: {},
        // Returns the patient’s preferred language
        language: {},
        phone: {},
        // Returns the patient’s e-mail address
        email: {},
        // Returns the patient’s contact by information
        contactBy: {},
        // Returns a list of the contacts for the current patient
        contacts: {},
        // Returns the patient’s employment status.
        employmentStatus: {},
        // Patient’s current status in the clinic
        clinicStatus: {},
        // Name of the primary care physician
        primaryCarePhysicianName: {},
        // referring provider
        referringProvider: {},
        // List all medications and refills

        medications: {},
        // Lists all problems 
        problems: {},
        // Lists all observations. 
        observations: {},
        // Allergy list
        allergies: {},
        // List all immunizations
        immunizations: {},
        // List of all orders
        orders: {},

        carePlans: {},
        // List of observations required for this patient, as indicated by protocols set up in this clinic comment
        protocols: {},

        // List of all directives
        directives: {},
        // Lists appointments
        appointments: {},
        // List of patient insurances 
        insurances: {},

        measurement: {}
    };
    
    patientProperty.patientId = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.PATIENTID}'); },
            tag: function () { return 'PATIENT.PATIENTID'; }
        };
        return propertyObject;
    };
    
    patientProperty.medicalRecordId = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.MEDRECNO}'); },
            tag: function () { return 'PATIENT.MEDRECNO'; }
        };
        return propertyObject;
    };

    patientProperty.externalId = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.EXTERNALID}'); },
            tag: function () { return 'PATIENT.EXTERNALID'; }
        };
        return propertyObject;
    };

    patientProperty.printId = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.PRINTID}'); },
            tag: function () { return 'PATIENT.PRINTID'; }
        };
        return propertyObject;
    };

    patientProperty.ssn = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.SOCSECNO}'); },
            tag: function () { return 'PATIENT.SOCSECNO'; }
        };
        return propertyObject;
    };

    patientProperty.firstName = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.FIRSTNAME}'); },
            tag: function () { return 'PATIENT.FIRSTNAME'; }
        };
        return propertyObject;
    };

    patientProperty.lastName = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.LASTNAME}');},
            tag: function () { return 'PATIENT.LASTNAME'; }
        };
        return propertyObject;
    };

    patientProperty.middleName = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.MIDDLENAME}');},
            tag: function () { return 'PATIENT.MIDDLENAME'; }
        };
        return propertyObject;
    };

    patientProperty.labelName = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.LABELNAME}');},
            tag: function () { return 'PATIENT.LABELNAME'; }
        };
        return propertyObject;
    };

    patientProperty.namePrefix = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.TITLE}'); },
            tag: function () { return 'PATIENT.TITLE'; }
        };
        return propertyObject;
    };

    patientProperty.nameSuffix = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.ENTITLEMENTS}'); },
            tag: function () { return 'PATIENT.ENTITLEMENTS'; }
        };
        return propertyObject;
    };

    patientProperty.address = function () {
        var addressProperty = {
            // Returns the first line of the patient’s address
            address1: {},
            // Returns the second line of the patient’s address
            address2: {},
            // Returns the patient’s city of residence
            city: {},
            // Returns the patient’s state or province
            state: {},
            // Returns the patient’s ZIP/Postal code
            postCode: {},
            // Returns the patient’s country of residence
            country: {}
        };

        addressProperty.address1 = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.ADDRESS1}'); },
                tag: function () { return 'PATIENT.ADDRESS1'; }
            };
            return propertyObject;
        };

        addressProperty.address2 = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.ADDRESS2}'); },
                tag: function () { return 'PATIENT.ADDRESS2'; }
            };
            return propertyObject;
        };

        addressProperty.city = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.CITY}'); },
                tag: function () { return 'PATIENT.CITY'; }
            };
            return propertyObject;
        };

        addressProperty.state = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.STATE}'); },
                tag: function () { return 'PATIENT.STATE'; }
            };
            return propertyObject;
        };

        addressProperty.postCode = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.ZIP}'); },
                tag: function () { return 'PATIENT.ZIP'; }
            };
            return propertyObject;
        };

        addressProperty.country = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.COUNTRY}'); },
                tag: function () { return 'PATIENT.COUNTRY'; }
            };
            return propertyObject;
        };

        return addressProperty;
    }();

    patientProperty.sex = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.SEX}'); },
            tag: function () { return 'PATIENT.SEX'; }
        };
        return propertyObject;
    };

    patientProperty.race = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.RACE}'); },
            tag: function () { return 'PATIENT.RACE'; }
        };
        return propertyObject;
    };

    patientProperty.ethnicity = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.ETHNICITY}'); },
            tag: function () { return 'PATIENT.ETHNICITY'; }
        };
        return propertyObject;
    };

    patientProperty.dateOfBirth = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.DATEOFBIRTH}'); },
            tag: function () { return 'PATIENT.DATEOFBIRTH'; },
            toDate: function () { var dob = $mdObject._mel.getData('{PATIENT.DATEOFBIRTH}'); return new Date(dob); }
        };
        return propertyObject;
    };

    patientProperty.dateOfDeath = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.DATEOFDEATH}'); },
            tag: function () { return 'PATIENT.DATEOFDEATH'; },
            toDate: function () { var dod = $mdObject._mel.getData('{PATIENT.DATEOFDEATH}'); return new Date(dod); }
        };
        return propertyObject;
    };

    patientProperty.maritalStatus = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.MARITALSTATUS}'); },
            tag: function () { return 'PATIENT.MARITALSTATUS'; }
        };
        return propertyObject;
    };

    patientProperty.language = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.PREFLANG}'); },
            tag: function () { return 'PATIENT.PREFLANG'; }
        };
        return propertyObject;
    };

    patientProperty.phone = function () {
        var addressProperty = {
            home: {},
            // Returns the patient’s business/work telephone number
            business: {},
            // Returns the patient’s cell phone number
            mobile: {},
            // Returns the patient’s fax number
            fax: {}
        };

        addressProperty.home = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.ALTPHONE}'); },
                tag: function () { return 'PATIENT.ALTPHONE'; }
            };
            return propertyObject;
        };

        addressProperty.business = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.WORKPHONE}'); },
                tag: function () { return 'PATIENT.WORKPHONE'; }
            };
            return propertyObject;
        };

        addressProperty.mobile = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.CELLPHONE}'); },
                tag: function () { return 'PATIENT.CELLPHONE'; }
            };
            return propertyObject;
        };

        addressProperty.fax = function () {
            var propertyObject = {
                toString: function () { return $mdObject._mel.getData('{PATIENT.FAXPHONE}'); },
                tag: function () { return 'PATIENT.FAXPHONE'; }
            };
            return propertyObject;
        };

        return addressProperty;
    }();

    patientProperty.email = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.EMAIL}'); },
            tag: function () { return 'PATIENT.EMAIL'; }
        };
        return propertyObject;
    };

    patientProperty.contactBy = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.CONTACTBY}'); },
            tag: function () { return 'PATIENT.CONTACTBY'; }
        };
        return propertyObject;
    };

    patientProperty.contacts = function () {
        var contactProperty = {
            name: {},
            type: {},
            phone: {},
            phoneType: {},
            address: {}
        };

        var data = $mdObject._mel.getData('{PATIENT.CONTACTS}');

        var dataArray = data.split('|');
        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i].length == 0) {
                dataArray.splice(i, 1);
            }
        }
        return dataArray;
    };

    patientProperty.employmentStatus = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.EMPLSTATUS}'); },
            tag: function () { return 'PATIENT.EMPLSTATUS'; }
        };
        return propertyObject;
    };

    patientProperty.clinicStatus = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.PSTATUS}'); },
            tag: function () { return 'PATIENT.PSTATUS'; }
        };
        return propertyObject;
    };

    patientProperty.primaryCarePhysicianName = function () {
        var propertyObject = {
            toString: function () { return $mdObject._mel.getData('{PATIENT.PCP}'); },
            tag: function () { return 'PATIENT.PCP'; }
        };
        return propertyObject;
    };

    patientProperty.referringProvider = function () {
        var providerProperty = {
            referringProviderId: {},
            firstName: {},
            lastName: {},
            email: {},
            phone: {},
            // Address of the referring physician
            fullAddress: {}
        };

        providerProperty.referringProviderId = function () {
            return $mdObject._mel.getData('{PATIENT.REFMDID}');
        };

        providerProperty.firstName = function () {
            return $mdObject._mel.getData('{PATIENT.REFMDFIRSTNAME}');
        };

        providerProperty.lastName = function () {
            return $mdObject._mel.getData('{PATIENT.REFMDLASTNAME}');
        };

        providerProperty.email = function () {
            return $mdObject._mel.getData('{PATIENT.REFMDEMAILADDRESS}');
        };

        providerProperty.phone = function () {
            var phoneProperty = {
                // Office phone number of the referring provider
                office: {},
                // Alternative phone number of the referring provider
                alternative: {},
                // Fax number of the referring physician
                fax: {},
                // Pager number of the referring provider
                pager: {},
                // Cell phone number of the referring provider
                mobile: {}
            };

            phoneProperty.office = function () {
                return $mdObject._mel.getData('{PATIENT.REFMDOFFICEPHONE}');
            };

            phoneProperty.alternative = function () {
                return $mdObject._mel.getData('{PATIENT.REFMDALTPHONE}');
            };

            phoneProperty.fax = function () {
                return $mdObject._mel.getData('{PATIENT.REFMDFAXPHONE}');
            };

            phoneProperty.pager = function () {
                return $mdObject._mel.getData('{PATIENT.REFMDPAGERPHONE}');
            };

            phoneProperty.mobile = function () {
                return $mdObject._mel.getData('{PATIENT.REFMDCELLPHONE}');
            };

            return phoneProperty;
        }();

        providerProperty.fullAddress = function () {
            return $mdObject._mel.getData('{PATIENT.REFMDADDRESS}');
        };

        return providerProperty;
    }();

    patientProperty.measurement = function () {
        var measurementProperty = {

            current: {},
            previous: {}
        };

        measurementProperty.current = function () {
            return new measurement(true);
        }();

        measurementProperty.previous = function () {
            return new measurement(false);
        }();

        return measurementProperty;
    }();

    patientProperty.carePlans = function () {
        var carePlanProperty = {
            carePlanId: {},
            goal: {},
            snomedCTCode: {},
            target: {},
            instructions: {},
            goalSetDate: {},
            goalMetDate: {},
            recordCreatedDateTime: {},
            sign: {},
            signedBy: {},
            signedDate: {},
            recordChangedDateTime: {},
            recordChangedBy: {},
            patientConditionDescription: {},
            patientConditionCode: {}
        };

        var data = $mdObject._mel.getData('{MEL_LIST_CARE_PLAN("delim","all","all")}');

        var dataArray = data.toList();
        for (var i = 0; i < dataArray.length; i++) {
            {
                dataArray[i] = new carePlan(dataArray[i]);
            };
        }

        dataArray.toMelString = function () {
            return data;
        };
        
        return dataArray;

    };

    patientProperty.allergies = function () {
        var allergiesProperty = {
            added: {},
            removed: {},
            current: {}
        };

        allergiesProperty.added = function () {
            var dataArray = $mdObject._mel.getData('{ALL_NEW("delimited")}').toList();
            for (var i = 0; i < dataArray.length; i++) {
                {
                    dataArray[i] = new allergyList(dataArray[i]);
                };
            }
            return dataArray;
        };

        allergiesProperty.removed = function () {
            var dataArray = $mdObject._mel.getData('{ALL_REMOVED("delimited")}').toList();
            for (var i = 0; i < dataArray.length; i++) {
                {
                    dataArray[i] = new allergyListRemoved(dataArray[i]);
                };
            }
            return dataArray;
        };

        allergiesProperty.current = function () {
            var dataArray = $mdObject._mel.getData('{ALL_PRIOR("delimited")}').toList();
            for (var i = 0; i < dataArray.length; i++) {
                {
                    dataArray[i] = new allergyList(dataArray[i]);
                };
            }
            return dataArray;
        };
        return allergiesProperty;
    }();

    patientProperty.immunizations = function () {

        var data = $mdObject._mel.getData('{IMMUN_GETLIST()}');

        var dataArray = data.toList();
        for (var i = 0; i < dataArray.length; i++) {
            {
                dataArray[i] = new immunization(dataArray[i]);
            };
        }


        dataArray.push = function (immunization) {
            $mdObject._mel.getData('{IMMUN_ADD("' + immunization.toStringAdd() + '")}');
            //Do what you want here...
            return Array.prototype.push.apply(this, immunization);
        };

        dataArray.toMelString = function () {
            return data;
        };

        
        return dataArray;

    };

    //patientProperty.immunizations.prototype.get = function () {
    //    var result = $mdObject._mel.getData('{IMMUN_GETLIST()}');
        
    //    return result === "" ? [] : result.toImmunizations();
    //};

    return patientProperty;
}();


function immunization(value) {
    var data = value.split('^');

    var immunizationsProperty = {
        immunizationId:         (data.length > 0) ? data[0] : {},
        immunizationGroupId:    (data.length > 1) ? data[1] : {},
        vaccineGroupName:       (data.length > 2) ? data[2] : {},
        vaccineName:            (data.length > 3) ? data[3] : {},
        medicalDisplayName:     (data.length > 4) ? data[4] : {},
        series:                 (data.length > 5) ? data[5] : {},
        wasGiven:               (data.length > 6) ? data[6] : {},
        reasonNotGiven:         (data.length > 7) ? data[7] : {},
        historical:             (data.length > 8) ? data[8] : {},
        historicalSource:       (data.length > 9) ? data[9] : {},
        vfcElegibility:         (data.length > 10) ? data[10] : {},
        ddid:                   (data.length > 11) ? data[11] : {},
        dnid:                   (data.length > 12) ? data[12] : {},
        gpi:                    (data.length > 13) ? data[13] : {},
        kdc:                    (data.length > 14) ? data[14] : {},
        ndc:                    (data.length > 15) ? data[15] : {},
        cvxCode:                (data.length > 16) ? data[16] : {},
        doseAmount:             (data.length > 17) ? data[17] : {},
        dosageUnitOfMeasure:    (data.length > 18) ? data[18] : {},
        route:                  (data.length > 19) ? data[19] : {},
        routeCode:              (data.length > 20) ? data[20] : {},
        site:                   (data.length > 21) ? data[21] : {},
        siteCode:               (data.length > 22) ? data[22] : {},
        manufacturer:           (data.length > 23) ? data[23] : {},
        manufacturerCode:       (data.length > 24) ? data[24] : {},
        lotNumber:              (data.length > 25) ? data[25] : {},
        expirationDate:         (data.length > 26) ? data[26] : {},
        visPublishedDate:       (data.length > 27) ? data[27] : {},
        administeredByName:     (data.length > 28) ? data[28] : {},
        administeredDate:       (data.length > 29) ? data[29] : {},
            administeredDateType:(data.length > 30) ? data[30] : {},
        administeredComments: (data.length > 31) ? data[31] : {},
        advReactionDateTime: (data.length > 32) ? data[32] : {},
            advReactionDateTimeType: (data.length > 33) ? data[33] : {},
        advReactionComments:    (data.length > 34) ? data[34] : {},
        advReactionCmtByName:   (data.length > 35) ? data[35] : {},
        signed:                 (data.length > 36) ? data[36] : {},
        signedByName:           (data.length > 37) ? data[37] : {},
        signedDate:             (data.length > 38) ? data[38] : {},
        reasonRemoved:          (data.length > 39) ? data[39] : {},
        stopDate:               (data.length > 40) ? data[40] : {},
        reasonNotGivenMedical:  (data.length > 41) ? data[41] : {},
        reasonNotGivenMedicalDetail: (data.length > 42) ? data[42] : {},
        save: function () {
            if(immunizationId == null)
            {
                // add
            }
            else
            {
                // update
            }
        },
        toMelString: function () { return value; }
    };

    //immunizationsProperty.toStringAdd = function () {
    //    return vaccineGroupName + '^' +
    //        vaccineName + '^' +
    //        medicalDisplayName + '^' +
    //        series + '^' +
    //        wasGiven + '^' +
    //        reasonNotGiven + '^' +
    //        historical + '^' +
    //        historicalSource + '^' +
    //        vfcElegibility + '^' +
    //        ddid + '^' +
    //        dnid + '^' +
    //        gpi + '^' +
    //        kdc + '^' +
    //        ndc + '^' +
    //        cvxCode + '^' +
    //        administeredDose + '^' +
    //        administeredDoseUnits + '^' +
    //        route + '^' +
    //        routeCode + '^' +
    //        site + '^' +
    //        siteCode + '^' +
    //        manufacturer + '^' +
    //        manufacturerCode + '^' +
    //        lotNumber + '^' +
    //        expirationDate + '^' +
    //        visPublishedDate + '^' +
    //        administeredByName + '^' +
    //        administeredDate + '^' +
    //        administeredDateType + '^' +
    //        administeredComments + '^' +
    //        advReactionDateTime + '^' +
    //        advReactionDateTimeType + '^' +
    //        advReactionComments + '^' +
    //        advReactionCmtByName + '^' +
    //        signed + '^' +
    //        signedByName + '^' +
    //        signedDate + '^' +
    //        reasonRemoved + '^' +
    //        stopDate + '^' +
    //        reasonNotGivenMedical + '^' +
    //        reasonNotGivenMedicalDetail;
    //};

    

    return immunizationsProperty;
};

// Implementation of EMR object
$mdObject.emr = function () {
    var emrProperty = {};

    emrProperty.enterpriseId = function () {
        return $mdObject._app.enterpriseId();
    };

    emrProperty.databaseVersion = function () {
        return $mdObject._app.databaseVersion();
    };

    emrProperty.window = function () {
        var property = {
            open: function (url) { (url.toLowerCase().startsWith('//localserver')) ? $mdObject._mel.showUrlDialog(url) : $mdObject._app.showUrlDialog(url);}
        };
        return property;
    }();

    return emrProperty;
}();

function measurement(isCurrent) {
    var objectProperty = {
        // Returns the patient’s weight
        weight: {},
        // Returns the patient’s height
        height: {}
    };

    objectProperty.weight = function () { return $mdObject._mel.getObs(isCurrent, $mdObjectObsTermsMapping.weight); };
    objectProperty.height = function () { return $mdObject._mel.getObs(isCurrent, $mdObjectObsTermsMapping.height); };

    return objectProperty;
};

function carePlan(plan) {
    var data = plan.split('^');

    var carePlanProperty = {
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
};

function allertyData() {
    var allergyDataProperty = {
        name: {},
        onDate: {},
        //criticalIndicator: {}, // not always works
        classification:  {},
        description:  {},
        gpiCode:  {},
        severity:  {},
        offDate: {}
    };
    return allergyDataProperty;
}

function allergyList(list) {
    var data = list.split('^');
    var allergyListProperty = new allertyData();
    
    allergyListProperty.name = (data.length >= 1) ? data[0] : {};
    allergyListProperty.onDate = (data.length >= 2) ? data[1] : {};
    allergyListProperty.classification = (data.length >= 4) ? data[3] : {};
    allergyListProperty.description = (data.length >= 5) ? data[4] : {};
    allergyListProperty.gpiCode = (data.length >= 6) ? data[5] : {};
    allergyListProperty.severity = (data.length >= 7) ? data[6] : {};
    allergyListProperty.offDate = null;
    
    return allergyListProperty;
};

// In the alergy removal there is extra element (offDate) 
function allergyListRemoved(list) {
    var data = list.split('^');

    var allergyListProperty = new allertyData();

    allergyListProperty.name = (data.length >= 1) ? data[0] : {};
    allergyListProperty.onDate = (data.length >= 2) ? data[1] : {};

    allergyListProperty.offDate = (data.length >= 3) ? data[2] : {};
    allergyListProperty.classification = (data.length >= 5) ? data[4] : {};
    allergyListProperty.description = (data.length >= 6) ? data[5] : {};
    allergyListProperty.gpiCode = (data.length >= 7) ? data[6] : {};
    allergyListProperty.severity = (data.length >= 8) ? data[7] : {};

    return allergyListProperty;
};

/*!
 * ============================================================================== 
 * Helper functions and methods
 * ============================================================================ */
// Function parse string object to array of string 
if (String.prototype.toList == null) {
    String.prototype.toList = function (seporator) {
        if (seporator == null) {
            seporator = '|';
        }

        var dataArray = this.split(seporator);
        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i].length == 0) {
                dataArray.splice(i, 1);
            };
        }

        return dataArray;
    }
}

// String helper function to validate that string start with specified string
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}

// String helper function to validate that string end with specified string
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str){
        return this.slice(-str.length) == str;
    };
}

// Returns the age in the format as follows:
//  - Age displayed in hours for the first four days of life (0 - 96 hours)
//  - Age displayed in days for the fifth though twenty eighth days of life (5 - 28 days)
//  - Age displayed in weeks from the twenty ninth day through the first three completed months (4 - 12 weeks)
//  - Age displayed in months from the fourth month through the twenty fourth month (4 - 24 months)
//  - Age displayed in years, months from the third year through age 18 (3 years, 0 months through 17 years, 11 months)
//  - Age displayed in years for patients over 18
if (typeof Date.prototype.toAge != 'function') {
    Date.prototype.toAge = function () {
        var today = new Date();
        var years = today.getFullYear() - this.getFullYear();
        if (years >= 18) {
            return years + ' years';
        }
        else {
            var months = (today.getMonth() - this.getMonth());
            if (years * 12 + months >= 24) {
                return years + ' years, ' + months + ((months > 1) ? ' months' : ' month');
            }
            else {
                months += years * 12;
                var days = Math.floor((today - this) / (1000 * 60 * 60 * 24));
                var weeks = Math.floor(days / 7);
                if (weeks >= 12) {
                    return months + ' months'
                }
                else {
                    if (days >= 28) {
                        return weeks + ' weeks';
                    }
                    else {
                        var hours = Math.floor((today - this) / (1000 * 60 * 60));;
                        if (hours > 96) {
                            return days + ' days';
                        }
                        else {
                            return hours + ((hours >= 2) ? ' hours' : ' hour');
                        };
                    };
                };
            };
        };
    };
};