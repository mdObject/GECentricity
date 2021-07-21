import { ElectronicAddressExternal } from "./ElectronicAddressExternal";
import { MailingAddressExternal } from "./MailingAddressExternal";

export class PayorExternal {
    contactPersonFamilyName: string;
    contactPersonGivenName: string;
    electronicAddressList: ElectronicAddressExternal[];
    mailingAddressList: MailingAddressExternal[];
    organizationEnterprise: any;
    payorId: any;
    payorKey: number;
    payorKeySpecified: boolean;
    payorName: string;
}