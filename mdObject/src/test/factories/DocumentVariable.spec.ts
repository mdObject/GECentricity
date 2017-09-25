//
import { DocumentVariable } from '../../factories/factories';
import { ApplicationBase } from '../../bases/bases';

describe('factory: DocumentVariable', () => {
    let result;
    let mock = {
        saveCallback: () => { }
    };

    beforeEach(() => {
        result = DocumentVariable(new ApplicationBase(), mock.saveCallback);
    });

    it('return object that passed to result',
        () => {
            expect(result instanceof ApplicationBase).toEqual(true);
            expect(typeof result.save == 'function').toEqual(true);
        });

    it('save is function',
        () => {
            expect(typeof result.save == 'function').toEqual(true);
        });

    it('return object',
        () => {
            result = DocumentVariable(undefined, mock.saveCallback);
            expect(result instanceof Object).toEqual(true);
        });

    it('saveCallback is called',
        () => {
            spyOn(mock, 'saveCallback');
            result = DocumentVariable(new ApplicationBase(), mock.saveCallback);
            result.save();
            expect(mock.saveCallback).toHaveBeenCalled();
        });

    
})