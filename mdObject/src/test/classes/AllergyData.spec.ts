//
import { AllergyData } from '../../classes/classes';

describe('Class: AllergyData', () => {
    let component: AllergyData;

    beforeAll(() => {
        component = new AllergyData();
    });

    it('check default typeof classification',
        () => {
            expect(typeof component.classification == 'string').toEqual(true);
        });
    it('check default typeof description',
        () => {
            expect(typeof component.description == 'string').toEqual(true);
        });
    it('check default typeof gpiCode',
        () => {
            expect(typeof component.gpiCode == 'string').toEqual(true);
        });
    it('check default typeof name',
        () => {
            expect(typeof component.name == 'string').toEqual(true);
        });
    it('check default typeof offDate',
        () => {
            expect(typeof component.offDate == 'string').toEqual(true);
        });
    it('check default typeof onDate',
        () => {
            expect(typeof component.onDate == 'string').toEqual(true);
        });
    it('check default typeof severity',
        () => {
            expect(typeof component.severity == 'string').toEqual(true);
        });

})