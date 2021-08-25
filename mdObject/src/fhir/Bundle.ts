import { BundleTypeCode } from "./codes/BundleTypeCode";
import { EntryBundle } from "./EntryBundle";
import { Meta } from "./Meta";
import { Resource } from "./Resource";
import { Signature } from "./Signature";

export class Bundle implements Resource {
    // from Resource: id, meta, implicitRules, and language
    id?: string;
    meta?: Meta;
    language?: string;
    resourceType: string = 'Bundle';
    type: BundleTypeCode; // R!  document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
    total?: number; // C? If search, the total number of matches
    link?: { // Links related to this Bundle
        relation: string, // R!  http://www.iana.org/assignments/link-relations/link-relations.xhtml
        url: string // R!  Reference details for the link
    }[];
    entry?: EntryBundle[];
    signature?: Signature  // Digital Signature
}