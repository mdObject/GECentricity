//
import { EmrMel } from './classes'

export class Immunization {

    private data: Array<string> = (this._value === undefined) ? [] : this._value.split('^');
    private isNew: boolean = this._value === undefined ? true : false;

    immunizationId: string = (this.data.length > 0) ? this.data[0] : '';
    immunizationGroupId: string = (this.data.length > 1) ? this.data[1] : '';
    vaccineGroupName: string = (this.data.length > 2) ? this.data[2] : '';
    vaccineName: string = (this.data.length > 3) ? this.data[3] : '';
    medicalDisplayName: string = (this.data.length > 4) ? this.data[4] : '';
    series: string = (this.data.length > 5) ? this.data[5] : '';
    wasGiven: string = (this.data.length > 6) ? this.data[6] : '';
    reasonNotGiven: string = (this.data.length > 7) ? this.data[7] : '';
    historical: string = (this.data.length > 8) ? this.data[8] : '';
    historicalSource: string = (this.data.length > 9) ? this.data[9] : '';
    vfcElegibility: string = (this.data.length > 10) ? this.data[10] : '';
    ddid: string = (this.data.length > 11) ? this.data[11] : '';
    dnid: string = (this.data.length > 12) ? this.data[12] : '';
    gpi: string = (this.data.length > 13) ? this.data[13] : '';
    kdc: string = (this.data.length > 14) ? this.data[14] : '';
    ndc: string = (this.data.length > 15) ? this.data[15] : '';
    cvxCode: string = (this.data.length > 16) ? this.data[16] : '';
    doseAmount: string = (this.data.length > 17) ? this.data[17] : '';
    dosageUnitOfMeasure: string = (this.data.length > 18) ? this.data[18] : '';
    route: string = (this.data.length > 19) ? this.data[19] : '';
    routeCode: string = (this.data.length > 20) ? this.data[20] : '';
    site: string = (this.data.length > 21) ? this.data[21] : '';
    siteCode: string = (this.data.length > 22) ? this.data[22] : '';
    manufacturer: string = (this.data.length > 23) ? this.data[23] : '';
    manufacturerCode: string = (this.data.length > 24) ? this.data[24] : '';
    lotNumber: string = (this.data.length > 25) ? this.data[25] : '';
    expirationDate: string = (this.data.length > 26) ? this.data[26] : '';
    visPublishedDate: string = (this.data.length > 27) ? this.data[27] : '';
    administeredByName: string = (this.data.length > 28) ? this.data[28] : '';
    administeredDate: string = (this.data.length > 29) ? this.data[29] : '';
    administeredDateType: string = (this.data.length > 30) ? this.data[30] : '';
    administeredComments: string = (this.data.length > 31) ? this.data[31] : '';
    advReactionDateTime: string = (this.data.length > 32) ? this.data[32] : '';
    advReactionDateTimeType: string = (this.data.length > 33) ? this.data[33] : '';
    advReactionComments: string = (this.data.length > 34) ? this.data[34] : '';
    advReactionCmtByName: string = (this.data.length > 35) ? this.data[35] : '';
    signed: string = (this.data.length > 36) ? this.data[36] : '';
    signedByName: string = (this.data.length > 37) ? this.data[37] : '';
    signedDate: string = (this.data.length > 38) ? this.data[38] : '';
    reasonRemoved: string = (this.data.length > 39) ? this.data[39] : '';
    stopDate: string = (this.data.length > 40) ? this.data[40] : '';
    reasonNotGivenMedical: string = (this.data.length > 41) ? this.data[41] : '';
    reasonNotGivenMedicalDetail: string = (this.data.length > 42) ? this.data[42] : '';

    constructor(
        public _value: string,
        public _mel: EmrMel
    ) { }

    save = (): void => {
        if (this.isNew) {
            let isError = this.validateAdd();
            let response;
            if (isError === '') {
                response = this._mel.melFunc('{IMMUN_ADD("' + this.toStringAdd() + '")}');
                if (response < 0) {
                    alert(response);
                }
            } else {
                alert(isError);
            }
        } else {
            // update
        }
    };

    toMelString = (): string => {
        return this._value;
    };

    validateAdd = (): string => {
        let errorMessage = ' is required.';
        // check required parameters
        if (this.vaccineGroupName === '') {
            return 'vaccineGroupName' + errorMessage;
        }
        if (this.wasGiven === '') {
            return 'wasGiven' + errorMessage;
        }
        if (this.historical === '') {
            return 'historical' + errorMessage;
        }
        if (this.vfcElegibility === '') {
            return 'vfcElegibility' + errorMessage;
        }
        if (this.administeredDate === '') {
            return 'administeredDate' + errorMessage;
        }
        if (this.doseAmount.match(/[^0-9.]/g)) {
            return 'doseAmount should be numeric.';
        }
        return '';
    };

    toStringAdd = (): string => {
        return this.vaccineGroupName + '^' + this.vaccineName + '^' + this.medicalDisplayName + '^' + this.series + '^' + this.wasGiven +
            '^' + this.reasonNotGiven + '^' + this.historical + '^' + this.historicalSource + '^' + this.vfcElegibility + '^' + this.ddid +
            '^' + this.dnid + '^' + this.gpi + '^' + this.kdc + '^' + this.ndc + '^' + this.cvxCode + '^' + this.doseAmount + '^' + this.dosageUnitOfMeasure +
            '^' + this.route + '^' + this.routeCode + '^' + this.site + '^' + this.siteCode + '^' + this.manufacturer + '^' + this.manufacturerCode +
            '^' + this.lotNumber + '^' + this.expirationDate + '^' + this.visPublishedDate + '^' + this.administeredByName + '^' + this.administeredDate +
            '^' + this.administeredDateType + '^' + this.administeredComments + '^' + this.advReactionDateTime + '^' + this.advReactionDateTimeType +
            '^' + this.advReactionComments + '^' + this.advReactionCmtByName + '^' + this.signed + '^' + this.signedByName + '^' + this.signedDate +
            '^' + this.reasonRemoved + '^' + this.stopDate + '^' + this.reasonNotGivenMedical + '^' + this.reasonNotGivenMedicalDetail;
    };
}