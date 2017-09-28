//
import { Problem } from '../../classes/classes';
import { mockResultEmr } from '../mocks/mocks';

describe('Class: Problem', () => {
    let component: Problem;
    let result: string = mockResultEmr;

    describe('right value', () => {
        beforeAll(() => {
            component = new Problem(result);
        })

        it('check type', () => {
            expect(component.type).toEqual('0.0');
        });
        it('check description', () => {
            expect(component.description).toEqual('0.1');
        });
        it('check codeIcd9', () => {
            expect(component.codeIcd9).toEqual('0.2');
        });
        it('check comment', () => {
            expect(component.comment).toEqual('0.3');
        });
        it('check onsetDate', () => {
            expect(component.onsetDate).toEqual('0.4');
        });
        it('check stopDate', () => {
            expect(component.stopDate).toEqual('0.5');
        });
        it('check stopReason', () => {
            expect(component.stopReason).toEqual('0.6');
        });
        it('check codeIcd10', () => {
            expect(component.codeIcd10).toEqual('0.7');
        });
        it('check lastModifiedDate', () => {
            expect(component.lastModifiedDate).toEqual('0.9');
        });
        it('check problemId', () => {
            expect(component.problemId).toEqual('0');
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new Problem('');
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
            expect(component.onsetDate).toEqual('');
        });
        it('check stopDate', () => {
            expect(component.stopDate).toEqual('');
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