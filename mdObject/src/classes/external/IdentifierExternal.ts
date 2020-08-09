import { IdentifierDomainExternal } from "./IdentifierDomainExternal";

export class IdentifierExternal {
    effectEndTime: Date;
    effectEndTimeSpecified: boolean;
    effectStartTime: Date;
    effectStartTimeSpecified: boolean;
    identifierDomain: IdentifierDomainExternal;
    identifierKey: number;
    identifierKeySpecified: boolean;
    idStatusCode: any;
    idTypeCode: any;
    idValue: string;
}