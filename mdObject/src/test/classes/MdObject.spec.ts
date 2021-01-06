import { MdObject, Emr } from '../../classes/classes';
import { MockWindow } from '../mocks/mocks';
import { version, productType } from '../../consts/consts'

describe('Class: MdObject', () => {

    let component: MdObject;
    let _window = new MockWindow;

    beforeAll(() => {
        component = new MdObject(_window, _window.document);
    });

    describe('right value', () => {
        it('check name', () => {
            expect(component.version).toEqual(version);
        });
        it('check onDate', () => {
            expect(component.productType).toEqual(productType);
        });
        it('check classification', () => {
            expect(component.emr instanceof Emr).toEqual(true);
        });
    })

    describe('wrong value', () => {
        it('got the error', () => {
            try {
                component = new MdObject(null, null);
            } catch (e) {
                expect(typeof e.message == 'string').toEqual(true)
            }
        })
    })
})