//
import { Protocol } from '../../classes/classes';

describe('Class: Protocol', () => {
    let component: Protocol;
    let result: string = 'qwe';

    beforeAll(() => {
        component = new Protocol(result);
    });

    it('check name', () => {
        expect(component.name).toEqual(result);
    });

})