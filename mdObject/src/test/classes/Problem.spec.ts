import { Problem } from '../../classes/classes';

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
    })
})