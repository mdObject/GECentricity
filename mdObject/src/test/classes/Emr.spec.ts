import { Emr, EmrWindow, EmrMel, EmrApp, Users, Patient, ClinicalDocument, ObsTermsMap } from '../../classes/classes';
import { MockWindow, mockResultEmr } from '../mocks/mocks';
import { MockSimulator } from '../mocks/MockSimulator';

describe('Class: Emr', () => {

    let component: Emr;
    let _window = new MockWindow();
    let _simulator = new MockSimulator();

    let result: string = mockResultEmr;
    let name: string = 'qwe';

    describe('check default value', () => {
        beforeAll(() => {
            component = new Emr(_window, _window.document);
            component.version;
            component.emrMel;
            component.emrApp;
        });

        it('enterpriseId', () => {
            expect(component.enterpriseId).toEqual(component.emrApp.enterpriseId);
        });
        it('databaseVersion', () => {
            expect(component.databaseVersion).toEqual(component.emrApp.databaseVersion);
        });
        it('emrWindow', () => {
            expect(component.emrWindow instanceof EmrWindow).toEqual(true);
        });
    })

    describe('emrMel and emrApp', () => {
        describe('no cache', () => {
            beforeAll(() => {
                component = new Emr(_window, _window.document);
            });

            it('emrMel', () => {
                expect(component.emrMel instanceof EmrMel).toEqual(true);
            });
            it('emrApp', () => {
                expect(component.emrApp instanceof EmrApp).toEqual(true);
            });
        })
        describe('cache', () => {
            beforeAll(() => {
                component = new Emr(_window, _window.document);
                component.emrMel;
                component.emrApp;
            });

            it('emrMel', () => {
                expect(component.emrMel instanceof EmrMel).toEqual(true);
            });
            it('emrApp', () => {
                expect(component.emrApp instanceof EmrApp).toEqual(true);
            });

            it('check users', () => {
                expect(component.users instanceof Users).toEqual(true);
            });
            it('check patient', () => {
                expect(component.patient instanceof Patient).toEqual(true);
            });
            it('check gpiCode', () => {
                expect(component.clinicalDocument instanceof ClinicalDocument).toEqual(true);
            });
            it('check obsTermsMap', () => {
                expect(component.obsTermsMap instanceof ObsTermsMap).toEqual(true);
            });

        })
        describe('from window.opener._melOpener and window.opener._appOpener', () => {
            beforeAll(() => {
                component = new Emr(_window, _window.document);
                _window.opener = {
                    _melOpener: new EmrMel(_window, _simulator),
                    _appOpener: new EmrApp(_window, _simulator)
                }
            });

            it('emrMel', () => {
                expect(component.emrMel instanceof EmrMel).toEqual(true);
            });
            it('emrApp', () => {
                expect(component.emrApp instanceof EmrApp).toEqual(true);
            });
        })
        describe('from window.opener._melOpener and window.opener._appOpener', () => {
            beforeAll(() => {
                component = new Emr(_window, _window.document);
            });

            it('emrMel', () => {
                expect(component._window['_melOpener'] instanceof EmrMel).toEqual(true);
            });
            it('emrApp', () => {
                expect(component._window['_appOpener'] instanceof EmrApp).toEqual(true);
            });
        })
    })

    describe('caches', () => {
        beforeAll(() => {
            component = new Emr(_window, _window.document);
            component.version;
        });

        beforeEach(() => {
            spyOn(component.emrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting version from cache', () => {
            component.version;
            expect(component.emrMel.melFunc).not.toHaveBeenCalled();
        });
    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new Emr(_window, _window.document);
            spyOn((component as any).emrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting version from melFunc', () => {
            component.version;
            expect((component as any)._emrMel.melFunc).toHaveBeenCalledWith('{VER_EMR()}');
        });
    });

    describe('methods', () => {
        beforeEach(() => {
            component = new Emr(_window, _window.document);
            spyOn((component as any).emrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('melContent', () => {
            component.melContent(name);
            expect((component as any)._emrMel.melFunc).toHaveBeenCalledWith('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');
        });
    });
})