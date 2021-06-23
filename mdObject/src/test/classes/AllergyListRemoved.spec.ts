import { AllergyListRemoved, AllergyList } from '../../classes/classes';
import { mockResultEmr } from '../mocks/mocks';

describe('Class: AllergyListRemoved', () => {

    let component: AllergyListRemoved;
    let result: string = mockResultEmr;

    beforeAll(() => {
        component = new AllergyListRemoved(result);
    });

    it('is defined', () => {
        expect(component).toBeDefined();
    })

    it('extends AllergyList', () => {
        expect(component instanceof AllergyList).toEqual(true);
    })

    it('extends AllergyListRemoved', () => {
        expect(component instanceof AllergyListRemoved).toEqual(true);
    })

    describe('test value', () => {
        beforeAll(() => {
            component = new AllergyListRemoved("PENICILLIN^11/05/2013^08/11/2020^C^DRUG^Dermatological problems, e.g., rash, hives;^0110000000^Critical^1912769621009340");
        });
        it('check name', () => {
            expect(component.name).toEqual('PENICILLIN');
        });
        it('check onSetDate', () => {
            expect(new Date(component.onSetDate)).toEqual(component.onSetDate);
        });
        it('check stopDate', () => {
            expect(component.stopDate).toEqual('08/11/2020');
        });
        it('check criticalIndicator', () => {
            expect(component.criticalIndicator).toEqual('C');
        });
        it('check classification', () => {
            expect(component.classification).toEqual('DRUG');
        });
        it('check description', () => {
            expect(component.description).toEqual('Dermatological problems, e.g., rash, hives;');
        });
        it('check gpiCode', () => {
            expect(component.gpiCode).toEqual('0110000000');
        });
        it('check severity', () => {
            expect(component.severity).toEqual('Critical');
        });
        it('check allergyId', () => {
            expect(component.allergyId).toEqual('1912769621009340');
        });
    })
})

