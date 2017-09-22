//
import { StringInternal } from '../factories/factories';
import {
    Protocol, Observation, ObservationType, Address, Phone, Immunization, Measurements,
    PatientContact, ReferringProvider, Problem, Insurance, CarePlan, Location, Allergies, Emr, EmrMel
} from './classes';
import { IArrayAdditionalMethods } from '../interfaces/interfaces';
import { LocationType } from '../enums/enums';


// TODO: string = PATIENT.REGNOTE; REGGUARANTOR
export class Patient {

    private readonly observationType: ObservationType = new ObservationType();
    private _patientId: string;
    private _pid: string;
    private _medicalRecordId: string;
    private _externalId: string;
    private _printId: string;
    private _ssn: string;
    private _firstName: string;
    private _lastName: string;
    private _middleName: string;
    private _labelName: string;
    private _namePrefix: string;
    private _nameSuffix: string;
    private _sex: string;
    private _race: string;
    private _ethnicity: string;
    private _dateOfBirth: string;
    private _dateOfDeath: string;
    private _maritalStatus: string;
    private _language: string;
    private _email: string;
    private _contactBy: string;
    private _contacts: string;
    private _contactsArray: IArrayAdditionalMethods<PatientContact> = [];
    private _employmentStatus: string;
    private _clinicStatus: string;
    private _primaryCarePhysicianName: string;
    private _problems: string;
    private _problemsArray: IArrayAdditionalMethods<Problem> = [];
    private _observations: { [name: string]: IArrayAdditionalMethods<Observation> } = {};
    private _protocols: string;
    private _protocolsArray: IArrayAdditionalMethods<Protocol> = [];
    private _insurances: IArrayAdditionalMethods<Insurance> = [];
    private _immunizations: string;
    private _immunizationsArray: IArrayAdditionalMethods<Immunization> = [];
    private _carePlans: string;
    private _carePlansArray: IArrayAdditionalMethods<CarePlan> = [];
    private _locations: string;
    private _locationsId: string;
    private _locationsArray: IArrayAdditionalMethods<Location> = [];
    private _measurements = new Measurements(this._weight, this._height, this._mel);
    private _allergies = new Allergies(this._mel);
    private _referringProvider = new ReferringProvider(this._mel);
    private _phone = new Phone(this._mel);
    private _address = new Address(this._mel);
    private _emr = new Emr(this.window, this.document);

    constructor(
        public _weight: string,
        public _height: string,
        public window: any,
        public document: any,
        public _mel: EmrMel
    ) { }

    // Returns the patient’s ID number
    get patientId() {
        this._patientId = (this._patientId != null) ? this._patientId : this._mel.melFunc('{PATIENT.PATIENTID}');
        return this._patientId;
    };

    // Returns the internal PID number for patient record
    get pid() {
        this._pid = (this._pid != null) ? this._pid : this._mel.melFunc('{find("patient", "PID")}');
        return this._pid;
    }

    // Returns the patient’s medical record number.
    get medicalRecordId() {
        this._medicalRecordId = (this._medicalRecordId != null) ? this._medicalRecordId : this._mel.melFunc('{PATIENT.MEDRECNO}');
        return this._medicalRecordId;
    }

    // Returns the patient’s ID from an external system; such as a billing or lab system
    get externalId() {
        this._externalId = (this._externalId != null) ? this._externalId : this._mel.melFunc('{PATIENT.EXTERNALID}');
        return this._externalId;
    }

    // Returns the preferred patient ID number for printed materials.
    get printId() {
        this._printId = (this._printId != null) ? this._printId : this._mel.melFunc('{PATIENT.PRINTID}');
        return this._printId;
    }

    // Returns the patient’s Social Security number.
    get ssn() {
        this._ssn = (this._ssn != null) ? this._ssn : this._mel.melFunc('{PATIENT.SOCSECNO}');
        return this._ssn;
    }

    // Returns the patient’s first name.
    get firstName() {
        this._firstName = (this._firstName != null) ? this._firstName : this._mel.melFunc('{PATIENT.FIRSTNAME}');
        return this._firstName;
    }

    // Returns the patient’s last name.
    get lastName() {
        this._lastName = (this._lastName != null) ? this._lastName : this._mel.melFunc('{PATIENT.LASTNAME}');
        return this._lastName;
    }

    // Returns the patient’s middle name.
    get middleName() {
        this._middleName = (this._middleName != null) ? this._middleName : this._mel.melFunc('{PATIENT.MIDDLENAME}');
        return this._middleName;
    }

    // Returns the patient’s full name formatted as follows: string = title first middle last; suffix
    get labelName() {
        this._labelName = (this._labelName != null) ? this._labelName : this._mel.melFunc('{PATIENT.LABELNAME}');
        return this._labelName;
    }

