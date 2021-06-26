import { Patient, Allergies, ReferringProvider, Phone, Address } from '../../classes';
import { MockEmrMel, mockResultEmr, mockResultFlowsheet } from '../mocks/mocks';

describe('Class: Patient', () => {

    let component: Patient;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;
    let resultFlowsheet: string = mockResultFlowsheet;
    let name = 'name';

    describe('get from cache', () => {
        beforeAll(() => {
            component = new Patient(mockEmrMel as any);
            component.patientId;
            component.pid;
            component.medicalRecordId;
            component.externalId;
            component.printId;
            component.ssn;
            component.firstName;
            component.lastName;
            component.middleName;
            component.labelName;
            component.namePrefix;
            component.nameSuffix;
            component.sex;
            component.race;
            component.ethnicity;
            component.dateOfBirth;
            component.dateOfDeath;
            component.maritalStatus;
            component.language;
            component.email;
            component.contactBy;
            component.contacts;
            component.employmentStatus;
            component.clinicStatus;
            component.primaryCarePhysicianName;
            component.problems;
            component.protocols;
            component.insurances;
            component.immunizations;
            component.locations;

        });
        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('patientId', () => { component.patientId; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('pid', () => { component.pid; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('medicalRecordId', () => { component.medicalRecordId; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('externalId', () => { component.externalId; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('printId', () => { component.printId; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('ssn', () => { component.ssn; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('firstName', () => { component.firstName; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('lastName', () => { component.lastName; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('middleName', () => { component.middleName; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('labelName', () => { component.labelName; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('namePrefix', () => { component.namePrefix; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('nameSuffix', () => { component.nameSuffix; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('sex', () => { component.sex; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('race', () => { component.race; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('ethnicity', () => { component.ethnicity; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('dateOfBirth', () => { component.dateOfBirth; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('dateOfDeath', () => { component.dateOfDeath; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('maritalStatus', () => { component.maritalStatus; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('language', () => { component.language; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('email', () => { component.email; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('contactBy', () => { component.contactBy; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); });
        it('contacts', () => {
            let _result = component.contacts;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('PATIENT.CONTACTS');
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('employmentStatus', () => { component.employmentStatus; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); })
        it('clinicStatus', () => { component.clinicStatus; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); })
        it('primaryCarePhysicianName', () => { component.primaryCarePhysicianName; expect(mockEmrMel.melFunc).not.toHaveBeenCalled(); })
        it('problems', () => {
            let _result = component.problems;
            expect(_result.length).toEqual(2);
            expect(_result.tag).toEqual('PROB_AFTER');
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('protocols', () => {
            let _result = component.protocols;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('LISTPROTOCOLSHORT("list")');
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('insurances', () => {
            spyOn((component as any)._insurances, 'push')
                .and
                .returnValue(result);
            let _result = component.insurances;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(3);
        });
        it('immunizations', () => {
            let _result = component.immunizations;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('IMMUN_GETLIST');
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('locations', () => {
            let _result = component.locations;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(typeof _result.findByType == 'function').toEqual(true);
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });

    });

    describe('get from mel', () => {
        beforeEach(() => {
            component = new Patient(mockEmrMel as any);
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('patientId', () => { component.patientId; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.PATIENTID}'); });
        it('pid', () => { component.pid; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{find("patient", "PID")}'); });
        it('medicalRecordId', () => { component.medicalRecordId; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.MEDRECNO}'); });
        it('externalId', () => { component.externalId; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.EXTERNALID}'); });
        it('printId', () => { component.printId; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.PRINTID}'); });
        it('ssn', () => { component.ssn; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.SOCSECNO}'); });
        it('firstName', () => { component.firstName; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.FIRSTNAME}'); });
        it('lastName', () => { component.lastName; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.LASTNAME}'); });
        it('middleName', () => { component.middleName; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.MIDDLENAME}'); });
        it('labelName', () => { component.labelName; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.LABELNAME}'); });
        it('namePrefix', () => { component.namePrefix; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.TITLE}'); });
        it('nameSuffix', () => { component.nameSuffix; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.ENTITLEMENTS}'); });
        it('sex', () => { component.sex; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.SEX}'); });
        it('race', () => { component.race; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.RACE}'); });
        it('ethnicity', () => { component.ethnicity; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.ETHNICITY}'); });
        it('dateOfBirth', () => { component.dateOfBirth; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.DATEOFBIRTH}'); });
        it('dateOfDeath', () => { component.dateOfDeath; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.DATEOFDEATH}'); });
        it('maritalStatus', () => { component.maritalStatus; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.MARITALSTATUS}'); });
        it('language', () => { component.language; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.PREFLANG}'); });
        it('email', () => { component.email; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.EMAIL}'); });
        it('contactBy', () => { component.contactBy; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.CONTACTBY}'); });
        it('contacts', () => {
            let _result = component.contacts;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('PATIENT.CONTACTS');
            expect(_result.toMelString()).toEqual(result);
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.CONTACTS}');
        });
        it('employmentStatus', () => { component.employmentStatus; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.EMPLSTATUS}'); })
        it('clinicStatus', () => { component.clinicStatus; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.PSTATUS}'); })
        it('primaryCarePhysicianName', () => { component.primaryCarePhysicianName; expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.PCP}'); })
        it('problems', () => {
            let _result = component.problems;
            expect(_result.length).toEqual(2);
            expect(_result.tag).toEqual('PROB_AFTER');
        });
        it('protocols', () => {
            let _result = component.protocols;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('LISTPROTOCOLSHORT("list")');
            expect(_result.toMelString()).toEqual(result);
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{LISTPROTOCOLSHORT("list")}');
        });
        it('insurances', () => {
            let _result = component.insurances;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(3);
        });
        it('immunizations', () => {
            let _result = component.immunizations;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('IMMUN_GETLIST');
            expect(_result.toMelString()).toEqual(result);
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{IMMUN_GETLIST()}');
        });
        it('carePlans', () => {
            let _result = component.carePlans;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(_result.tag).toEqual('MEL_LIST_CARE_PLAN');
            expect(_result.toMelString()).toEqual(result);
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{MEL_LIST_CARE_PLAN("delim","all","all")}');
        });
        it('locations', () => {
            let _result = component.locations;
            expect(Array.isArray(_result)).toEqual(true);
            expect(_result.length).toEqual(1);
            expect(typeof _result.findByType == 'function').toEqual(true);
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.HOMELOCATIONNAME}');
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.HOMELOCATIONABBREVNAME}');
        });

    });

    describe('check', () => {
        it('allergies', () => { expect(component.allergies instanceof Allergies).toEqual(true); })
        it('referringProvider', () => { expect(component.referringProvider instanceof ReferringProvider).toEqual(true); })
        it('phone', () => { expect(component.phone instanceof Phone).toEqual(true); })
        it('address', () => { expect(component.address instanceof Address).toEqual(true); })
    })

    describe('methods', () => {
        beforeEach(() => {
            component = new Patient(mockEmrMel as any);
            
        });

        describe('observations', () => {
            it('from cache', () => {
                component.observations(name);
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(result);
                let _result = component.observations(name);
                expect(Array.isArray(_result)).toEqual(true);
                expect(_result.length).toEqual(2);
                expect(_result.tag).toEqual('LIST_OBS.' + name);
                expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
            })
            it('from mel', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(result);
                let _result = component.observations(name);
                expect(Array.isArray(_result)).toEqual(true);
                expect(_result.length).toEqual(2);
                expect(_result.tag).toEqual('LIST_OBS.' + name);
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{LIST_OBS("' + name + '","Update","Delimited","value")}');
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{LIST_OBS("' + name + '","Signed","Delimited","value")}');
            })
        })

        describe('flowsheetObservations', () => {
            it('from cache', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(resultFlowsheet);
                component.flowsheetObservations(name);

                let _result = component.flowsheetObservations(name);
                expect(Array.isArray(_result)).toEqual(true);

                expect(_result.length).toEqual(39);
                expect(_result.tag).toEqual('GET_FLOWSHEET_VALUES:' + name);
                expect(mockEmrMel.melFunc).toBeCalledTimes(1);
            })
            it('from mel', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(resultFlowsheet);
                let _result = component.flowsheetObservations(name);
                expect(Array.isArray(_result)).toEqual(true);
                expect(_result.length).toEqual(39);
                expect(_result.tag).toEqual('GET_FLOWSHEET_VALUES:' + name);
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{GET_FLOWSHEET_VALUES("' + name + '","DELIM")}');
            })
            it('default', () => {
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(resultFlowsheet);
                let _result = component.flowsheetObservations();
                expect(Array.isArray(_result)).toEqual(true);
                expect(_result.length).toEqual(39);
                expect(_result.tag).toEqual('GET_FLOWSHEET_VALUES:' + resultFlowsheet);
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{_EncodeViewNameBS}');
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{GET_FLOWSHEET_VALUES("' + resultFlowsheet + '","DELIM")}');
            })
        })
    })
})