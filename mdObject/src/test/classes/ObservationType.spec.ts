import { ObservationType } from '../../classes';

describe('Class: ObservationType', () => {

    let component: ObservationType;

    describe('check', () => {
        beforeAll(() => {
            component = new ObservationType();

        });

        it('None', () => {
            expect(component.None).toEqual('Undefined');
        });
        it('Signed', () => {
            expect(component.Signed).toEqual('Signed');
        });
        it('DocumentUnsigned', () => {
            expect(component.DocumentUnsigned).toEqual('Update');
        });
    });
})