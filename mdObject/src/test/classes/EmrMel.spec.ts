// 
import { EmrBase } from '../../bases/bases';
import { EmrMel } from '../../classes/classes';
import { MockWindow } from '../mocks/mocks';

describe('Class: EmrMel', () => {
    let component: EmrMel;
    let _window = new MockWindow();
    let name: string = 'qwe';
    let value: string = '1';
    let date: string = new Date().toISOString();

    beforeEach(() => {
        component = new EmrMel(_window);
    });

    it('extends AllergyList', () => {
        expect(component instanceof EmrBase).toEqual(true);
    })

    it('extends AllergyListRemoved', () => {
        expect(component instanceof EmrMel).toEqual(true);
    })

    describe('methods', () => {
        describe('initialization', () => {
            it('success', () => {
                spyOn(_window, 'ActiveXObject')
                    .and
                    .returnValue(_window._ActiveXObjectApp);

                (component as any).initialization();

                expect(_window.ActiveXObject).toHaveBeenCalledWith((component as any).melObjectName);
                expect(component.errorMessage).toEqual(undefined);
            });
            it('success SIMULATOR', () => {
                spyOn(_window, 'ActiveXObject')
                    .and
                    .throwError('qwe');

                (component as any).initialization();

                expect(_window.ActiveXObject).toHaveBeenCalledWith((component as any).melObjectNameSimulator);
                expect(component.errorMessage.indexOf('Unable to load ActiveX interface') > -1).toEqual(true);
            });
        })
        describe('melFunc', () => {
            beforeEach(() => {
                spyOn((component as any).mel, 'eval')
                    .and
                    .returnValue('');
            });

            it('call eval', () => {
                component.melFunc(name);
                expect((component as any).mel.eval).toHaveBeenCalledWith(name);
            })
            it('not call eval', () => {
                (component as any).mel = null;
                let _result = component.melFunc(name);
                expect(_result).toEqual(component.noData);

            })
        })
        describe('saveObservation', () => {
            beforeEach(() => {
                spyOn((component as any).mel, 'OBSNOW')
                    .and
                    .returnValue('');
            });

            it('call OBSNOW', () => {
                component.saveObservation(name, value, date);
                expect((component as any).mel.OBSNOW).toHaveBeenCalledWith(name, value, date);
            })
            it('not call OBSNOW', () => {
                (component as any).mel = null;
                let _result = component.saveObservation(name, value, date);
                expect(_result).toEqual(component.noData);

            })
        })
        describe('getObs', () => {
            beforeEach(() => {
                spyOn((component as any).mel, 'OBSNOW')
                    .and
                    .returnValue('');
                spyOn((component as any).mel, 'OBSPREV')
                    .and
                    .returnValue('');
            });

            describe('getObs', () => {
                it('call OBSNOW', () => {
                    component.getObs(true, value);
                    expect((component as any).mel.OBSNOW).toHaveBeenCalledWith(value, '', '');
                })
                it('call OBSPREV', () => {
                    component.getObs(false, value);
                    expect((component as any).mel.OBSPREV).toHaveBeenCalledWith(value);
                })
            })
            it('not call OBSNOW', () => {
                (component as any).mel = null;
                let _result = component.getObs(true, date);
                expect(_result).toEqual(component.noData);

            })
        })
        it('showUrlDialog', () => {
            spyOn(component, 'melFunc')
                .and
                .returnValue('');
            component.showUrlDialog(value)
            expect(component.melFunc).toHaveBeenCalledWith('{SHOWHTMLFORM("' + value + '","test")}');
        })
    });

    describe('check', () => {
        it('melObjectName', () => {
            expect((component as any).melObjectName).toEqual('GE.CPO.EMR.80.MEL')
        })
        it('melObjectNameSimulator', () => {
            expect((component as any).melObjectNameSimulator).toEqual('GE.CPO.EMR.80.MEL.SIMULATOR')
        })
    })
})