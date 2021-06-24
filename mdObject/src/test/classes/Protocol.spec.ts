import { Protocol } from '../../classes';

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