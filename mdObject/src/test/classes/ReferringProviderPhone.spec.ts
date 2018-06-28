import { ReferringProviderPhone } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: ReferringProviderPhone', () => {

    let component: ReferringProviderPhone;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {
        beforeAll(() => {
            component = new ReferringProviderPhone(mockEmrMel as any);
            component.office;
            component.alternative;
            component.fax;
            component.pager;
            component.mobile;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting office from cache', () => {
            component.office;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting alternative from cache', () => {
            component.alternative;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting fax from cache', () => {
            component.fax;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting pager from cache', () => {
            component.pager;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting mobile from cache', () => {
            component.mobile;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });

    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new ReferringProviderPhone(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting office from melFunc', () => {
            component.office;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDOFFICEPHONE}');
        });
        it('getting alternative from melFunc', () => {
            component.alternative;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDALTPHONE}');
        });
        it('getting fax from melFunc', () => {
            component.fax;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDFAXPHONE}');
        });
        it('getting pager from melFunc', () => {
            component.pager;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDPAGERPHONE}');
        });
        it('getting mobile from melFunc', () => {
            component.mobile;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{PATIENT.REFMDCELLPHONE}');
        });
    });
})