import { Allergies } from '../../classes/classes';
import { MockEmrMel, mockResultEmr } from '../mocks/mocks';

describe('Class: Allergies', () => {

    let component: Allergies;
    let mockEmrMel = new MockEmrMel();
    let result: string = mockResultEmr;

    describe('caches', () => {

        beforeAll(() => {
            component = new Allergies(mockEmrMel as any);
            component.added;
            component.current;
            component.removed;
        });

        beforeEach(() => {
            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        })

        it('getting added from cache', () => {
            component.added;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting current from cache', () => {
            component.current;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
        it('getting removed from cache', () => {
            component.removed;
            expect(mockEmrMel.melFunc).not.toHaveBeenCalled();
        });
    });

    describe('no caches', () => {

        beforeEach(() => {
            component = new Allergies(mockEmrMel as any);

            spyOn(mockEmrMel, 'melFunc')
                .and
                .returnValue(result);
        });

        it('getting added from melFunc', () => {
            component.added;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{ALL_NEW("delimited")}');
        });
        it('getting current from melFunc', () => {
            component.current;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{ALL_PRIOR("delimited")}');
        });
        it('getting removed from melFunc', () => {
            component.removed;
            expect(mockEmrMel.melFunc).toHaveBeenCalledWith('{ALL_REMOVED("delimited")}');
        });
    });
})