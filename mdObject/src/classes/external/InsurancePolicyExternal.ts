import { PayorExternal } from "./PayorExternal";

export class InsurancePolicyExternal {
    groupName: any;
    groupNbr: string;
    insurancePlanId: string;
    insurancePlanName: any;
    insurancePolicyKey: number;
    insurancePolicyKeySpecified: boolean;
    insuredEffectiveDate: Date;
    insuredEffectiveDateSpecified: boolean;
    insuredExpirationDate: Date;
    insuredExpirationDateSpecified: boolean;
    payor: PayorExternal;
    person: any;
    planCode: string;
    planType: any;
    policyNbr: string;
}