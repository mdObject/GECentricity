import { Problem } from '../../classes';

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
})