    // Name Prefix
    get namePrefix() {
        this._namePrefix = (this._namePrefix != null) ? this._namePrefix : this._mel.melFunc('{PATIENT.TITLE}');
        return this._namePrefix;
    }

    // Name Suffix
    get nameSuffix() {
        this._nameSuffix = (this._nameSuffix != null) ? this._nameSuffix : this._mel.melFunc('{PATIENT.ENTITLEMENTS}');
        return this._nameSuffix;
    }

    // Patient’s sex.
    get sex() {
        this._sex = (this._sex != null) ? this._sex : this._mel.melFunc('{PATIENT.SEX}');
        return this._sex;
    }

    // Patient’s race
    get race() {
        this._race = (this._race != null) ? this._race : this._mel.melFunc('{PATIENT.RACE}');
        return this._race;
    }

    // Patient’s ethnicity
    get ethnicity() {
        this._ethnicity = (this._ethnicity != null) ? this._ethnicity : this._mel.melFunc('{PATIENT.ETHNICITY}');
        return this._ethnicity;
    }

    // Returns the patient’s birth date/time
    get dateOfBirth() {
        this._dateOfBirth = (this._dateOfBirth != null) ? this._dateOfBirth : this._mel.melFunc('{PATIENT.DATEOFBIRTH}');
        return this._dateOfBirth;
    }

    // Returns the patient’s date of death
    get dateOfDeath() {
        this._dateOfDeath = (this._dateOfDeath != null) ? this._dateOfDeath : this._mel.melFunc('{PATIENT.DATEOFDEATH}');
        return this._dateOfDeath;
    }

    // Returns the patient’s marital status (Single; Married; Divorced; Widowed; Separated; Other or Undetermined)
    get maritalStatus() {
        this._maritalStatus = (this._maritalStatus != null) ? this._maritalStatus : this._mel.melFunc('{PATIENT.MARITALSTATUS}');
        return this._maritalStatus;
    }

    // Returns the patient’s preferred language
    get language() {
        this._language = (this._language != null) ? this._language : this._mel.melFunc('{PATIENT.PREFLANG}');
        return this._language;
    }

    // Returns the patient’s e-mail address
    get email() {
        this._email = (this._email != null) ? this._email : this._mel.melFunc('{PATIENT.EMAIL}');
        return this._email;
    };

    // Returns the patient’s contact by information
    get contactBy() {
        this._contactBy = (this._contactBy != null) ? this._contactBy : this._mel.melFunc('{PATIENT.CONTACTBY}');
        return this._contactBy;
    };

    // Returns a list of the contacts for the current patient
    get contacts() {
        if (this._contactsArray.length === 0) {
            this._contacts = (this._contacts != null) ? this._contacts : this._mel.melFunc('{PATIENT.CONTACTS}');
            let dataArray = StringInternal(this._contacts).toList();

            /*jslint plusplus: true */
            for (let index = 0; index < dataArray.length; index++) {
                this._contactsArray.push(new PatientContact(dataArray[index]));
            }

            this._contactsArray.tag = function () {
                return 'PATIENT.CONTACTS';
            }();

            this._contactsArray.toMelString = () => {
                return this._contacts;
            };
        }
        return this._contactsArray;
    }

    // Returns the patient’s employment status.
    get employmentStatus() {
        this._employmentStatus = (this._employmentStatus != null) ? this._employmentStatus : this._mel.melFunc('{PATIENT.EMPLSTATUS}');
        return this._employmentStatus;
    };

    // Patient’s current status in the clinic
    get clinicStatus() {
        this._clinicStatus = (this._clinicStatus != null) ? this._clinicStatus : this._mel.melFunc('{PATIENT.PSTATUS}');
        return this._clinicStatus;
    };

    // Name of the primary care physician
    get primaryCarePhysicianName() {
        this._primaryCarePhysicianName = (this._primaryCarePhysicianName != null) ? this._primaryCarePhysicianName : this._mel.melFunc('{PATIENT.PCP}');
        return this._primaryCarePhysicianName;
    };

    // Lists all problems 
    get problems() {
        if (this._problemsArray.length === 0) {
            this._problems = (this._problems != null) ? this._problems : this._mel.melFunc('{PROB_AFTER("delimited","dat","com")}');
            let dataArray = StringInternal(this._problems).toList();

            /*jslint plusplus: true */
            for (let index = 0; index < dataArray.length; index++) {
                this._problemsArray.push(new Problem(dataArray[index]));
            }

            this._problemsArray.tag = function () {
                return 'PROB_AFTER';
            }();

            this._problemsArray.toMelString = () => {
                return this._problems;
            };
        }
        return this._problemsArray;
    }

