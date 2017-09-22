//
import { GetActiveXErrorMessage } from '../factories/factories';

describe('factory: GetActiveXErrorMessage', () => {
    let result;
    let mockName: string = 'name';
    let mockError = {
        Message: 'Message'
    }

    it('return string',
        () => {
            result = GetActiveXErrorMessage(mockName, mockError);
            expect(typeof result == 'string').toEqual(true);
        });

    it('return string + objectName',
        () => {
            result = GetActiveXErrorMessage(mockName, null);
            expect("Unable to load ActiveX interface " + mockName).toEqual(result);
        });

    it('return string + objectName',
        () => {
            result = GetActiveXErrorMessage(mockName, mockError);
            expect("Unable to load ActiveX interface " + mockName + ".\nError message: " + mockError.Message).toEqual(result);
        });

})