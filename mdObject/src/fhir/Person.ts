/*
 * Comply with https://www.hl7.org/fhir/person.html
 * The full fhir support expected in version 3 and above
 */

import { HumanName } from "./HumanName";
import { Address } from "./Address";
import { Attachment } from "./Attachment";

export class Person {
    get resourceType(): string { return "Person" };
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
//    "identifier": [{ Identifier }], // A human identifier for this person
    name: HumanName[]; // A name associated with the person
//    "telecom": [{ ContactPoint }], // A contact detail for the person
//    "gender": "<code>", // male | female | other | unknown
    birthDate: Date; // The date on which the person was born
    address: Address[]; // One or more addresses for the person
    photo: Attachment; // Image of the person
//    "managingOrganization": { Reference(Organization) }, // The organization that is the custodian of the person record
    active: boolean; // This person's record is in active use
    //"link": [{ // Link to a resource that concerns the same actual person
    //    "target": { Reference(Patient|Practitioner|RelatedPerson|Person) }, // R!  The resource to which this actual person is associated
    //    "assurance": "<code>" // level1 | level2 | level3 | level4
    //}]
}