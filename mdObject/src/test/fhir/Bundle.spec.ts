import { Bundle } from '../../fhir/Bundle';
import  * as example from '../../fhir/examples/ConditionsBundle.json'

describe('Fhir Bundle', () => {

    it('load test bundle', () => {
        let bundle: Bundle = example as Bundle;
        expect(bundle.id).toEqual('37b07071-38e8-4ae0-ac01-25e7e9d3c528');
        expect(bundle.total).toEqual(7);
        expect(bundle.entry[0].resource.id).toEqual('sprid-1239656604000620');
    });
});