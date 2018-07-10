import { PatientContact } from '../../classes/classes';
import { mockResultAddress } from '../mocks/mocks';

describe('Class: PatientContactAddress', () => {

    let component: PatientContact;
    let result: string = mockResultAddress;

    describe('right value', () => {
        beforeAll(() => {
            component = new PatientContact(result);
        });
        it('check name', () => {
            expect(component.name).toEqual('24-Hour Pharmacy');
        });
        it('check type', () => {
            expect(component.type).toEqual('Pharmacy');
        });
        it('check phone', () => {
            expect(component.phone).toEqual('5036425647');
        });
        it('check phoneType', () => {
            expect(component.phoneType).toEqual('HOME');
        });
        it('check address1', () => {
            expect(component.address1).toEqual('737 SW 185th');
        });
        it('check address2', () => {
            expect(component.address2).toEqual('Apt25');
        });
        it('check city', () => {
            expect(component.city).toEqual('Aloha');
        });
        it('check state', () => {
            expect(component.state).toEqual('OR');
        });
        it('check zip', () => {
            expect(component.zip).toEqual('97007');
        });
        it('check country', () => {
            expect(component.country).toEqual('|Winston MD');
        });
        it('check address', () => {
            expect(component.address).toEqual('737 SW 185th Apt25');
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
        it('check address1', () => {
            expect(component.address1).toEqual('');
        });
        it('check address2', () => {
            expect(component.address2).toEqual('');
        });
        it('check city', () => {
            expect(component.city).toEqual('');
        });
        it('check state', () => {
            expect(component.state).toEqual('');
        });
        it('check zip', () => {
            expect(component.zip).toEqual('');
        });
        it('check country', () => {
            expect(component.country).toEqual('');
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