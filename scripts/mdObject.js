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

    var
    // Use the correct document accordingly with window argument (sandbox)
    document = window.document,

    version = "0.0.2",

    productType = "GE",

    // Define a local copy of mdObject
    mdObject = function (selector, context) {
        // The mdObject object is actually just the init constructor 'enhanced'
        // Need init if mdObject is called (just allow error to be thrown if not included)
        return new mdObject.fn(selector, context);
    },

    _mel = new emrMel(),

    _app = new emrApp();

    mdObject.fn = mdObject.prototype = {

        constructor: mdObject,
        patient: new
        function () {
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.PATIENTID}');
                },
                tag: function () {
                    return 'PATIENT.PATIENTID';
                }
            };
            return propertyObject;
        }
    };

    // Holds all patient immunizations
    var _immunizations = null;
    var _carePlans = null;

    mdObject.patient = {
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
        //firstName: {},
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

        measurements: {}
    };

    mdObject.patient.patientId = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                melValue = (melValue !== undefined) ? melValue : _mel.melFunc('{PATIENT.PATIENTID}');
                return melValue;
            },
            tag: function () {
                return 'PATIENT.PATIENTID';
            }
        };
        return propertyObject;
    };

    mdObject.patient.medicalRecordId = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.MEDRECNO}');
            },
            tag: function () {
                return 'PATIENT.MEDRECNO';
            }
        };
        return propertyObject;
    };

    mdObject.patient.externalId = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.EXTERNALID}');
            },
            tag: function () {
                return 'PATIENT.EXTERNALID';
            }
        };
        return propertyObject;
    };

    mdObject.patient.printId = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.PRINTID}');
            },
            tag: function () {
                return 'PATIENT.PRINTID';
            }
        };
        return propertyObject;
    };

    mdObject.patient.ssn = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.SOCSECNO}');
            },
            tag: function () {
                return 'PATIENT.SOCSECNO';
            }
        };
        return propertyObject;
    };

    // Returns the patient’s first name.
    mdObject.patient.firstName = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.FIRSTNAME}');
            },
            tag: function () {
                return 'PATIENT.FIRSTNAME';
            }
        };
        return propertyObject;
    };

    mdObject.patient.lastName = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.LASTNAME}');
            },
            tag: function () {
                return 'PATIENT.LASTNAME';
            }
        };
        return propertyObject;
    };

    mdObject.patient.middleName = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.MIDDLENAME}');
            },
            tag: function () {
                return 'PATIENT.MIDDLENAME';
            }
        };
        return propertyObject;
    };

    mdObject.patient.labelName = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.LABELNAME}');
            },
            tag: function () {
                return 'PATIENT.LABELNAME';
            }
        };
        return propertyObject;
    };

    mdObject.patient.namePrefix = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.TITLE}');
            },
            tag: function () {
                return 'PATIENT.TITLE';
            }
        };
        return propertyObject;
    };

    mdObject.patient.nameSuffix = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.ENTITLEMENTS}');
            },
            tag: function () {
                return 'PATIENT.ENTITLEMENTS';
            }
        };
        return propertyObject;
    };

    mdObject.patient.address = new
    function () {
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

        addressProperty.address1 = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.ADDRESS1}');
                },
                tag: function () {
                    return 'PATIENT.ADDRESS1';
                }
            };
            return propertyObject;
        };

        addressProperty.address2 = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.ADDRESS2}');
                },
                tag: function () {
                    return 'PATIENT.ADDRESS2';
                }
            };
            return propertyObject;
        };

        addressProperty.city = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.CITY}');
                },
                tag: function () {
                    return 'PATIENT.CITY';
                }
            };
            return propertyObject;
        };

        addressProperty.state = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.STATE}');
                },
                tag: function () {
                    return 'PATIENT.STATE';
                }
            };
            return propertyObject;
        };

        addressProperty.postCode = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.ZIP}');
                },
                tag: function () {
                    return 'PATIENT.ZIP';
                }
            };
            return propertyObject;
        };

        addressProperty.country = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.COUNTRY}');
                },
                tag: function () {
                    return 'PATIENT.COUNTRY';
                }
            };
            return propertyObject;
        };

        return addressProperty;
    };

    mdObject.patient.sex = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.SEX}');
            },
            tag: function () {
                return 'PATIENT.SEX';
            }
        };
        return propertyObject;
    };

    mdObject.patient.race = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.RACE}');
            },
            tag: function () {
                return 'PATIENT.RACE';
            }
        };
        return propertyObject;
    };

    mdObject.patient.ethnicity = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.ETHNICITY}');
            },
            tag: function () {
                return 'PATIENT.ETHNICITY';
            }
        };
        return propertyObject;
    };

    mdObject.patient.dateOfBirth = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.DATEOFBIRTH}');
            },
            tag: function () {
                return 'PATIENT.DATEOFBIRTH';
            },
            toDate: function () {
                var dob = (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.DATEOFBIRTH}');
                return new Date(dob);
            }
        };
        return propertyObject;
    };

    mdObject.patient.dateOfDeath = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.DATEOFDEATH}');
            },
            tag: function () {
                return 'PATIENT.DATEOFDEATH';
            },
            toDate: function () {
                var dod = _mel.melFunc('{PATIENT.DATEOFDEATH}');
                return new Date(dod);
            }
        };
        return propertyObject;
    };

    mdObject.patient.maritalStatus = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.MARITALSTATUS}');
            },
            tag: function () {
                return 'PATIENT.MARITALSTATUS';
            }
        };
        return propertyObject;
    };

    mdObject.patient.language = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.PREFLANG}');
            },
            tag: function () {
                return 'PATIENT.PREFLANG';
            }
        };
        return propertyObject;
    };

    mdObject.patient.phone = new
    function () {
        var addressProperty = {};

        addressProperty.home = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.ALTPHONE}');
                },
                tag: function () {
                    return 'PATIENT.ALTPHONE';
                }
            };
            return propertyObject;
        };

        // Returns the patient’s business/work telephone number
        addressProperty.business = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.WORKPHONE}');
                },
                tag: function () {
                    return 'PATIENT.WORKPHONE';
                }
            };
            return propertyObject;
        };

        // Returns the patient’s cell phone number
        addressProperty.mobile = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.CELLPHONE}');
                },
                tag: function () {
                    return 'PATIENT.CELLPHONE';
                }
            };
            return propertyObject;
        };

        // Returns the patient’s fax number
        addressProperty.fax = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.FAXPHONE}');
                },
                tag: function () {
                    return 'PATIENT.FAXPHONE';
                }
            };
            return propertyObject;
        };

        return addressProperty;
    }();

    mdObject.patient.email = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.EMAIL}');
            },
            tag: function () {
                return 'PATIENT.EMAIL';
            }
        };
        return propertyObject;
    };

    mdObject.patient.contactBy = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.CONTACTBY}');
            },
            tag: function () {
                return 'PATIENT.CONTACTBY';
            }
        };
        return propertyObject;
    };

    mdObject.patient.contacts = new
    function () {
        var contactProperty = {
            name: {},
            type: {},
            phone: {},
            phoneType: {},
            address: {}
        };

        var data = _mel.melFunc('{PATIENT.CONTACTS}');

        var dataArray = data.split('|');
        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i].length === 0) {
                dataArray.splice(i, 1);
            }
        }
        return dataArray;
    };

    mdObject.patient.employmentStatus = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.EMPLSTATUS}');
            },
            tag: function () {
                return 'PATIENT.EMPLSTATUS';
            }
        };
        return propertyObject;
    };

    mdObject.patient.clinicStatus = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.PSTATUS}');
            },
            tag: function () {
                return 'PATIENT.PSTATUS';
            }
        };
        return propertyObject;
    };

    mdObject.patient.primaryCarePhysicianName = new
    function () {
        var melValue;
        var propertyObject = {
            toString: function () {
                return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.PCP}');
            },
            tag: function () {
                return 'PATIENT.PCP';
            }
        };
        return propertyObject;
    };

    mdObject.patient.referringProvider = new
    function () {
        var providerProperty = {};

        providerProperty.referringProviderId = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDID}');
                },
                tag: function () {
                    return 'PATIENT.REFMDID';
                }
            };
            return propertyObject;
        };

        providerProperty.firstName = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDFIRSTNAME}');
                },
                tag: function () {
                    return 'PATIENT.REFMDFIRSTNAME';
                }
            };
            return propertyObject;
        };

        providerProperty.lastName = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDLASTNAME}');
                },
                tag: function () {
                    return 'PATIENT.REFMDLASTNAME';
                }
            };
            return propertyObject;
        };

        providerProperty.email = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDEMAILADDRESS}');
                },
                tag: function () {
                    return 'PATIENT.REFMDEMAILADDRESS';
                }
            };
            return propertyObject;
        };

        providerProperty.phone = new
        function () {
            var phoneProperty = {};

            // Office phone number of the referring provider
            phoneProperty.office = new
            function () {
                var melValue;
                var propertyObject = {
                    toString: function () {
                        return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDOFFICEPHONE}');
                    },
                    tag: function () {
                        return 'PATIENT.REFMDOFFICEPHONE';
                    }
                };
                return propertyObject;
            };

            // Alternative phone number of the referring provider
            phoneProperty.alternative = new
            function () {
                var melValue;
                var propertyObject = {
                    toString: function () {
                        return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDALTPHONE}');
                    },
                    tag: function () {
                        return 'PATIENT.REFMDALTPHONE';
                    }
                };
                return propertyObject;
            };

            // Fax number of the referring physician
            phoneProperty.fax = new
            function () {
                var melValue;
                var propertyObject = {
                    toString: function () {
                        return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDFAXPHONE}');
                    },
                    tag: function () {
                        return 'PATIENT.REFMDFAXPHONE';
                    }
                };
                return propertyObject;
            };

            // Pager number of the referring provider
            phoneProperty.pager = new
            function () {
                var melValue;
                var propertyObject = {
                    toString: function () {
                        return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDPAGERPHONE}');
                    },
                    tag: function () {
                        return 'PATIENT.REFMDPAGERPHONE';
                    }
                };
                return propertyObject;
            };

            // Cell phone number of the referring provider
            phoneProperty.mobile = new
            function () {
                var melValue;
                var propertyObject = {
                    toString: function () {
                        return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDCELLPHONE}');
                    },
                    tag: function () {
                        return 'PATIENT.REFMDCELLPHONE';
                    }
                };
                return propertyObject;
            };

            return phoneProperty;
        };

        // Address of the referring physician
        providerProperty.fullAddress = new
        function () {
            var melValue;
            var propertyObject = {
                toString: function () {
                    return (typeof melValue !== "undefined") ? melValue : melValue = _mel.melFunc('{PATIENT.REFMDADDRESS}');
                },
                tag: function () {
                    return 'PATIENT.REFMDADDRESS';
                }
            };
            return propertyObject;
        };

        return providerProperty;
    };

    mdObject.patient.measurements = new
    function () {
        var measurementProperty = {
            current: {},
            previous: {}
        };

        measurementProperty.current = function () {
            return new Measurement(true);
        }();

        measurementProperty.previous = function () {
            return new Measurement(false);
        }();

        return measurementProperty;
    };

    mdObject.patient.carePlans = function () {
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

        if (_carePlans === null) {
            var data = _mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
            var dataArray = new StringInternal(data).toList();
            for (var i = 0; i < dataArray.length; i++) {
                dataArray[i] = new CarePlan(dataArray[i]);
            }
            _carePlans = dataArray;
        }

        _carePlans.toMelString = function () {
            return data;
        };

        return _carePlans;

    };

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

    mdObject.patient.immunizations = new
    function () {
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
    };

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

    function emrMel() {
        var activeXsupport = isActiveXSupported();
        var melObjectName = 'GE.CPO.EMR.80.MEL';
        var melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
        var noMelData = 'Data Access Error';
        var mel = null;

        if (activeXsupport) {
            var error = false;
            var errorMessage = '';
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

    function emrApp() {
        var activeXsupport = isActiveXSupported();
        var appObjectName = 'GE.CPO.EMR.90.Application';
        var appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
        var noAppData = 'Data Access Error';
        var app = null;

        if (activeXsupport && app === null) {
            var error = false;
            var errorMessage = '';
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

    function getActiveXErrorMessage(objectName, e) {
        return "Unable to load ActiveX interface " + objectName + (("Message" in e) ? ".\nError message: " + e.Message : "");
    }

    /*!
         * ==============================================================================
         * Helper functions and methods
         * ============================================================================ */




    //var sb = {
    //    "String": new String,
    //    "Array": new Array
    //}

    function StringInternal(value) {
        var sb = new String(value);

        // Function parse string object to array of string 
        sb.toList = function (seporator) {
            if (seporator === undefined) {
                seporator = '|';
            }

            var dataArray = value.split(seporator);
            for (var i = 0; i < dataArray.length; i++) {
                if (dataArray[i].length === 0) {
                    dataArray.splice(i, 1);
                }
            }

            return dataArray;
        };

        // String helper function to validate that string start with specified string
        sb.startsWith = function (str) {
            return value.slice(0, str.length) == str;
        };

        // String helper function to validate that string end with specified string
        sb.endsWith = function (str) {
            return value.slice(-str.length) == str;
        };

        return sb;
    }

    mdObject.Immunization = function (value) {
        return Immunization(value);
    };
    //-------------- classes --------------


    function EmrContent(value) {
        var data = value === undefined ? [] : value.split('^');
        var contentProperty = {
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

    function Immunization(value) {
        var data = value === undefined ? [] : value.split('^');
        var isNew = value === undefined ? true : false;
        var immunizationsProperty = {
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
                    if ((isError = this.validateAdd()) === '') {
                        var response = _mel.melFunc('{IMMUN_ADD("' + this.toStringAdd() + '")}');
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
            return this.vaccineGroupName + '^' + this.vaccineName + '^' + this.medicalDisplayName + '^' + this.series + '^' + this.wasGiven + '^' + this.reasonNotGiven + '^' + this.historical + '^' + this.historicalSource + '^' + this.vfcElegibility + '^' + this.ddid + '^' + this.dnid + '^' + this.gpi + '^' + this.kdc + '^' + this.ndc + '^' + this.cvxCode + '^' + this.doseAmount + '^' + this.dosageUnitOfMeasure + '^' + this.route + '^' + this.routeCode + '^' + this.site + '^' + this.siteCode + '^' + this.manufacturer + '^' + this.manufacturerCode + '^' + this.lotNumber + '^' + this.expirationDate + '^' + this.visPublishedDate + '^' + this.administeredByName + '^' + this.administeredDate + '^' + this.administeredDateType + '^' + this.administeredComments + '^' + this.advReactionDateTime + '^' + this.advReactionDateTimeType + '^' + this.advReactionComments + '^' + this.advReactionCmtByName + '^' + this.signed + '^' + this.signedByName + '^' + this.signedDate + '^' + this.reasonRemoved + '^' + this.stopDate + '^' + this.reasonNotGivenMedical + '^' + this.reasonNotGivenMedicalDetail;
        };
        return immunizationsProperty;
    }

    function CarePlan(plan) {
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
        var data = list.split('^');
        var allergyListProperty = new AllertyData();

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
        var data = list.split('^');

        var allergyListProperty = new AllertyData();

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
            return _mel.getObs(isCurrent, $mdObjectObsTermsMapping.weight);
        };
        objectProperty.height = function () {
            return _mel.getObs(isCurrent, $mdObjectObsTermsMapping.height);
        };

        return objectProperty;
    }
    //-------------- /classes --------------
    return mdObject;
}));