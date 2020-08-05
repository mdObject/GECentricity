export class Demographics {
    confidentialityCode: any;
    contactList: any;
    electronicAddressList: any;
    excludedUserAccess: number;
    excludedUserAccessSpecified: boolean;
    guarantorList: any;
    guardianList: any;
    hasPatientAccess: boolean;
    hasPatientAccessSpecified: boolean;
    healthIssueList: any;
    identifierList: [];
    lastOfficeVisitDate: Date;


    constructor(
        public json: string
    ) {

        let obj = JSON.parse(json);
        this.confidentialityCode = obj.confidentialityCode;
        this.lastOfficeVisitDate = this.toDate(obj.lastOfficeVisitDate);

    }

    private toDate = (value: string): Date => {
        let reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;

        let a = reMsAjax.exec(value);
        if (a) {
            var b = a[1].split(/[-+,.]/);
            return new Date(b[0] ? +b[0] : 0 - +b[1]);
        }
        return null;
    }
}