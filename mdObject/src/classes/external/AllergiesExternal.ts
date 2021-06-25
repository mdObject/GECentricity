import { AllergyExternal } from './AllergyExternal';

export class AllergiesExternal extends Array<AllergyExternal>
{

    constructor(public json: string = '[]') {
        super(...(JSON.parse(json) as []).map(e => new AllergyExternal(e)));
    }


}