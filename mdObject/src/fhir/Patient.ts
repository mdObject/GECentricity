/*
 * Comply with https://www.hl7.org/fhir/patient.html
 * The full fhir support expected in version 3 and above
 */
import { HumanName } from "./HumanName";
import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { AdministrativeGenderCode } from "./codes/AdministrativeGenderCode";
import { ContactPoint } from "./ContactPoint";

export class Patient {
    get resourceType():string { return "Patient" };
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
//    "identifier": [{ Identifier }], // An identifier for this patient
    active: boolean; // Whether this patient's record is in active use
    name: HumanName[]; // A name associated with the patient
    telecom: ContactPoint[]; // A contact detail for the individual
    gender: AdministrativeGenderCode; // male | female | other | unknown
    birthDate: Date; // The date of birth for the individual
    // deceased[x]: Indicates if the individual is deceased or not. One of these 2:
    deceasedBoolean: boolean;
    deceasedDateTime: Date;
    address: Address[]; // An address for the individual
//    "maritalStatus": { CodeableConcept }, // Marital (civil) status of a patient
    // multipleBirth[x]: Whether patient is part of a multiple birth. One of these 2:
    multipleBirthBoolean: boolean;
    multipleBirthInteger: number;
    photo: Attachment[]; // Image of the patient
    //"contact": [{ // A contact party (e.g. guardian, partner, friend) for the patient
    //    "relationship": [{ CodeableConcept }], // The kind of relationship
    //    "name": { HumanName }, // A name associated with the contact person
    //    "telecom": [{ ContactPoint }], // A contact detail for the person
    //    "address": { Address }, // Address for the contact person
    //    "gender": "<code>", // male | female | other | unknown
    //    "organization": { Reference(Organization) }, // C? Organization that is associated with the contact
    //    "period": { Period } // The period during which this contact person or organization is valid to be contacted relating to this patient
    //}],
  //  "communication": [{ // A language which may be used to communicate with the patient about his or her health
  //      "language": { CodeableConcept }, // R!  The language which can be used to communicate with the patient about his or her health
  //      "preferred": <boolean> // Language preference indicator
  //}],
    //"generalPractitioner": [{
    //    Reference(Organization|Practitioner|
    //        PractitionerRole)
    //}], // Patient's nominated primary care provider
//    "managingOrganization": { Reference(Organization) }, // Organization that is the custodian of the patient record
//    "link": [{ // Link to another patient resource that concerns the same actual person
//        "other": { Reference(Patient|RelatedPerson) }, // R!  The other patient or related person resource that the link refers to
//        "type": "<code>" // R!  replaced-by | replaces | refer | seealso
//    }]
}