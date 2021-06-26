import { Observation, ObservationType } from '../../classes';
import { mockResultEmr, MockEmrMel } from '../mocks/mocks';

describe('Class: Observation', () => {

    let component: Observation;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;
    let name = 'qwe';
    let observationType: string = (new ObservationType()).DocumentUnsigned

    describe('methods', () => {
        beforeEach(() => {
            spyOn(mockEmrMel, 'saveObservation')
                .and
                .returnValue('');
            component = new Observation(name, observationType, result, mockEmrMel as any);
            
        })

        describe('save', () => {
            beforeEach(() => {
                component.tag // add to cache
                spyOn(mockEmrMel, 'melFunc')
                    .and
                    .returnValue(component.tag);
            })
            it('right data', () => {
                component.save()
                expect(mockEmrMel.saveObservation).toHaveBeenCalledWith(component.name, component.value, component.date);
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{OBSTAGNOW("' + component.name + '","' + component.tag + '")}');
                expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{OBSMODIFIERNOW("' + component.name + '","' + component.comment + '")}');
            })
            it('wrong data', () => {
                component = new Observation(name, observationType, null, mockEmrMel as any);
                component.tag // add to cache
                component.save()
                expect(mockEmrMel.saveObservation).toHaveBeenCalledWith(component.name, component.value, component.date);
            })
        })
        it('remove', () => {
            component.remove();
        })
        describe('unitOfMeasure', () => {
            it('from cache', () => {
                component.unitOfMeasure;
                spyOn(component._mel, 'melFunc')
                    .and
                    .returnValue('');
                component.unitOfMeasure;
                expect(component._mel.melFunc).not.toHaveBeenCalled();
            })
            it('from mel', () => {
                spyOn(component._mel, 'melFunc')
                    .and
                    .returnValue('');
                component.unitOfMeasure;
                expect(component._mel.melFunc).toHaveBeenCalled();
            })
        })
        describe('tag', () => {
            it('from cache', () => {
                component.tag;
                spyOn(component._mel, 'melFunc')
                    .and
                    .returnValue('');
                component.tag;
                expect(component._mel.melFunc).not.toHaveBeenCalled();
            })
            it('from mel', () => {
                spyOn(component._mel, 'melFunc')
                    .and
                    .returnValue('');
                component.tag;
                expect(component._mel.melFunc).toHaveBeenCalled();
            })
            it('default', () => {
                component = new Observation(name, '', result, mockEmrMel as any);
                spyOn(component._mel, 'melFunc')
                    .and
                    .returnValue('');
                let _result = component.tag;
                expect(component._mel.melFunc).not.toHaveBeenCalled();
                expect(_result).toEqual('');
            })
        })
    })
})