    // Lists all observations. 
    observations = (name: string) => {
        if (this._observations[name] == null) {
            let updateData = this._mel.melFunc('{LIST_OBS("' + name + '","Update","Delimited","value")}');
            let dataArray = StringInternal(updateData).toList();
            let observationsArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                observationsArray.push(new Observation(name, this.observationType.DocumentUnsigned, dataArray[index], this._mel));
            }
            this._observations[name] = observationsArray;

            let signedData = this._mel.melFunc('{LIST_OBS("' + name + '","Signed","Delimited","value")}');
            let dataArrayU = StringInternal(signedData).toList();
            for (let index = 0; index < dataArrayU.length; index++) {
                this._observations[name].push(new Observation(name, this.observationType.Signed, dataArrayU[index], this._mel));
            }

            this._observations[name].tag = function () {
                return 'LIST_OBS.' + name;
            }();
        }
        return this._observations[name];
    };

    // Protocols tell you when a patient is due for a particular action; based on factors that include sex; age; current problems; and current medications. 
    // The protocols contains array of observations required for this patient; as indicated by protocols set up in this clinic.
    get protocols() {
        if (this._protocolsArray.length === 0) {
            this._protocols = (this._protocols != null) ? this._protocols : this._mel.melFunc('{LISTPROTOCOLSHORT("list")}');
            let dataArray = StringInternal(this._protocols).toList('\r\n');

            /*jslint plusplus: true */
            for (let index = 0; index < dataArray.length; index++) {
                this._protocolsArray.push(new Protocol(dataArray[index]))
            };

            this._protocolsArray.tag = function () {
                return 'LISTPROTOCOLSHORT("list")';
            }();

            this._protocolsArray.toMelString = () => {
                return this._protocols;
            };
        }
        return this._protocolsArray;
    }
   
    // List of patient insurances 
    get insurances() {
        if (this._insurances.length === 0) {
            this._insurances.push(new Insurance('P', this._mel));
            this._insurances.push(new Insurance('S', this._mel));
            this._insurances.push(new Insurance('T', this._mel));
        };
        return this._insurances;
    }

    // List of patient immunizations 
    get immunizations() {
        if (this._immunizationsArray.length === 0) {
            this._immunizations = (this._immunizations != null) ? this._immunizations : this._mel.melFunc('{IMMUN_GETLIST()}');
            let dataArray = StringInternal(this._immunizations).toList();

            /*jslint plusplus: true */
            for (let index = 0; index < dataArray.length; index++) {
                this._immunizationsArray.push(new Immunization(dataArray[index], this._mel));
            }

            this._immunizationsArray.tag = function () {
                return 'IMMUN_GETLIST';
            }();

            this._immunizationsArray.toMelString = () => {
                return this._immunizations;
            };
        }
        return this._immunizationsArray;
    }

    get carePlans() {
        if (this._carePlansArray.length === 0) {
            this._carePlans = (this._carePlans != null) ? this._carePlans : this._mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
            let dataArray = StringInternal(this._carePlans).toList();

            /*jslint plusplus: true */
            for (let index = 0; index < dataArray.length; index++) {
                this._carePlansArray.push(new CarePlan(dataArray[index], this._mel));
            }

            this._carePlansArray.tag = function () {
                return 'MEL_LIST_CARE_PLAN';
            }();

            this._carePlansArray.toMelString = () => {
                return this._carePlans;
            };
        }
        return this._carePlansArray;
    };

    get locations() {
        if (this._locationsArray.length === 0) {
            this._locations = (this._locations != null) ? this._locations : this._mel.melFunc('{PATIENT.HOMELOCATIONNAME}');
            this._locationsId = (this._locationsId != null) ? this._locationsId : this._mel.melFunc('{PATIENT.HOMELOCATIONABBREVNAME}');
            let locationProperty = new Location(this._locationsId, this._locations, LocationType.Home);
            this._locationsArray.push(locationProperty);
            this._locationsArray.findByType =
                (function (value) {
                    let index;
                    if (typeof (value) === "number") {
                        for (index = 0; index < this.length; index++) {
                            if (this[index].locationType === value) {
                                return this[index];
                            }
                        }
                    };
                    return undefined;
                });
        }
        return this._locationsArray;
    }

    get measurements() {
        return this._measurements;
    }

    get allergies() {
        return this._allergies;
    }

    // referring provider
    get referringProvider() {
        return this._referringProvider;
    }

    get phone() {
        return this._phone;
    }

    // Represent patient address object
    get address() {
        return this._address;
    }

    get emr() {
        return this._emr;
    }


    // TODO: aren't exist:

    // List of all orders
    orders: Object;
    // List of all directives
    directives: Object;
    // Lists appointments
    appointments: Object;
    // List all medications and refills
    medications: Object;
};
    
