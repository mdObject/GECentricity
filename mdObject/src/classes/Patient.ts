import { StringInternal } from '../factories/factories';
import { Protocol } from './Protocol';
import { Observation } from './Observation';
import { ObservationType } from './ObservationType';
import { Address } from './Address';
import { Phone } from './Phone';
import { Immunization } from './Immunization';
import { FlowsheetObservation } from './FlowsheetObservation';
import { PatientContact } from './PatientContact';
import { ReferringProvider } from './ReferringProvider';
import { Insurance } from './Insurance';
import { CarePlan } from './CarePlan';
import { Location } from './Location';
import { Allergies } from './Allergies';
import { EmrMel } from './EmrMel';
import { IArrayAdditionalMethods } from '../interfaces';
import { LocationType } from '../enums';
import { AllergiesExternal, DemographicsExternal } from './external/external';
import { emptyImage } from '../consts/strings';
import { System } from './System';
import { Problems } from './Problems';

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
    private _problems: Problems;
    private _observations: { [name: string]: IArrayAdditionalMethods<Observation> } = {}
    private _observationList: string;
    private _observatiosArray: IArrayAdditionalMethods<FlowsheetObservation> = [];
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
    private _allergies = new Allergies(this._mel);
    private _referringProvider = new ReferringProvider(this._mel);
    private _phone: Phone;
    private _address: Address;
    private _registrationNote: string;
    private _patientPicture: string;
    private _lastOfficeVisit: Date;

    constructor(
        public _mel: EmrMel,
        public _demographics?: DemographicsExternal,
        public _allergiesExternal?: AllergiesExternal
    ) {
        if (_demographics) {
            this._patientPicture = _demographics.patientPicture;
            this._lastOfficeVisit = _demographics.lastOfficeVisitDate;
            this._registrationNote = _demographics.registrationNote;
            this._language = _demographics.preferredLanguage;
            if (_demographics.identifierList) {
                let patientId = _demographics.identifierList.find(e => e.identifierDomain.domainId === "1.2.3.4.700");
                this._patientId = (patientId) ? patientId.idValue : this._patientId;
                this._printId = this._patientId;

                let externalId = _demographics.identifierList.find(e => e.identifierDomain.domainId === "1.2.3.4.200");
                this._externalId = (externalId) ? externalId.idValue : this._externalId;

                let medicalRecordId = _demographics.identifierList.find(e => e.identifierDomain.domainId === "1.2.3.4.400");
                this._medicalRecordId = (medicalRecordId) ? medicalRecordId.idValue : this._medicalRecordId;
            }
            if (_demographics.person) {
                let birthDate = System.formatDate(_demographics.person.birthDate);
                this._dateOfBirth = (birthDate) ? birthDate : this._dateOfBirth;
                this._dateOfDeath = (_demographics.person.deceaseIndSpecified && _demographics.person.deceaseInd) ?
                    System.formatDate(_demographics.person.deceaseTime) : this._dateOfDeath;

                this._sex = _demographics.person.genderCode;
                if (_demographics.person.mailingAddressList && _demographics.person.mailingAddressList[0]) {
                    this._address = (this._address) ? this._address : new Address(this._mel, _demographics.person.mailingAddressList[0]);
                }
                if (_demographics.person.electronicAddressList) {
                    this._phone = (this._phone) ? this._phone : new Phone(this._mel, _demographics.person.electronicAddressList);
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
                    let ssn = _demographics.person.identifierList.find(e => e.identifierDomain.domainId === "1.2.3.4.300");
                    this._ssn = (ssn) ? ssn.idValue : this._ssn;
                    this._ssn = (this._ssn) ? this._ssn.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3') : this._ssn;
                }
            }
        }

        this._address = (this._address) ? this._address : new Address(this._mel);
        this._phone = (this._phone) ? this._phone : new Phone(this._mel);
    }

    get lastOfficeVisit() {
        return this._lastOfficeVisit;
    }

    get patientPicture() {
        this._patientPicture = (this._patientPicture !== undefined) ? this._patientPicture
            : emptyImage;
        return this._patientPicture;
    }

    // Returns the patient’s ID number
    get patientId() {
        this._patientId = (this._patientId !== undefined) ? this._patientId : this._mel.melFunc('{PATIENT.PATIENTID}');
        return this._patientId;
    }

    async patientIdAsync() {
        this._patientId = (this._patientId !== undefined) ? this._patientId : await this._mel.melFunc('{PATIENT.PATIENTID}');
        return this._patientId;
    }

    // Returns the internal PID number for patient record
    get pid() {
        this._pid = (this._pid !== undefined) ? this._pid : this._mel.melFunc('{find("patient", "PID")}');
        return this._pid;
    }

    async pidAsync() {
        this._pid = (this._pid !== undefined) ? this._pid : await this._mel.melFunc('{find("patient", "PID")}');
        return this._pid;
    }

    // Returns the patient’s medical record number.
    get medicalRecordId() {
        this._medicalRecordId = (this._medicalRecordId !== undefined) ? this._medicalRecordId : this._mel.melFunc('{PATIENT.MEDRECNO}');
        return this._medicalRecordId;
    }

    async medicalRecordIdAsync() {
        this._medicalRecordId = (this._medicalRecordId !== undefined) ? this._medicalRecordId : await this._mel.melFunc('{PATIENT.MEDRECNO}');
        return this._medicalRecordId;
    }

    // Returns the patient’s ID from an external system; such as a billing or lab system
    get externalId() {
        this._externalId = (this._externalId !== undefined) ? this._externalId : this._mel.melFunc('{PATIENT.EXTERNALID}');
        return this._externalId;
    }

    async externalIdAsync() {
        this._externalId = (this._externalId !== undefined) ? this._externalId : await this._mel.melFunc('{PATIENT.EXTERNALID}');
        return this._externalId;
    }

    // Returns the preferred patient ID number for printed materials.
    get printId() {
        this._printId = (this._printId !== undefined) ? this._printId : this._mel.melFunc('{PATIENT.PRINTID}');
        return this._printId;
    }

    async printIdAsync() {
        this._printId = (this._printId !== undefined) ? this._printId : await this._mel.melFunc('{PATIENT.PRINTID}');
        return this._printId;
    }

    // Returns the patient’s Social Security number.
    get ssn() {
        this._ssn = (this._ssn !== undefined) ? this._ssn : this._mel.melFunc('{PATIENT.SOCSECNO}');
        return this._ssn;
    }

    async ssnAsync() {
        this._ssn = (this._ssn !== undefined) ? this._ssn : await this._mel.melFunc('{PATIENT.SOCSECNO}');
        return this._ssn;
    }

    // Returns the patient’s first name.
    get firstName() {
        this._firstName = (this._firstName !== undefined) ? this._firstName : this._mel.melFunc('{PATIENT.FIRSTNAME}');
        return this._firstName;
    }

    async firstNameAsync() {
        this._firstName = (this._firstName !== undefined) ? this._firstName : await this._mel.melFunc('{PATIENT.FIRSTNAME}');
        return this._firstName;
    }

    // Returns the patient’s last name.
    get lastName() {
        this._lastName = (this._lastName !== undefined) ? this._lastName : this._mel.melFunc('{PATIENT.LASTNAME}');
        return this._lastName;
    }

    async lastNameAsync() {
        this._lastName = (this._lastName !== undefined) ? this._lastName : await this._mel.melFunc('{PATIENT.LASTNAME}');
        return this._lastName;
    }

    // Returns the patient’s middle name.
    get middleName() {
        this._middleName = (this._middleName !== undefined) ? this._middleName : this._mel.melFunc('{PATIENT.MIDDLENAME}');
        return this._middleName;
    }

    async middleNameAsync() {
        this._middleName = (this._middleName !== undefined) ? this._middleName : await this._mel.melFunc('{PATIENT.MIDDLENAME}');
        return this._middleName;
    }

    // Returns the patient’s full name formatted as follows: string = title first middle last; suffix
    get labelName() {
        this._labelName = (this._labelName !== undefined) ? this._labelName : this._mel.melFunc('{PATIENT.LABELNAME}');
        return this._labelName;
    }

    async labelNameAsync() {
        this._labelName = (this._labelName !== undefined) ? this._labelName : await this._mel.melFunc('{PATIENT.LABELNAME}');
        return this._labelName;
    }

    // Name Prefix
    get namePrefix() {
        this._namePrefix = (this._namePrefix !== undefined) ? this._namePrefix : this._mel.melFunc('{PATIENT.TITLE}');
        return this._namePrefix;
    }

    async namePrefixAsync() {
        this._namePrefix = (this._namePrefix !== undefined) ? this._namePrefix : await this._mel.melFunc('{PATIENT.TITLE}');
        return this._namePrefix;
    }

    // Name Suffix
    get nameSuffix() {
        this._nameSuffix = (this._nameSuffix !== undefined) ? this._nameSuffix : this._mel.melFunc('{PATIENT.ENTITLEMENTS}');
        return this._nameSuffix;
    }

    async nameSuffixAsync() {
        this._nameSuffix = (this._nameSuffix !== undefined) ? this._nameSuffix : await this._mel.melFunc('{PATIENT.ENTITLEMENTS}');
        return this._nameSuffix;
    }

    // Patient’s sex.
    get sex() {
        this._sex = (this._sex  !== undefined) ? this._sex : this._mel.melFunc('{PATIENT.SEX}');
        return this._sex;
    }

    async sexAsync() {
        this._sex = (this._sex !== undefined) ? this._sex : await this._mel.melFunc('{PATIENT.SEX}');
        return this._sex;
    }

    // Patient’s race
    get race() {
        this._race = (this._race  !== undefined) ? this._race : this._mel.melFunc('{PATIENT.RACE}');
        return this._race;
    }

    async raceAsync() {
        this._race = (this._race !== undefined) ? this._race : await this._mel.melFunc('{PATIENT.RACE}');
        return this._race;
    }

    // Patient’s ethnicity
    get ethnicity() {
        this._ethnicity = (this._ethnicity  !== undefined) ? this._ethnicity : this._mel.melFunc('{PATIENT.ETHNICITY}');
        return this._ethnicity;
    }

    async ethnicityAsync() {
        this._ethnicity = (this._ethnicity !== undefined) ? this._ethnicity : await this._mel.melFunc('{PATIENT.ETHNICITY}');
        return this._ethnicity;
    }

    // Returns the patient’s birth date/time
    get dateOfBirth() {
        this._dateOfBirth = (this._dateOfBirth  !== undefined) ? this._dateOfBirth : this._mel.melFunc('{PATIENT.DATEOFBIRTH}');
        return this._dateOfBirth;
    }

    async dateOfBirthAsync() {
        this._dateOfBirth = (this._dateOfBirth !== undefined) ? this._dateOfBirth : await this._mel.melFunc('{PATIENT.DATEOFBIRTH}');
        return this._dateOfBirth;
    }

    // Returns the patient’s date of death
    get dateOfDeath() {
        this._dateOfDeath = (this._dateOfDeath  !== undefined) ? this._dateOfDeath : this._mel.melFunc('{PATIENT.DATEOFDEATH}');
        return this._dateOfDeath;
    }

    async dateOfDeathAsync() {
        this._dateOfDeath = (this._dateOfDeath !== undefined) ? this._dateOfDeath : await this._mel.melFunc('{PATIENT.DATEOFDEATH}');
        return this._dateOfDeath;
    }

    // Returns the patient’s marital status (Single; Married; Divorced; Widowed; Separated; Other or Undetermined)
    get maritalStatus() {
        this._maritalStatus = (this._maritalStatus  !== undefined) ? this._maritalStatus : this._mel.melFunc('{PATIENT.MARITALSTATUS}');
        return this._maritalStatus;
    }

    async maritalStatusAsync() {
        this._maritalStatus = (this._maritalStatus !== undefined) ? this._maritalStatus : await this._mel.melFunc('{PATIENT.MARITALSTATUS}');
        return this._maritalStatus;
    }

    // Returns the patient’s preferred language
    get language() {
        this._language = (this._language  !== undefined) ? this._language : this._mel.melFunc('{PATIENT.PREFLANG}');
        return this._language;
    }

    async languageAsync() {
        this._language = (this._language !== undefined) ? this._language : await this._mel.melFunc('{PATIENT.PREFLANG}');
        return this._language;
    }

    // Returns the patient’s e-mail address
    get email() {
        this._email = (this._email  !== undefined) ? this._email : this._mel.melFunc('{PATIENT.EMAIL}');
        return this._email;
    }

    async emailAsync() {
        this._email = (this._email !== undefined) ? this._email : await this._mel.melFunc('{PATIENT.EMAIL}');
        return this._email;
    }

    // Returns the patient’s contact by information
    get contactBy() {
        this._contactBy = (this._contactBy  !== undefined) ? this._contactBy : this._mel.melFunc('{PATIENT.CONTACTBY}');
        return this._contactBy;
    }

    async contactByAsync() {
        this._contactBy = (this._contactBy !== undefined) ? this._contactBy : await this._mel.melFunc('{PATIENT.CONTACTBY}');
        return this._contactBy;
    }

    get registrationNote() {
        this._registrationNote = (this._registrationNote  !== undefined) ? this._registrationNote : this._mel.melFunc('{PATIENT.REGNOTE}');
        return this._registrationNote;
    }

    async registrationNoteAsync() {
        this._registrationNote = (this._registrationNote !== undefined) ? this._registrationNote : await this._mel.melFunc('{PATIENT.REGNOTE}');
        return this._registrationNote;
    }

    // Returns a list of the contacts for the current patient
    get contacts() {
        if (this._contactsArray.length === 0) {
            this._contacts = (this._contacts  !== undefined) ? this._contacts : this._mel.melFunc('{PATIENT.CONTACTS}');
            let dataArray = StringInternal(this._contacts).toList();

            /*jslint plusplus: true */
            this._contactsArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._contactsArray.push(new PatientContact(dataArray[index]));
            }

            this._contactsArray.tag = 'PATIENT.CONTACTS';

            this._contactsArray.toMelString = () => {
                return this._contacts;
            }
        }
        return this._contactsArray;
    }

    async contactsAsync() {
        if (this._contactsArray.length === 0) {
            this._contacts = (this._contacts !== undefined) ? this._contacts : await this._mel.melFunc('{PATIENT.CONTACTS}');
            let dataArray = StringInternal(this._contacts).toList();

            /*jslint plusplus: true */
            this._contactsArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._contactsArray.push(new PatientContact(dataArray[index]));
            }

            this._contactsArray.tag = 'PATIENT.CONTACTS';

            this._contactsArray.toMelString = () => {
                return this._contacts;
            }
        }
        return this._contactsArray;
    }

    // Returns the patient’s employment status.
    get employmentStatus() {
        this._employmentStatus = (this._employmentStatus  !== undefined) ? this._employmentStatus : this._mel.melFunc('{PATIENT.EMPLSTATUS}');
        return this._employmentStatus;
    }

    async employmentStatusAsync() {
        this._employmentStatus = (this._employmentStatus !== undefined) ? this._employmentStatus : await this._mel.melFunc('{PATIENT.EMPLSTATUS}');
        return this._employmentStatus;
    }

    // Patient’s current status in the clinic
    get clinicStatus() {
        this._clinicStatus = (this._clinicStatus  !== undefined) ? this._clinicStatus : this._mel.melFunc('{PATIENT.PSTATUS}');
        return this._clinicStatus;
    }

    async clinicStatusAsync() {
        this._clinicStatus = (this._clinicStatus !== undefined) ? this._clinicStatus : await this._mel.melFunc('{PATIENT.PSTATUS}');
        return this._clinicStatus;
    }

    // Name of the primary care physician
    get primaryCarePhysicianName() {
        this._primaryCarePhysicianName = (this._primaryCarePhysicianName !== undefined) ?
            this._primaryCarePhysicianName : this._mel.melFunc('{PATIENT.PCP}');
        return this._primaryCarePhysicianName;
    }

    async primaryCarePhysicianNameAsync() {
        this._primaryCarePhysicianName = (this._primaryCarePhysicianName !== undefined) ?
            this._primaryCarePhysicianName : await this._mel.melFunc('{PATIENT.PCP}');
        return this._primaryCarePhysicianName;
    }

    // Lists all problems 
    get problems() {
        if (!this._problems) {
            this._problems = new Problems();
            this._problems.load(this._mel);
        }
    
        this._problems.tag = 'PROB_AFTER';

        return this._problems;
    }

    async problemsAsync() {
        if (!this._problems) {
            this._problems = new Problems();
            await this._problems.loadAsync(this._mel);
        }
        return this._problems;
    }

    // Lists observations by name. 
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

            this._observations[name].tag = 'LIST_OBS.' + name;
        }
        return this._observations[name];
    }

    // Lists all FLOWSHEET observations. 
    flowsheetObservations(flowsheet?: string) {
        let flowsheetValue = '';
        if (flowsheet) {
            flowsheetValue = flowsheet;
        }
        else {
            flowsheetValue = this._mel.melFunc('{_EncodeViewNameBS}');
        }
        if (this._observatiosArray.length === 0 || this._observatiosArray.tag != 'GET_FLOWSHEET_VALUES:' + flowsheetValue) {
            this._observationList = this._mel.melFunc('{GET_FLOWSHEET_VALUES("' + flowsheetValue + '","DELIM")}');
            let dataArray = StringInternal(this._observationList).toList();

            /*jslint plusplus: true */
            this._observatiosArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._observatiosArray.push(new FlowsheetObservation(dataArray[index]));
            }

            this._observatiosArray.tag = 'GET_FLOWSHEET_VALUES:' + flowsheetValue;

            this._observatiosArray.toMelString = () => {
                return this._observationList;
            }
        }
        return this._observatiosArray;
    }

    // Protocols tell you when a patient is due for a particular action; based on factors that include sex; age; current problems; and current medications. 
    // The protocols contains array of observations required for this patient; as indicated by protocols set up in this clinic.
    get protocols() {
        if (this._protocolsArray.length === 0) {
            this._protocols = (this._protocols  !== undefined) ? this._protocols : this._mel.melFunc('{LISTPROTOCOLSHORT("list")}');
            let dataArray = StringInternal(this._protocols).toList('\r\n');

            /*jslint plusplus: true */
            this._protocolsArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._protocolsArray.push(new Protocol(dataArray[index]))
            }

            this._protocolsArray.tag = 'LISTPROTOCOLSHORT("list")';

            this._protocolsArray.toMelString = () => {
                return this._protocols;
            }
        }
        return this._protocolsArray;
    }
   
    // List of patient insurances 
    get insurances() {
        if (this._insurances.length === 0) {
            this._insurances.push(new Insurance('P', this._mel));
            this._insurances.push(new Insurance('S', this._mel));
            this._insurances.push(new Insurance('T', this._mel));
        }
        return this._insurances;
    }

    // List of patient immunizations 
    get immunizations() {
        if (this._immunizationsArray.length === 0) {
            this._immunizations = (this._immunizations  !== undefined) ? this._immunizations : this._mel.melFunc('{IMMUN_GETLIST()}');
            let dataArray = StringInternal(this._immunizations).toList();

            /*jslint plusplus: true */
            this._immunizationsArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._immunizationsArray.push(new Immunization(dataArray[index], this._mel));
            }

            this._immunizationsArray.tag = 'IMMUN_GETLIST';

            this._immunizationsArray.toMelString = () => {
                return this._immunizations;
            }
        }
        return this._immunizationsArray;
    }

    get carePlans() {
        if (this._carePlansArray.length === 0) {
            this._carePlans = (this._carePlans  !== undefined) ? this._carePlans : this._mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
            let dataArray = StringInternal(this._carePlans).toList();

            /*jslint plusplus: true */
            this._carePlansArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._carePlansArray.push(new CarePlan(dataArray[index], this._mel));
            }

            this._carePlansArray.tag = 'MEL_LIST_CARE_PLAN';

            this._carePlansArray.toMelString = () => {
                return this._carePlans;
            }
        }
        return this._carePlansArray;
    }

    async carePlansAsync() {
        if (this._carePlansArray.length === 0) {
            this._carePlans = (this._carePlans !== undefined) ? this._carePlans : await this._mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
            let dataArray = StringInternal(this._carePlans).toList();

            /*jslint plusplus: true */
            this._carePlansArray = [];
            for (let index = 0; index < dataArray.length; index++) {
                this._carePlansArray.push(new CarePlan(dataArray[index], this._mel));
            }

            this._carePlansArray.tag = 'MEL_LIST_CARE_PLAN';

            this._carePlansArray.toMelString = () => {
                return this._carePlans;
            }
        }
        return this._carePlansArray;
    }

    get locations() {
        if (this._locationsArray.length === 0) {
            this._locations = (this._locations  !== undefined) ? this._locations : this._mel.melFunc('{PATIENT.HOMELOCATIONNAME}');
            this._locationsId = (this._locationsId  !== undefined) ? this._locationsId : this._mel.melFunc('{PATIENT.HOMELOCATIONABBREVNAME}');
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
                    }
                    return undefined;
                });
        }
        return this._locationsArray;
    }

    get allergies(): Allergies {
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


    // TODO: aren't exist:

    // List of all orders
    orders: Object;
    // List of all directives
    directives: Object;
    // Lists appointments
    appointments: Object;
    // List all medications and refills
    medications: Object;
}