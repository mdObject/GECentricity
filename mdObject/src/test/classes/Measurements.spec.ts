import { Measurements, Measurement } from '../../classes';
import { MockEmrMel } from '../mocks/mocks';

describe('Class: Measurements', () => {

    let component: Measurements;
    let mockEmrMel = new MockEmrMel();

    beforeEach(() => {
        component = new Measurements('18', '18', mockEmrMel as any);
    });

    describe('cache', () => {
        it('current', () => {
            component.current;
            expect(component.current instanceof Measurement).toEqual(true);
        })
        it('previous', () => {
            component.previous;
            expect(component.previous instanceof Measurement).toEqual(true);
        })
    })
    describe('no cache', () => {
        it('current', () => {
            expect(component.current instanceof Measurement).toEqual(true);
        })
        it('previous', () => {
            expect(component.previous instanceof Measurement).toEqual(true);
        })
    })
})