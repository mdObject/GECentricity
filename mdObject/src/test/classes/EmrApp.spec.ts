import { EmrBase } from '../../bases/bases';
import { EmrApp } from '../../classes/classes';
import { MockWindow } from '../mocks/mocks';
import { MockSimulator } from '../mocks/MockSimulator';

describe('Class: EmrApp', () => {

    let component: EmrApp;
    let _window = new MockWindow();
    let _simulator = new MockSimulator();

    beforeEach(() => {
        component = new EmrApp(_window, _simulator);
    });

    it('extends AllergyList', () => {
        expect(component instanceof EmrBase).toEqual(true);
    })

    it('extends AllergyListRemoved', () => {
        expect(component instanceof EmrApp).toEqual(true);
    })

    describe('methods', () => {
        describe('initialization', () => {
            it('success', () => {
                spyOn(_window, 'ActiveXObject')
                    .and
                    .returnValue(_window._ActiveXObjectApp);
                spyOn((component as any).app, 'SetPasscode');

                (component as any).initialization();

                expect(_window.ActiveXObject).toHaveBeenCalledWith((component as any).appObjectName);
                expect(component.errorMessage).toEqual(undefined);
                expect((component as any).app.SetPasscode).toHaveBeenCalledWith(_window.external['Passcode']);
            });
            it('success SIMULATOR', () => {
                spyOn(_window, 'ActiveXObject')
                    .and
                    .throwError('qwe');

                (component as any).initialization();

                expect(_window.ActiveXObject).toHaveBeenCalledWith((component as any).appObjectNameSimulator);
                expect(component.errorMessage.indexOf('Unable to load ActiveX interface') > -1).toEqual(true);
            });
        })
        it('showUrlDialog', () => {
            let name = 'qwe';
            spyOn((component as any).app, 'ShowURLDialog')
                .and
                .returnValue(name);
            expect(component.showUrlDialog(name)).toEqual(name)
        })
    });

    describe('check', () => {
        it('enterpriseId', () => {
            expect(component.enterpriseId).toEqual((component as any).app.EnterpriseID)
        })
        it('databaseVersion', () => {
            expect(component.databaseVersion).toEqual((component as any).app.DatabaseVersion)
        })
        it('appObjectName', () => {
            expect((component as any).appObjectName).toEqual('GE.CPO.EMR.90.Application')
        })
        it('appObjectNameSimulator', () => {
            expect((component as any).appObjectNameSimulator).toEqual('GE.CPO.EMR.90.Application.SIMULATOR')
        })
    })
})