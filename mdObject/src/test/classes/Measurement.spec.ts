import { Measurement } from '../../classes';
import { MockEmrMel } from '../mocks/mocks';

describe('Class: Measurement', () => {

    let component: Measurement;
    let mockEmrMel = new MockEmrMel();

    beforeAll(() => {
        component = new Measurement(true, '18', '18', mockEmrMel as any);
    });

    describe('check', () => {
        beforeEach(() => {
            spyOn(component._mel, 'getObs')
                .and
                .returnValue('');
        })

        it('weight', () => {
            component.weight;
            expect(component._mel.getObs).toHaveBeenCalledWith(component.isCurrent, component._weight)
        })
        it('height', () => {
            component.height;
            expect(component._mel.getObs).toHaveBeenCalledWith(component.isCurrent, component._height)
        })
    })
})