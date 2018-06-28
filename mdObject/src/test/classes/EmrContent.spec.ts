import { EmrContent } from '../../classes/classes';
import { MockEmrMel, mockResultEmr, MockWindow } from '../mocks/mocks';

describe('Class: EmrContent', () => {

    let component: EmrContent;
    let mockEmrMel = new MockEmrMel();
    let _window = new MockWindow();
    let result: string = mockResultEmr;
    let value: string = '1';

    describe('right value', () => {
        beforeAll(() => {
            component = new EmrContent(result, mockEmrMel as any, _window);
        })

        it('check contentId', () => {
            expect(component.contentId).toEqual('0.0');
        });
        it('check key', () => {
            expect(component.key).toEqual('0.1');
        });
        it('check name', () => {
            expect(component.name).toEqual('0.2');
        });
        it('check value', () => {
            expect(component.value).toEqual('0.3');
        });
        it('check _unk0', () => {
            expect(component._unk0).toEqual('0.4');
        });
        it('check _unk1', () => {
            expect(component._unk1).toEqual('0.5');
        });
        it('check _unk2', () => {
            expect(component._unk2).toEqual('0.6');
        });
        it('check _unk3', () => {
            expect(component._unk3).toEqual('0.7');
        });
        it('check _unk4', () => {
            expect(component._unk4).toEqual('0.8');
        });
        it('check _unk5', () => {
            expect(component._unk5).toEqual('0.9');
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new EmrContent('', mockEmrMel as any, _window);
        })

        it('check contentId', () => {
            expect(component.contentId).toEqual('');
        });
        it('check key', () => {
            expect(component.key).toEqual('');
        });
        it('check name', () => {
            expect(component.name).toEqual('');
        });
        it('check value', () => {
            expect(component.value).toEqual('');
        });
        it('check _unk0', () => {
            expect(component._unk0).toEqual('');
        });
        it('check _unk1', () => {
            expect(component._unk1).toEqual('');
        });
        it('check _unk2', () => {
            expect(component._unk2).toEqual('');
        });
        it('check _unk3', () => {
            expect(component._unk3).toEqual('');
        });
        it('check _unk4', () => {
            expect(component._unk4).toEqual('');
        });
        it('check _unk5', () => {
            expect(component._unk5).toEqual('');
        });
    })

    describe('methods', () => {
        beforeEach(() => {
            component = new EmrContent(result, mockEmrMel as any, _window);
            spyOn(component._mel, 'melFunc')
                .and
                .returnValue('');
        })

        describe('toAddString', () => {
            it('right value', () => {
                spyOn(_window, 'btoa')
                    .and
                    .returnValue('123');
                let _result = component.toAddString(value);
                let __result = component.key + '^' +
                    component.name + '^' +
                    '123' + '^' +
                    component._unk0 + '^' +
                    component._unk1 + '^' +
                    component._unk2 + '^' +
                    component._unk3 + '^' +
                    component._unk4 + '^' +
                    component._unk5;
                expect(_result).toEqual(__result);
                expect(_window.btoa).toHaveBeenCalledWith(component.value);
            })
            it('wrong value', () => {
                spyOn(_window, 'btoa')
                    .and
                    .returnValue('');
                let _result = component.toAddString(null);
                let __result = component.key + '^' +
                    component.name + '^' +
                    component.value + '^' +
                    component._unk0 + '^' +
                    component._unk1 + '^' +
                    component._unk2 + '^' +
                    component._unk3 + '^' +
                    component._unk4 + '^' +
                    component._unk5;
                expect(_result).toEqual(__result);
                expect(_window.btoa).not.toHaveBeenCalled();
            })
        })
        describe('save', () => {
            beforeEach(() => {
                spyOn(component, 'toAddString')
                    .and
                    .returnValue(component.toAddString(value));
            })

            it('isNew == true', () => {
                component = new EmrContent(null, mockEmrMel as any, _window);
                spyOn(component, 'toAddString')
                    .and
                    .returnValue(component.toAddString(value));
                component.save(value);
                expect(component._mel.melFunc).toHaveBeenCalledWith('{MEL_ADD_CONTENT("' + component.toAddString(value) + '")}');
                expect((component as any).isNew).toEqual(false);
                expect(component.toAddString).toHaveBeenCalled();
            })
            it('isNew == false', () => {
                component.save(value);
                expect(component._mel.melFunc).toHaveBeenCalledWith('{MEL_REMOVE_CONTENT("' + component.contentId + '")}');
                expect(component._mel.melFunc).toHaveBeenCalledWith('{MEL_ADD_CONTENT("' + component.toAddString(value) + '")}');
                expect(component.toAddString).toHaveBeenCalled();
            })
        })
        it('remove', () => {
            component.remove();
            expect(component._mel.melFunc).toHaveBeenCalledWith('{MEL_REMOVE_CONTENT("' + component.contentId + '")}');
        })
    })

})