import { Coding } from "./Coding";

export class Signature {
    // from Element: extension
    type: Coding[]; // R!  Indication of the reason the entity signed the object(s)
    when: string; // R!  When the signature was created
    // who[x]: Who signed the signature. One of these 2:
    whoUri?: string;
    whoReference?: string;
    contentType: string; // R!  The technical format of the signature 
    blob: string; // R!  The actual signature content (XML DigSig. JWT, picture, etc.)
}