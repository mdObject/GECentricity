export class PersonNameExport {
    effectEndTime: any;
    effectStartTime: any;
    familyName: string;
    givenName: string;
    middleName: string;
    nameStatusCode: string;
    nameTypeCode: any;
    nameUseCode: any;
    personNameKey: number;
    personNameKeySpecified: boolean;
    prefixName: any;
    suffixName: any;
    titleName: any;
    voorvoegselName: any;

    constructor(
        public obj: any
    ) {
        this.effectEndTime = obj.effectEndTime;
        this.effectStartTime = obj.effectStartTime;
        this.familyName = obj.familyName;
        this.givenName = obj.givenName;
        this.middleName = obj.middleName;
        this.nameStatusCode = obj.nameStatusCode;
        this.nameTypeCode = obj.nameTypeCode;
        this.nameUseCode = obj.nameUseCode;
        this.personNameKey = obj.personNameKey;
        this.personNameKeySpecified = obj.personNameKeySpecified;
        this.prefixName = obj.prefixName;
        this.suffixName = obj.suffixName;
        this.titleName = obj.titleName;
        this.voorvoegselName = obj.voorvoegselName;

    }
}
