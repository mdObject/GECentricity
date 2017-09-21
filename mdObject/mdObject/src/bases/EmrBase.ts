//
import { IsActiveXSupported } from '../factories/factories';

export class EmrBase {

    readonly isActiveXSupported = IsActiveXSupported();
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    constructor() { }

}
