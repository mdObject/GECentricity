//
import { Insurance } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: Insurance', () => {
    let component: Insurance;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {
        beforeAll(() => {
            component = new Insurance('P', mockEmrMel as any);
            component.name;
            component.address;
            component.insuranceId;
            component.planName;
            component.groupNumber;
            component.phone;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting name from cache', () => {
            component.name;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting address from cache', () => {
            component.address;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting insuranceId from cache', () => {
            component.insuranceId;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting planName from cache', () => {
            component.planName;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting groupNumber from cache', () => {
            component.groupNumber;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting phone from cache', () => {
            component.phone;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });

    });

    describe('no caches', () => {
        beforeEach(() => {
            component = new Insurance('P', mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting name from melFunc', () => {
            component.name;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{INS_NAME("' + component.insuranceType + '")}');
        });
        it('getting address from melFunc', () => {
            component.address;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{INS_ADDR("' + component.insuranceType + '")}');
        });
        it('getting insuranceId from melFunc', () => {
            component.insuranceId;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{INS_ID("' + component.insuranceType + '")}');
        });
        it('getting planName from melFunc', () => {
            component.planName;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{INS_PLAN("' + component.insuranceType + '")}');
        });
        it('getting groupNumber from melFunc', () => {
            component.groupNumber;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{INS_GRP("' + component.insuranceType + '")}');
        });
        it('getting phone from melFunc', () => {
            component.phone;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{INS_PHONE("' + component.insuranceType + '")}');
        });
    });



})