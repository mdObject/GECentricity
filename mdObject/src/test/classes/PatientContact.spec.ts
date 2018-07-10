import { PatientContact } from '../../classes/classes';
import { mockResultEmr } from '../mocks/mocks';

describe('Class: PatientContact', () => {

    let component: PatientContact;
    let result: string = mockResultEmr;

    describe('right value', () => {
        beforeAll(() => {
            component = new PatientContact(result);
        });
        it('check name', () => {
            expect(component.name).toEqual('0.0');
        });
        it('check type', () => {
            expect(component.type).toEqual('0.1');
        });
        it('check phone', () => {
            expect(component.phone).toEqual('0.2');
        });
        it('check phoneType', () => {
            expect(component.phoneType).toEqual('0.3');
        });
        it('check address', () => {
            expect(component.address).toEqual('0.4 0.5');
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new PatientContact('');
        });
        it('check name', () => {
            expect(component.name).toEqual('');
        });
        it('check type', () => {
            expect(component.type).toEqual('');
        });
        it('check phone', () => {
            expect(component.phone).toEqual('');
        });
        it('check phoneType', () => {
            expect(component.phoneType).toEqual('');
        });
    })

    describe('methods', () => {
        beforeEach(() => {
            component = new PatientContact(result);
        });
        it('toMelString return value', () => {
            let _result = component.toMelString();
            expect(_result).toEqual(result)
        })
    })
})