import { Meta } from "./Meta";

export class Resource {
    resourceType?: string;
    id?: string; // Logical id of this artifact
    meta?: Meta; // Metadata about the resource
//--not implemented    "implicitRules": "<uri>", // A set of rules under which this content was created
    language?: string; // Language of the resource content 
}