//
import { StringInternal } from '../factories/factories';

describe('factory: StringInternal', () => {
    let mockString = 'qwe';
    let result = StringInternal(mockString);

    beforeEach(() => {
        result = StringInternal(mockString);
    });

    it('return result instanceof String',
        () => {
            expect(result instanceof String).toEqual(true);
        });

    describe('method toList', () => {
        it('it is function',
            () => {
                expect(typeof result.toList == 'function').toEqual(true);
            });
        it('result of the method is array',
            () => {
                let _result = result.toList()
                expect(Array.isArray(_result)).toEqual(true);
            });
        it('length of result is equal 0',
            () => {
                result = StringInternal('');
                let _result = result.toList();
                expect(_result.length).toEqual(0);
            });
    })

    describe('method startsWith', () => {
        it('it is function',
            () => {
                expect(typeof result.startsWith == 'function').toEqual(true);
            });
        it('it is function',
            () => {
                let _result = result.startsWith('q')
                expect(typeof _result == 'boolean').toEqual(true);
            });
    })

    describe('method endsWith', () => {
        it('it is function',
            () => {
                expect(typeof result.endsWith == 'function').toEqual(true);
            });
        it('it is function',
            () => {
                let _result = result.endsWith('e')
                expect(typeof _result == 'boolean').toEqual(true);
            });
    })

    describe('property tag', () => {
        it('return any string',
            () => {
                let _result = result.tag;
                expect(typeof _result == 'string').toEqual(true);
            });
        it('return right string',
            () => {
                result = StringInternal('', 'qwe');
                let _result = result.tag;
                expect(_result).toEqual('qwe');
            });
    })

    describe('method toDate', () => {
        it('it is function',
            () => {
                expect(typeof result.toDate == 'function').toEqual(true);
            });
        it('return Date',
            () => {
                let _result = result.toDate()
                expect(_result instanceof Date).toEqual(true);
            });
    })

   

})