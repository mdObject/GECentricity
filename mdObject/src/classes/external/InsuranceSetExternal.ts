import { InsuranceSetItemExternal } from "./InsuranceSetItemExternal";

export class InsuranceSetExternal {
    effectEndTime: Date;
    effectEndTimeSpecified: boolean;
    effectStartTime: Date;
    effectStartTimeSpecified: boolean;
    insuranceSetId: any;
    insuranceSetItemList: InsuranceSetItemExternal[];
    insuranceSetKey: number;
    insuranceSetKeySpecified: boolean;
    statusCode: any;
}