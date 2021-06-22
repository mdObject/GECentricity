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
            expect(component.onSetDate).toEqual(new Date('1999-12-31T22:00:00.000Z'));
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
            expect(component.stopDate).toEqual(null);
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
            expect(component.onSetDate).toEqual(undefined);
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

    describe('test value', () => {
        beforeAll(() => {
            component = new AllergyList("CATS^08/01/2020^^ENVIRONMENT^Cats are scary me^^Moderate^1912765641008780");
        });
        it('check name', () => {
            expect(component.name).toEqual('CATS');
        });
        it('check onSetDate', () => {
            expect(component.onSetDate).toEqual(new Date('2020-07-31T21:00:00.000Z'));
        });
        it('check classification', () => {
            expect(component.classification).toEqual('ENVIRONMENT');
        });
        it('check description', () => {
            expect(component.description).toEqual('Cats are scary me');
        });
        it('check gpiCode', () => {
            expect(component.gpiCode).toEqual('');
        });
        it('check severity', () => {
            expect(component.severity).toEqual('Moderate');
        });
        it('check allergyId', () => {
            expect(component.allergyId).toEqual('1912765641008780');
        });
    })
})