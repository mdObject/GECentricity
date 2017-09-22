//
import { IsActiveXSupported } from '../factories/factories';

describe('factory: IsActiveXSupported', () => {
    let result;
    let mockWindow;

    beforeEach(() => {
        mockWindow = new Object();
    });

    it('return false',
        () => {
            result = IsActiveXSupported(mockWindow);
            expect(result).toEqual(false);
        });

    it('return true',
        () => {
            mockWindow = { ActiveXObject: null };
            result = IsActiveXSupported(mockWindow);
            expect(result).toEqual(true);
        });
})