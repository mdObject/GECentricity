import { EmrContent } from '../../classes';
import { ObjectState } from '../../enums';
import { MockEmrMel, mockResultEmr, MockWindow } from '../mocks/mocks';

describe('Class: EmrContent', () => {

    let component: EmrContent;
    let mockEmrMel = new MockEmrMel();
    let _window = new MockWindow();
    let result: string = mockResultEmr;

    describe('right value', () => {
        beforeAll(() => {
            component = new EmrContent({ data: result, mel: mockEmrMel as any });
        })

        it('check contentId', () => {
            expect(component.contentId).toEqual('0.0');
        });
        it('check namespace', () => {
            expect(component.namespace).toEqual('0.1');
        });
        it('check nodeName', () => {
            expect(component.nodeName).toEqual('0.2');
        });
        it('check displayName', () => {
            expect(component.displayName).toEqual('0.3');
        });
        it('check sourceName', () => {
            expect(component.sourceName).toEqual('0.4');
        });
        it('check code', () => {
            expect(component.code).toEqual('0.5');
        });
        it('check codeType', () => {
            expect(component.codeType).toEqual('0.6');
        });
        it('check contentGroup', () => {
            expect(component.contentGroup).toEqual('0.7');
        });
        it('check listOrder', () => {
            expect(component.listOrder).toEqual('0.8');
        });
        it('check contentDefault', () => {
            expect(component.contentDefault).toEqual('0.9');
        });
    })

    describe('default value', () => {
        beforeAll(() => {
            component = new EmrContent({ data: '', mel: mockEmrMel as any });
        })

        it('check contentId', () => {
            expect(component.contentId).toEqual('');
        });
        it('check namespace', () => {
            expect(component.namespace).toEqual('');
        });
        it('check nodeName', () => {
            expect(component.nodeName).toEqual('');
        });
        it('check displayName', () => {
            expect(component.displayName).toEqual('');
        });
        it('check sourceName', () => {
            expect(component.sourceName).toEqual('');
        });
        it('check code', () => {
            expect(component.code).toEqual('');
        });
        it('check codeType', () => {
            expect(component.codeType).toEqual('');
        });
        it('check contentGroup', () => {
            expect(component.contentGroup).toEqual('');
        });
        it('check listOrder', () => {
            expect(component.listOrder).toEqual('');
        });
        it('check contentDefault', () => {
            expect(component.contentDefault).toEqual('');
        });
    })

    describe('methods', () => {
        beforeEach(() => {
            component = new EmrContent({ data: result, mel: mockEmrMel as any });
            spyOn((component as any)._mel, 'melFunc')
                .and
                .returnValue('');
        })

        describe('toAddString', () => {
            it('right value', () => {
                let _result = (component as any).toAddString();
                let __result = component.namespace + '^' +
                    component.nodeName + '^' +
                    component.displayName + '^' +
                    component.sourceName + '^' +
                    component.code + '^' +
                    component.codeType + '^' +
                    component.contentGroup + '^' +
                    component.listOrder + '^' +
                    component.contentDefault;
                expect(_result).toEqual(__result);
            })
            it('wrong value', () => {
                spyOn(_window, 'btoa')
                    .and
                    .returnValue('');
                let _result = (component as any).toAddString();
                let __result = component.namespace + '^' +
                    component.nodeName + '^' +
                    component.displayName + '^' +
                    component.sourceName + '^' +
                    component.code + '^' +
                    component.codeType + '^' +
                    component.contentGroup + '^' +
                    component.listOrder + '^' +
                    component.contentDefault;
                expect(_result).toEqual(__result);
                expect(_window.btoa).not.toHaveBeenCalled();
            })
        })
        describe('save', () => {
            beforeEach(() => {
                spyOn((component as any), 'toAddString')
                    .and
                    .returnValue((component as any).toAddString());
            })

            it('ObjectState.Add', () => {
                component = new EmrContent({ data: null, mel: mockEmrMel as any });
                component.state = ObjectState.Add;

                spyOn((component as any), 'toAddString')
                    .and
                    .returnValue((component as any).toAddString());
                component.save();
                expect((component as any)._mel.melFunc).toHaveBeenCalledWith('{MEL_ADD_CONTENT("' + (component as any).toAddString() + '")}');
                expect((component as any).toAddString).toHaveBeenCalled();
            })
            it('ObjectState.Update', () => {
                component.state = ObjectState.Update;
                component.save();
                expect((component as any)._mel.melFunc).toHaveBeenCalledWith('{MEL_UPDATE_CONTENT("' + component.contentId + '","' + (component as any).toChangeString() +  '")}');
                expect((component as any).toAddString).toHaveBeenCalled();
            })
        })
        it('remove', () => {
            component.state = ObjectState.Remove;
            component.save();
            expect((component as any)._mel.melFunc).toHaveBeenCalledWith('{MEL_REMOVE_CONTENT("' + component.contentId + '")}');
        })
    })

})