import { AllergyList } from '../../classes/classes';
import { mockResultEmr } from '../mocks/mocks';

describe('Class: AllergyList', () => {

    let component: AllergyList;
    let result: string = mockResultEmr;

    beforeAll(() => {
        component = new AllergyList(result);
    });

    describe('right value', () => {
        it('check name', () => {
            expect(component.name).toEqual('0.0');
        });
        it('check onDate', () => {
            expect(component.onDate).toEqual('0.1');
        });
        it('check classification', () => {
            expect(component.classification).toEqual('0.3');
        });
        it('check description', () => {
            expect(component.description).toEqual('0.4');
        });
        it('check gpiCode', () => {
            expect(component.gpiCode).toEqual('0.5');
        });
        it('check severity', () => {
            expect(component.severity).toEqual('0.6');
        });
        it('check offDate', () => {
            expect(component.offDate).toEqual(null);
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new AllergyList('');
        });
        it('check name', () => {
            expect(component.name).toEqual('');
        });
        it('check onDate', () => {
            expect(component.onDate).toEqual('');
        });
        it('check classification', () => {
            expect(component.classification).toEqual('');
        });
        it('check description', () => {
            expect(component.description).toEqual('');
        });
        it('check gpiCode', () => {
            expect(component.gpiCode).toEqual('');
        });
        it('check severity', () => {
            expect(component.severity).toEqual('');
        });
    })
})