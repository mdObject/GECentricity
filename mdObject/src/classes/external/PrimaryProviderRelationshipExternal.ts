import { PrimaryProviderRelationshipItemExternal } from "./PrimaryProviderRelationshipItemExternal";

export class PrimaryProviderRelationshipExternal {
    effectEndTime: Date;
    effectEndTimeSpecified: boolean;
    effectStartTime: Date;
    effectStartTimeSpecified: boolean;
    Item: PrimaryProviderRelationshipItemExternal;
    primaryProviderRelationshipKey: number;
    primaryProviderRelationshipKeySpecified: boolean;
    providerRelationshipTypeCode: string;
    statusCode: string;
}