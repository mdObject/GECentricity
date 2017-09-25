//
import { EmrApp } from '../../classes/classes';
import { MockWindow } from '../mocks/mocks';

describe('Class: EmrApp', () => {
    let component: EmrApp;
    let _window = new MockWindow();

    beforeEach(() => {
        component = new EmrApp(_window);
    });

    describe('methods', () => {
        describe('initialization', () => {
            it('success',
                () => {
                    spyOn(_window, 'ActiveXObject')
                        .and
                        .returnValue(_window._ActiveXObjectApp);
                    spyOn((component as any).app, 'SetPasscode');

                    (component as any).initialization();

                    expect(_window.ActiveXObject).toHaveBeenCalledWith((component as any).appObjectName);
                    expect(component.errorMessage).toEqual(undefined);
                    expect((component as any).app.SetPasscode).toHaveBeenCalledWith(_window.external['Passcode']);
                });
            it('success SIMULATOR',
                () => {
                    spyOn(_window, 'ActiveXObject')
                        .and
                        .throwError('qwe');

                    (component as any).initialization();

                    expect(_window.ActiveXObject).toHaveBeenCalledWith((component as any).appObjectNameSimulator);
                    expect(component.errorMessage.indexOf('Unable to load ActiveX interface') > -1).toEqual(true);
                });
        })
    });

    describe('check', () => {
        it('enterpriseId', () => {
            expect(component.enterpriseId).toEqual((component as any).app.EnterpriseID)
        })
        it('databaseVersion', () => {
            expect(component.databaseVersion).toEqual((component as any).app.DatabaseVersion)
        })
        it('showUrlDialog', () => {
            let name = 'qwe';
            spyOn((component as any).app, 'ShowURLDialog')
                .and
                .returnValue(name);
            expect(component.showUrlDialog(name)).toEqual(name)
        })
    })
})