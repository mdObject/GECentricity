import { ObsTermsMap } from '../../classes/classes';

describe('Class: ObsTermsMap', () => {

    let component: ObsTermsMap;

    describe('check', () => {
        beforeAll(() => {
            component = new ObsTermsMap();

        });

        it('weight', () => {
            expect(component.weight).toEqual('Weight');
        });
        it('height', () => {
            expect(component.height).toEqual('Height');
        });
    });
})