import { IdentifierDomain } from "./IdentifierDomain";

export class Identifier {
    effectEndTime: Date;
    effectEndTimeSpecified: boolean;
    effectStartTime: Date;
    effectStartTimeSpecified: boolean;
    identifierDomain: IdentifierDomain;
    identifierKey: number;
    identifierKeySpecified: boolean;
    idStatusCode: any;
    idTypeCode: any;
    idValue: string;
}