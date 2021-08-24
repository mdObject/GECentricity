/*
 * Comply with https://www.hl7.org/fhir/DSTU2/condition.html
 * The full fhir support expected in version 3 and above
 */

import { CodeableConcept } from "./CodeableConcept";
import { ClinicalStatus } from "./codes/ClinicalStatus";
import { VerificationStatus } from "./codes/VerificationStatus";
import { Meta } from "./Meta";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { dateTime } from "./types/dateTime";

export class Condition implements Resource {
    // from Resource: id, meta, implicitRules, and language
    id?: string;
    meta?: Meta;
    language?: string;
    resourceType:string = 'Condition';
    // from DomainResource: text, contained, extension, and modifierExtension
//--not implemented        "identifier": [{ Identifier }]; // External Ids for this condition
    patient: Reference; // R!  Who has the condition?
//--not implemented        "encounter": { Reference(Encounter) }; // Encounter when condition first asserted
//--not implemented        "asserter": { Reference(Practitioner|Patient) }; // Person who asserts this condition
//--not implemented        "dateRecorded": "<date>"; // When first entered
    code: CodeableConcept; // R!  Identification of the condition, problem or diagnosis
    category?: CodeableConcept; // complaint | symptom | finding | diagnosis
    clinicalStatus?: ClinicalStatus; // active | relapse | remission | resolved
    verificationStatus?: VerificationStatus; // R!  provisional | differential | confirmed | refuted | entered-in-error | unknown
    severity?: CodeableConcept; // Subjective severity of condition
    // onset[x]: Estimated or actual date,  date-time, or age. One of these 5:
    onsetDateTime?: dateTime; 
//--not implemented        "onsetQuantity": { Quantity(Age) };
//--not implemented        "onsetPeriod": { Period };
//--not implemented        "onsetRange": { Range };
    onsetString?: string;
    //abatement[x]: If/when in resolution/remission. One of these 6:
    abatementDateTime?: dateTime;
//--not implemented        "abatementQuantity": { Quantity(Age) };
    abatementBoolean?: boolean;
//--not implemented        "abatementPeriod": { Period };
//--not implemented        "abatementRange": { Range };
    abatementString?: string;
//--not implemented        "stage": { // Stage/grade, usually assessed formally
//--not implemented            "summary": { CodeableConcept }; // C? Simple summary (disease specific)
//--not implemented            "assessment": [{ Reference(ClinicalImpression|DiagnosticReport|Observation) }] // C? Formal record of assessment
//--not implemented        };
    evidence?: [{ // Supporting evidence
     code: CodeableConcept; // C? Manifestation/symptom
//--not implemented            "detail": [{ Reference(Any) }] // C? Supporting information found elsewhere
    }];
    bodySite?: Array<CodeableConcept>; // Anatomical location, if relevant
    notes?: string; // Additional information about the Condition

}