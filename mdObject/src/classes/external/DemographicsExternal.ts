import { System } from "../system";
import { PersonExternal } from './PersonExternal';
import { IdentifierExternal } from "./IdentifierExternal";
import { PersonAgeExternal } from "./PersonAgeExternal";
import { PrimaryProviderRelationshipExternal } from "./PrimaryProviderRelationshipExternal";
import { MailingAddressExternal } from "./MailingAddressExternal";

export class DemographicsExternal {
        confidentialityCode: any;
        contactList: any;
        electronicAddressList: any;
    excludedUserAccess: number;
    excludedUserAccessSpecified: boolean;
        guarantorList: any;
        guardianList: any;
    hasPatientAccess: boolean;
    hasPatientAccessSpecified: boolean;
        healthIssueList: any;
    identifierList: IdentifierExternal[];
    lastOfficeVisitDate: Date;
    lastOfficeVisitDateSpecified: boolean;
    mailingAddressList: MailingAddressExternal[];
    medicareAdvantagePatient: boolean;
    medicareAdvantagePatientSpecified: boolean;
    mqicEPatientId: number;
    mqicEPatientIdSpecified: boolean;
        organization: any;
    patientKey: number;
    patientKeySpecified: boolean;
    patientPicture: string;
    person: PersonExternal;
    personAge: PersonAgeExternal;
    preferredLanguage: string;
    primaryProviderRelationshipList: PrimaryProviderRelationshipExternal[];
    registrationNote: string;
    statusCode: string;
    vipCode: string;

    constructor(
        public json: string
    ) {
        if (json) {
            let obj = JSON.parse(json);
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
}
