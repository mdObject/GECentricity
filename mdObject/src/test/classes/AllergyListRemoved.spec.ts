//
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
})