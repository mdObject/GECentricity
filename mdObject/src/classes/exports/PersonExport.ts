import { PersonNameExport } from "./PersonNameExport";

export class PersonExport {
    birthDate: string;
    birthPlaceName: any;
    birthTime: number;
    birthTimeSpecified: boolean;
    cdcEthnicityCode: any;
    cdcRaceCode: any;
    citizenList: any;
    deceaseInd: boolean;
    deceaseIndSpecified: boolean;
    deceaseTime: any;
    disabilityList: any;
    educationLevelCode: any;
    electronicAddressList: [];
    employeeList: any;
    entityKey: number;
    entityKeySpecified: boolean;
    ethnicGroupList: any;
    genderCode: string;
    hl7MaritalStatusCode: string;
    identifierList: [];
    insuranceSetList: [];
    languageList: [];
    livingArrangmentCode: any;
    mailingAddressList: [];
    maritalStatusCode: string;
    multibirthInd: boolean;
    multibirthIndSpecified: boolean;
    multibirthOrderNbr: number;
    multibirthOrderNbrSpecified: boolean;
    personDeathCauseCode: any;
    personKey: string;
    personKeySpecified: boolean;
    personNameList: PersonNameExport[];
    personRelationshipList: any;
    portalEmailAddressList: any;
    providerCredentialList: any;
    raceList: any;
    religionCode: any;
    subjectHealthIssueList: any;

    constructor(
        public obj: any
    ) {

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
}
