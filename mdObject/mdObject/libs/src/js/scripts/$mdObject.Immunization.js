var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="$mdobject.objectbase.ts" />
var $mdObject;
(function ($mdObject) {
    var Immunization = (function (_super) {
        __extends(Immunization, _super);
        function Immunization(value) {
            var _this = _super.call(this) || this;
            _this.save = function () {
                if (this.isNew) {
                    var isError = this.validateAdd(), response;
                    if (isError === '') {
                        response = this.getPatientProperty(response, '{IMMUN_ADD("' + this.toStringAdd() + '")}'); //_mel.melFunc('{IMMUN_ADD("' + this.toStringAdd() + '")}');
                        if (response < 0) {
                            alert(response);
                        }
                    }
                    else {
                        alert(isError);
                    }
                }
                else {
                    // update
                }
            };
            _this.toMelString = function () {
                return this._value;
            };
            _this.validateAdd = function () {
                var errorMessage = ' is required.';
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
            _this.toStringAdd = function () {
                return this.vaccineGroupName + '^' + this.vaccineName + '^' + this.medicalDisplayName + '^' + this.series + '^' + this.wasGiven +
                    '^' + this.reasonNotGiven + '^' + this.historical + '^' + this.historicalSource + '^' + this.vfcElegibility + '^' + this.ddid +
                    '^' + this.dnid + '^' + this.gpi + '^' + this.kdc + '^' + this.ndc + '^' + this.cvxCode + '^' + this.doseAmount + '^' + this.dosageUnitOfMeasure +
                    '^' + this.route + '^' + this.routeCode + '^' + this.site + '^' + this.siteCode + '^' + this.manufacturer + '^' + this.manufacturerCode +
                    '^' + this.lotNumber + '^' + this.expirationDate + '^' + this.visPublishedDate + '^' + this.administeredByName + '^' + this.administeredDate +
                    '^' + this.administeredDateType + '^' + this.administeredComments + '^' + this.advReactionDateTime + '^' + this.advReactionDateTimeType +
                    '^' + this.advReactionComments + '^' + this.advReactionCmtByName + '^' + this.signed + '^' + this.signedByName + '^' + this.signedDate +
                    '^' + this.reasonRemoved + '^' + this.stopDate + '^' + this.reasonNotGivenMedical + '^' + this.reasonNotGivenMedicalDetail;
            };
            _this._value = value;
            var data = value === undefined ? [] : value.split('^');
            _this.isNew = value === undefined ? true : false;
            _this.immunizationId = (data.length > 0) ? data[0] : '';
            _this.immunizationGroupId = (data.length > 1) ? data[1] : '';
            _this.vaccineGroupName = (data.length > 2) ? data[2] : '';
            _this.vaccineName = (data.length > 3) ? data[3] : '';
            _this.medicalDisplayName = (data.length > 4) ? data[4] : '';
            _this.series = (data.length > 5) ? data[5] : '';
            _this.wasGiven = (data.length > 6) ? data[6] : '';
            _this.reasonNotGiven = (data.length > 7) ? data[7] : '';
            _this.historical = (data.length > 8) ? data[8] : '';
            _this.historicalSource = (data.length > 9) ? data[9] : '';
            _this.vfcElegibility = (data.length > 10) ? data[10] : '';
            _this.ddid = (data.length > 11) ? data[11] : '';
            _this.dnid = (data.length > 12) ? data[12] : '';
            _this.gpi = (data.length > 13) ? data[13] : '';
            _this.kdc = (data.length > 14) ? data[14] : '';
            _this.ndc = (data.length > 15) ? data[15] : '';
            _this.cvxCode = (data.length > 16) ? data[16] : '';
            _this.doseAmount = (data.length > 17) ? data[17] : '';
            _this.dosageUnitOfMeasure = (data.length > 18) ? data[18] : '';
            _this.route = (data.length > 19) ? data[19] : '';
            _this.routeCode = (data.length > 20) ? data[20] : '';
            _this.site = (data.length > 21) ? data[21] : '';
            _this.siteCode = (data.length > 22) ? data[22] : '';
            _this.manufacturer = (data.length > 23) ? data[23] : '';
            _this.manufacturerCode = (data.length > 24) ? data[24] : '';
            _this.lotNumber = (data.length > 25) ? data[25] : '';
            _this.expirationDate = (data.length > 26) ? data[26] : '';
            _this.visPublishedDate = (data.length > 27) ? data[27] : '';
            _this.administeredByName = (data.length > 28) ? data[28] : '';
            _this.administeredDate = (data.length > 29) ? data[29] : '';
            _this.administeredDateType = (data.length > 30) ? data[30] : '';
            _this.administeredComments = (data.length > 31) ? data[31] : '';
            _this.advReactionDateTime = (data.length > 32) ? data[32] : '';
            _this.advReactionDateTimeType = (data.length > 33) ? data[33] : '';
            _this.advReactionComments = (data.length > 34) ? data[34] : '';
            _this.advReactionCmtByName = (data.length > 35) ? data[35] : '';
            _this.signed = (data.length > 36) ? data[36] : '';
            _this.signedByName = (data.length > 37) ? data[37] : '';
            _this.signedDate = (data.length > 38) ? data[38] : '';
            _this.reasonRemoved = (data.length > 39) ? data[39] : '';
            _this.stopDate = (data.length > 40) ? data[40] : '';
            _this.reasonNotGivenMedical = (data.length > 41) ? data[41] : '';
            _this.reasonNotGivenMedicalDetail = (data.length > 42) ? data[42] : '';
            return _this;
        }
        return Immunization;
    }($mdObject.ObjectBase));
    $mdObject.Immunization = Immunization;
})($mdObject || ($mdObject = {}));
