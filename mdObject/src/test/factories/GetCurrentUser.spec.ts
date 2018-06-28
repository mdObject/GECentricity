import { GetCurrentUser } from '../../factories/factories';

describe('factory: GetCurrentUser', () => {

    let mockEmrMel = {
        melFunc: () => { }
    } as any;

    it('called 6 times', () => {
        spyOn(mockEmrMel, 'melFunc')
            .and
            .returnValue('');
        GetCurrentUser(mockEmrMel);
        expect(mockEmrMel.melFunc).toHaveBeenCalledTimes(6);
    });

    it('return 4 part of "^"', () => {
        spyOn(mockEmrMel, 'melFunc')
            .and
            .returnValue('');
        let _result = GetCurrentUser(mockEmrMel);
        expect(_result).toEqual('^^^^');
    });
})