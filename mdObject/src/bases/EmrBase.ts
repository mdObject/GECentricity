//
import { IsActiveXSupported } from '../factories/factories';

export class EmrBase {

    readonly isActiveXSupported = IsActiveXSupported(this.window);
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    constructor(
        public window: any
    ) { }

}
