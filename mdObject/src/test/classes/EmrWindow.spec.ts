import { EmrWindow } from '../../classes';
import { MockEmrMel, MockEmrApp, MockWindow } from '../mocks/mocks';

describe('Class: EmrWindow', () => {

    let component: EmrWindow;
    let mockEmrMel = new MockEmrMel();
    let mockEmrApp = new MockEmrApp();
    let _window = new MockWindow();
    let url = '//localserver';
    let verb: string = 'POST';
    let target: string = '_blank';
    let features: string = '';
    let data = {
        qwe: 123
    }

    describe('methods', () => {
        beforeAll(() => {
            component = new EmrWindow(mockEmrMel as any, mockEmrApp as any, _window, _window.document)
        })

        describe('openDialog', () => {
            it('mel', () => {
                spyOn(component._mel, 'showUrlDialog')
                component.openDialog(url)
                expect(component._mel.showUrlDialog).toHaveBeenCalledWith(url)
            })
            it('app', () => {
                spyOn(component._app, 'showUrlDialog')
                component.openDialog('')
                expect(component._app.showUrlDialog).toHaveBeenCalledWith('')
            })
        })
        describe('open', () => {
            beforeEach(() => {
                spyOn(_window.document, 'createElement')
                    .and
                    .returnValue(_window.document._element);
                spyOn(_window, 'open')
                    .and
                    .returnValue(_window.open())
                spyOn(_window.document.body, 'appendChild');
                spyOn(_window.document._element, 'submit');
                spyOn(_window.document._element, 'appendChild');
            })

            it('right values', () => {
                component.open(url, verb, target, features, data);
                expect(_window.document.createElement).toHaveBeenCalledWith("form")
                expect(_window.document.createElement).toHaveBeenCalledWith("textarea")
                expect(_window.document._element.appendChild).toHaveBeenCalled()
                expect(_window.document.body.appendChild).toHaveBeenCalled()
                expect(_window.open).toHaveBeenCalledWith("about:blank", target, features)
                expect(_window.document._element.submit).toHaveBeenCalled()
            })
            it('wrong values', () => {
                component.open(null, null, null, null, null);
                expect(_window.document.createElement).toHaveBeenCalledWith("form")
                expect(_window.document.createElement).not.toHaveBeenCalledWith("textarea")
                expect(_window.document._element.appendChild).not.toHaveBeenCalled()
                expect(_window.document.body.appendChild).toHaveBeenCalled()
                expect(_window.open).toHaveBeenCalledWith("about:blank", null, null)
                expect(_window.document._element.submit).toHaveBeenCalled()
            })
        })
    })
})