import { Condition } from "./Condition";
import { Search } from "./Search";

export class EntryBundle {
    fullUrl?: string; // Absolute URL for resource (server address, or UUID/OID)
    resource?: Condition | undefined; // A resource in the bundle
    search?: Search; // C? Search related information
    //"link": [{ Content as for Bundle.link }], // Links related to this entry
    //"request": { // C? Transaction Related Information
    //    "method": "<code>", // R!  GET | POST | PUT | DELETE
    //    "url": "<uri>", // R!  URL for HTTP equivalent of this entry
    //    "ifNoneMatch": "<string>", // For managing cache currency
    //    "ifModifiedSince": "<instant>", // For managing update contention
    //    "ifMatch": "<string>", // For managing update contention
    //    "ifNoneExist": "<string>" // For conditional creates
    //},
    //"response": { // C? Transaction Related Information
    //    "status": "<string>", // R!  Status return code for entry
    //    "location": "<uri>", // The location, if the operation returns a location
    //    "etag": "<string>", // The etag for the resource (if relevant)
    //    "lastModified": "<instant>" // Server's date time modified
    }
}