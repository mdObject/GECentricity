import { Coding } from "./Coding";

export class CodeableConcept {
    coding: Array<Coding>; // Code defined by a terminology system
    text: string; // Plain text representation of the concept
}