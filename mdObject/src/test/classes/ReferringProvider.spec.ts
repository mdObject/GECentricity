import { ReferringProvider, ReferringProviderPhone } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: ReferringProvider', () => {

    let component: ReferringProvider;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {
        beforeAll(() => {
            component = new ReferringProvider(mockEmrMel as any);
            component.referringProviderId;
            component.firstName;
            component.lastName;
            component.email;
            component.fullAddress;
            component.phone;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting referringProviderId from cache', () => {
            component.referringProviderId;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting firstName from cache', () => {
            component.firstName;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting lastName from cache', () => {
            component.lastName;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting email from cache', () => {
            component.email;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting fullAddress from cache', () => {
            component.fullAddress;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting phone from cache', () => {
            expect(component.phone instanceof ReferringProviderPhone).toEqual(true);
        });

    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new ReferringProvider(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting referringProviderId from melFunc', () => {
            component.referringProviderId;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDID}');
        });
        it('getting firstName from melFunc', () => {
            component.firstName;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDFIRSTNAME}');
        });
        it('getting lastName from melFunc', () => {
            component.lastName;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDLASTNAME}');
        });
        it('getting email from melFunc', () => {
            component.email;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDEMAILADDRESS}');
        });
        it('getting fullAddress from melFunc', () => {
            component.fullAddress;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDADDRESS}');
        });
    });
})