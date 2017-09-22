//
import { GetCurrentUser } from '../../factories/factories';

describe('factory: GetCurrentUser', () => {
    let result;
    let mockMel = {
        melFunc: () => { }
    } as any;

    it('called 6 times',
        () => {
            spyOn(mockMel, 'melFunc')
                .and
                .returnValue('');
            result = GetCurrentUser(mockMel);
            expect(mockMel.melFunc).toHaveBeenCalledTimes(6);
        });

    it('return 4 part of "^"',
        () => {
            spyOn(mockMel, 'melFunc')
                .and
                .returnValue('');
            result = GetCurrentUser(mockMel);
            expect(result).toEqual('^^^^');
        });
})