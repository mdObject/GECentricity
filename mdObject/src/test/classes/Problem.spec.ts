import { Problem } from '../../classes';
import { ObjectState, ObjectStatus } from '../../enums';
import { Condition } from '../../fhir';

describe('Class: Problem', () => {

    let component: Problem;

    describe('right value', () => {
        beforeAll(() => {
            component = new Problem();
        })

        it('check problemId', () => {
            expect(component.problemId).toEqual('');
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new Problem();
        })

        it('check type', () => {
            expect(component.type).toEqual('');
        });
        it('check description', () => {
            expect(component.description).toEqual('');
        });
        it('check codeIcd9', () => {
            expect(component.codeIcd9).toEqual('');
        });
        it('check comment', () => {
            expect(component.comment).toEqual('');
        });
        it('check onsetDate', () => {
            expect(component.onsetDate).toEqual(undefined);
        });
        it('check stopDate', () => {
            expect(component.stopDate).toEqual(undefined);
        });
        it('check stopReason', () => {
            expect(component.stopReason).toEqual('');
        });
        it('check codeIcd10', () => {
            expect(component.codeIcd10).toEqual('');
        });
        it('check lastModifiedDate', () => {
            expect(component.lastModifiedDate).toEqual('');
        });
        it('check problemId', () => {
            expect(component.problemId).toEqual('');
        });
        it('check code (codeIcd9 = empty && codeIcd10 = ICD10-A)', () => {
            component.codeIcd9 = '';
            component.codeIcd10 = 'ICD10-A';
            expect(component.code).toEqual('ICD10-A');
        });
        it('check code (codeIcd9 = ICD-B && codeIcd10 = ICD10-A)', () => {
            component.codeIcd9 = 'ICD-B';
            component.codeIcd10 = 'ICD10-A';
            expect(component.code).toEqual('ICD-B|ICD10-A');
        });
        it('check code (codeIcd9 = empty && codeIcd10 = empty)', () => {
            component.codeIcd9 = '';
            component.codeIcd10 = '';
            expect(component.code).toEqual('');
        });
        it('check code (codeIcd9 = ICD-B && codeIcd10 = empty)', () => {
            component.codeIcd9 = 'ICD-B';
            component.codeIcd10 = '';
            expect(component.code).toEqual('ICD-B');
        });
    })

    describe('constructor', () => {
        it('check parameterised constructor', () => {
            component = new Problem();
            component.codeIcd9 = 'ICD-B';
            component.codeIcd10 = 'ICD10-A';
            component.comment = 'mycomments';
            component.description = 'MyDescription';
            component.problemId = '12345';
            component.onsetDate = new Date();
            component.stopDate = new Date();
            component.note = 'My note';
            component.state = ObjectState.Add;
            component.status = ObjectStatus.Added;

            let newComponent = new Problem(component);
            
            expect(newComponent.problemId).toEqual(component.problemId);
            expect(newComponent.codeIcd9).toEqual(component.codeIcd9);
            expect(newComponent.codeIcd10).toEqual(component.codeIcd10);
            expect(newComponent.comment).toEqual(component.comment);
            expect(newComponent.onsetDate).toEqual(component.onsetDate);
            expect(newComponent.stopDate).toEqual(component.stopDate);
            expect(newComponent.note).toEqual(component.note);
            expect(newComponent.state).toEqual(component.state);
            expect(newComponent.status).toEqual(component.status);
        });
    });

    describe('fromFhir', () => {
        it('Sample1', () => {
            let condition: Condition = {
                "resourceType": "Condition",
                "id": "sprid-1239657128000620",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-02-18T20:48:19.034+00:00"
                },
                "patient": { "reference": "Patient/pid-1239620410000620" },
                "code": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/icd-9-cm",
                            "code": "ICD-413.9",
                            "display": "ICD9"
                        }
                    ],
                    "text": "ANGINA  FUNCTIONAL CLASS III"
                },
                "clinicalStatus": "active",
                "verificationStatus": "confirmed",
                "onsetDateTime": "2008-03-18T00:00:00",
                "abatementDateTime": "4700-12-31T00:00:00",
                "notes": "  new stable angina ETT ECHO due on 5 28 99 at Evergreen"
            };

            let problem: Problem = Problem.fromFhir(condition);
            expect(problem.problemId).toEqual('sprid-1239657128000620');
            expect(problem.codeIcd9).toEqual('ICD-413.9');
            expect(problem.comment).toEqual('  new stable angina ETT ECHO due on 5 28 99 at Evergreen');
            expect(problem.description).toEqual('ANGINA  FUNCTIONAL CLASS III');
            expect(problem.onsetDate).toEqual(new Date('2008-03-18T00:00:00'));
            expect(problem.stopDate).toEqual(new Date('4700-12-31T00:00:00'));
        });
    });
})