//
import { Immunization } from '../../classes/classes';
import { mockResultEmr, MockEmrMel } from '../mocks/mocks';

describe('Class: Immunization', () => {
    let component: Immunization;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('right value', () => {
        beforeAll(() => {
            component = new Immunization(result, mockEmrMel as any);
        });

        it('check immunizationId', () => { expect(component.immunizationId).toEqual('0.0'); })
        it('check immunizationGroupId', () => { expect(component.immunizationGroupId).toEqual('0.1'); })
        it('check vaccineGroupName', () => { expect(component.vaccineGroupName).toEqual('0.2'); })
        it('check vaccineName', () => { expect(component.vaccineName).toEqual('0.3'); })
        it('check medicalDisplayName', () => { expect(component.medicalDisplayName).toEqual('0.4'); })
        it('check series', () => { expect(component.series).toEqual('0.5'); })
        it('check wasGiven', () => { expect(component.wasGiven).toEqual('0.6'); })
        it('check reasonNotGiven', () => { expect(component.reasonNotGiven).toEqual('0.7'); })
        it('check historical', () => { expect(component.historical).toEqual('0.8'); })
        it('check historicalSource', () => { expect(component.historicalSource).toEqual('0.9'); })
        it('check vfcElegibility', () => { expect(component.vfcElegibility).toEqual('0.10'); })
        it('check ddid', () => { expect(component.ddid).toEqual('0.11'); })
        it('check dnid', () => { expect(component.dnid).toEqual('0.12'); })
        it('check gpi', () => { expect(component.gpi).toEqual('0.13'); })
        it('check kdc', () => { expect(component.kdc).toEqual('0.14'); })
        it('check ndc', () => { expect(component.ndc).toEqual('0.15'); })
        it('check cvxCode', () => { expect(component.cvxCode).toEqual('0.16'); })
        it('check doseAmount', () => { expect(component.doseAmount).toEqual('0.17'); })
        it('check dosageUnitOfMeasure', () => { expect(component.dosageUnitOfMeasure).toEqual('0.18'); })
        it('check route', () => { expect(component.route).toEqual('0.19'); })
        it('check routeCode', () => { expect(component.routeCode).toEqual('0.20'); })
        it('check site', () => { expect(component.site).toEqual('0.21'); })
        it('check siteCode', () => { expect(component.siteCode).toEqual('0.22'); })
        it('check manufacturer', () => { expect(component.manufacturer).toEqual('0.23'); })
        it('check manufacturerCode', () => { expect(component.manufacturerCode).toEqual('0.24'); })
        it('check lotNumber', () => { expect(component.lotNumber).toEqual('0.25'); })
        it('check expirationDate', () => { expect(component.expirationDate).toEqual('0.26'); })
        it('check visPublishedDate', () => { expect(component.visPublishedDate).toEqual('0.27'); })
        it('check administeredByName', () => { expect(component.administeredByName).toEqual('0.28'); })
        it('check administeredDate', () => { expect(component.administeredDate).toEqual('0.29'); })
        it('check administeredDateType', () => { expect(component.administeredDateType).toEqual('0.30'); })
        it('check administeredComments', () => { expect(component.administeredComments).toEqual('0.31'); })
        it('check advReactionDateTime', () => { expect(component.advReactionDateTime).toEqual('0.32'); })
        it('check advReactionDateTimeType', () => { expect(component.advReactionDateTimeType).toEqual('0.33'); })
        it('check advReactionComments', () => { expect(component.advReactionComments).toEqual('0.34'); })
        it('check advReactionCmtByName', () => { expect(component.advReactionCmtByName).toEqual('0.35'); })
        it('check signed', () => { expect(component.signed).toEqual('0.36'); })
        it('check signedByName', () => { expect(component.signedByName).toEqual('0.37'); })
        it('check signedDate', () => { expect(component.signedDate).toEqual('0.38'); })
        it('check reasonRemoved', () => { expect(component.reasonRemoved).toEqual('0.39'); })
        it('check stopDate', () => { expect(component.stopDate).toEqual('0.40'); })
        it('check reasonNotGivenMedical', () => { expect(component.reasonNotGivenMedical).toEqual('0.41'); })
        it('check reasonNotGivenMedicalDetail', () => { expect(component.reasonNotGivenMedicalDetail).toEqual('0.42'); })

    })

    describe('default value', () => {
        beforeAll(() => {
            component = new Immunization('', mockEmrMel as any);
        });

        it('check immunizationId', () => { expect(component.immunizationId).toEqual(''); })
        it('check immunizationGroupId', () => { expect(component.immunizationGroupId).toEqual(''); })
        it('check vaccineGroupName', () => { expect(component.vaccineGroupName).toEqual(''); })
        it('check vaccineName', () => { expect(component.vaccineName).toEqual(''); })
        it('check medicalDisplayName', () => { expect(component.medicalDisplayName).toEqual(''); })
        it('check series', () => { expect(component.series).toEqual(''); })
        it('check wasGiven', () => { expect(component.wasGiven).toEqual(''); })
        it('check reasonNotGiven', () => { expect(component.reasonNotGiven).toEqual(''); })
        it('check historical', () => { expect(component.historical).toEqual(''); })
        it('check historicalSource', () => { expect(component.historicalSource).toEqual(''); })
        it('check vfcElegibility', () => { expect(component.vfcElegibility).toEqual(''); })
        it('check ddid', () => { expect(component.ddid).toEqual(''); })
        it('check dnid', () => { expect(component.dnid).toEqual(''); })
        it('check gpi', () => { expect(component.gpi).toEqual(''); })
        it('check kdc', () => { expect(component.kdc).toEqual(''); })
        it('check ndc', () => { expect(component.ndc).toEqual(''); })
        it('check cvxCode', () => { expect(component.cvxCode).toEqual(''); })
        it('check doseAmount', () => { expect(component.doseAmount).toEqual(''); })
        it('check dosageUnitOfMeasure', () => { expect(component.dosageUnitOfMeasure).toEqual(''); })
        it('check route', () => { expect(component.route).toEqual(''); })
        it('check routeCode', () => { expect(component.routeCode).toEqual(''); })
        it('check site', () => { expect(component.site).toEqual(''); })
        it('check siteCode', () => { expect(component.siteCode).toEqual(''); })
        it('check manufacturer', () => { expect(component.manufacturer).toEqual(''); })
        it('check manufacturerCode', () => { expect(component.manufacturerCode).toEqual(''); })
        it('check lotNumber', () => { expect(component.lotNumber).toEqual(''); })
        it('check expirationDate', () => { expect(component.expirationDate).toEqual(''); })
        it('check visPublishedDate', () => { expect(component.visPublishedDate).toEqual(''); })
        it('check administeredByName', () => { expect(component.administeredByName).toEqual(''); })
        it('check administeredDate', () => { expect(component.administeredDate).toEqual(''); })
        it('check administeredDateType', () => { expect(component.administeredDateType).toEqual(''); })
        it('check administeredComments', () => { expect(component.administeredComments).toEqual(''); })
        it('check advReactionDateTime', () => { expect(component.advReactionDateTime).toEqual(''); })
        it('check advReactionDateTimeType', () => { expect(component.advReactionDateTimeType).toEqual(''); })
        it('check advReactionComments', () => { expect(component.advReactionComments).toEqual(''); })
        it('check advReactionCmtByName', () => { expect(component.advReactionCmtByName).toEqual(''); })
        it('check signed', () => { expect(component.signed).toEqual(''); })
        it('check signedByName', () => { expect(component.signedByName).toEqual(''); })
        it('check signedDate', () => { expect(component.signedDate).toEqual(''); })
        it('check reasonRemoved', () => { expect(component.reasonRemoved).toEqual(''); })
        it('check stopDate', () => { expect(component.stopDate).toEqual(''); })
        it('check reasonNotGivenMedical', () => { expect(component.reasonNotGivenMedical).toEqual(''); })
        it('check reasonNotGivenMedicalDetail', () => { expect(component.reasonNotGivenMedicalDetail).toEqual(''); })

    })

    describe('methods', () => {
        beforeEach(() => {
            component = new Immunization(result, mockEmrMel as any);
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue('');
        })

        describe('save', () => {
            beforeEach(() => {
                component = new Immunization(null, mockEmrMel as any);
            })

            it('success', () => {
                spyOn(component, 'validateAdd')
                    .and
                    .returnValue('');
                component.save()
                expect(component.validateAdd).toHaveBeenCalled();
                expect(mockEmrMel.melFunc).toHaveBeenCalled();
            })
            it('error', () => {
                spyOn(component, 'validateAdd')
                    .and
                    .returnValue('error');
                component.save()
                expect(component.validateAdd).toHaveBeenCalled();
                expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
            })
        })
        it('toMelString', () => {
            let _result = component.toMelString()
            expect(_result).toEqual(component._value);
        })
        describe('validateAdd', () => {
            let errorMessage = ' is required.';
            beforeEach(() => {
                component = new Immunization(null, mockEmrMel as any);
            })

            it('vaccineGroupName', () => {
                let _result = component.validateAdd();
                expect(_result).toEqual('vaccineGroupName' + errorMessage);
            })
            it('wasGiven', () => {
                component.vaccineGroupName = 'q';
                let _result = component.validateAdd();
                expect(_result).toEqual('wasGiven' + errorMessage);
            })
            it('historical', () => {
                component.vaccineGroupName = 'q';
                component.wasGiven = 'q';
                let _result = component.validateAdd();
                expect(_result).toEqual('historical' + errorMessage);
            })
            it('vfcElegibility', () => {
                component.vaccineGroupName = 'q';
                component.wasGiven = 'q';
                component.historical = 'q';
                let _result = component.validateAdd();
                expect(_result).toEqual('vfcElegibility' + errorMessage);
            })
            it('administeredDate', () => {
                component.vaccineGroupName = 'q';
                component.wasGiven = 'q';
                component.historical = 'q';
                component.vfcElegibility = 'q';
                let _result = component.validateAdd();
                expect(_result).toEqual('administeredDate' + errorMessage);
            })
            it('doseAmount', () => {
                component.vaccineGroupName = 'q';
                component.wasGiven = 'q';
                component.historical = 'q';
                component.vfcElegibility = 'q';
                component.administeredDate = 'q';
                let _result = component.validateAdd();
                expect(_result).toEqual('doseAmount should be numeric.');
            })
            it('default', () => {
                component.vaccineGroupName = 'q';
                component.wasGiven = 'q';
                component.historical = 'q';
                component.vfcElegibility = 'q';
                component.administeredDate = 'q';
                component.doseAmount = '1123123';
                let _result = component.validateAdd();
                expect(_result).toEqual('');
            })
        })
        it('toStringAdd', () => {
            let _result = component.toStringAdd();
            let __result = component.vaccineGroupName + '^' +
                component.vaccineName + '^' +
                component.medicalDisplayName + '^' +
                component.series + '^' +
                component.wasGiven + '^' +
                component.reasonNotGiven + '^' +
                component.historical + '^' +
                component.historicalSource + '^' +
                component.vfcElegibility + '^' +
                component.ddid + '^' +
                component.dnid + '^' +
                component.gpi + '^' +
                component.kdc + '^' +
                component.ndc + '^' +
                component.cvxCode + '^' +
                component.doseAmount + '^' +
                component.dosageUnitOfMeasure + '^' +
                component.route + '^' +
                component.routeCode + '^' +
                component.site + '^' +
                component.siteCode + '^' +
                component.manufacturer + '^' +
                component.manufacturerCode + '^' +
                component.lotNumber + '^' +
                component.expirationDate + '^' +
                component.visPublishedDate + '^' +
                component.administeredByName + '^' +
                component.administeredDate + '^' +
                component.administeredDateType + '^' +
                component.administeredComments + '^' +
                component.advReactionDateTime + '^' +
                component.advReactionDateTimeType + '^' +
                component.advReactionComments + '^' +
                component.advReactionCmtByName + '^' +
                component.signed + '^' +
                component.signedByName + '^' +
                component.signedDate + '^' +
                component.reasonRemoved + '^' +
                component.stopDate + '^' +
                component.reasonNotGivenMedical + '^' +
                component.reasonNotGivenMedicalDetail;
            expect(_result).toEqual(__result)
        })

    })

})