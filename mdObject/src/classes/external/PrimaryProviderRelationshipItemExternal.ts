import { IdentifierExternal } from "./IdentifierExternal";
import { PersonExternal } from "./PersonExternal";

export class PrimaryProviderRelationshipItemExternal {
    effectEndTime: Date;
    effectEndTimeSpecified: boolean;
    effectStartTime: Date;
    effectStartTimeSpecified: boolean;
    electronicAddressList: [];
    entityRoleKey: number;
    entityRoleKeySpecified: boolean;
    identifierList: IdentifierExternal[];
    mailingAddressList: any;
    mnemonicName: string;
    organization: any;
    person: PersonExternal;
    playerEntity: any;
    providerGroupMemberList: any;
    providerKey: number;
    providerKeySpecified: boolean;
    providerPractitionerKey: number;
    providerPractitionerKeySpecified: boolean;
    providerRelationshipList: any;
    providerTypeCode: any;
    scoperEntity: any;
    serviceDeliveryLocation: any;
    signatureList: any;
    statusCode: string;
}