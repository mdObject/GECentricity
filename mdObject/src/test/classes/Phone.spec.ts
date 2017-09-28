//
import { Phone } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: Phone', () => {
    let component: Phone;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {
        beforeAll(() => {
            component = new Phone(mockEmrMel as any);
            component.home;
            component.business;
            component.mobile;
            component.fax;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting home from cache', () => {
            component.home;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting business from cache', () => {
            component.business;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting mobile from cache', () => {
            component.mobile;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting fax from cache', () => {
            component.fax;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new Phone(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting home from melFunc', () => {
            component.home;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.ALTPHONE}');
        });
        it('getting business from melFunc', () => {
            component.business;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.WORKPHONE}');
        });
        it('getting mobile from melFunc', () => {
            component.mobile;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.CELLPHONE}');
        });
        it('getting fax from melFunc', () => {
            component.fax;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.FAXPHONE}');
        });
    });



})