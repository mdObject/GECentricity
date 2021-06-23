import { StringInternal } from '../../factories/factories';
import { mockResultEmr } from '../mocks/mocks';

describe('factory: StringInternal', () => {

    let result: string = mockResultEmr;
    let factory = StringInternal(result);

    beforeEach(() => {
        factory = StringInternal(result);
    });

    it('return factory instanceof String', () => {
        expect(factory instanceof String).toEqual(true);
    });

    describe('method toList', () => {
        it('it is function', () => {
            expect(typeof factory.toList == 'function').toEqual(true);
        });
        it('factory of the method is array', () => {
            let _result = factory.toList()
            expect(Array.isArray(_result)).toEqual(true);
        });
        it('length of factory is equal 0', () => {
            factory = StringInternal('');
            let _result = factory.toList();
            expect(_result.length).toEqual(0);
        });
    })

    describe('method startsWith', () => {
        it('it is function', () => {
            expect(typeof factory.startsWith == 'function').toEqual(true);
        });
        it('it is function', () => {
            let _result = factory.startsWith('q')
            expect(typeof _result == 'boolean').toEqual(true);
        });
    })

    describe('method endsWith', () => {
        it('it is function', () => {
            expect(typeof factory.endsWith == 'function').toEqual(true);
        });
        it('it is function', () => {
            let _result = factory.endsWith('e')
            expect(typeof _result == 'boolean').toEqual(true);
        });
    })

    describe('property tag', () => {
        it('return any string', () => {
            let _result = factory.tag;
            expect(typeof _result == 'string').toEqual(true);
        });
        it('return right string', () => {
            factory = StringInternal('', 'qwe');
            let _result = factory.tag;
            expect(_result).toEqual('qwe');
        });
    })

    describe('method toDate', () => {
        it('it is function', () => {
            expect(typeof factory.toDate == 'function').toEqual(true);
        });
    })
})