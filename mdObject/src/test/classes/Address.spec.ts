//
import { Address } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: Address', () => {
    let component: Address;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {
        beforeAll(() => {
            component = new Address(mockEmrMel as any);
            component.address1;
            component.address2;
            component.city;
            component.country;
            component.postCode;
            component.state;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting address1 from cache', () => {
            component.address1;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting address2 from cache', () => {
            component.address2;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting city from cache', () => {
            component.city;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting country from cache', () => {
            component.country;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting postCode from cache', () => {
            component.postCode;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting state from cache', () => {
            component.state;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });

    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new Address(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting address1 from melFunc', () => {
            component.address1;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.ADDRESS1}');
        });
        it('getting address2 from melFunc', () => {
            component.address2;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.ADDRESS2}');
        });
        it('getting city from melFunc', () => {
            component.city;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.CITY}');
        });
        it('getting country from melFunc', () => {
            component.country;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.COUNTRY}');
        });
        it('getting postCode from melFunc', () => {
            component.postCode;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.ZIP}');
        });
        it('getting state from melFunc', () => {
            component.state;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.STATE}');
        });
    });



})