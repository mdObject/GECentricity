import { IsActiveXSupported } from '../factories/factories';

export class EmrBase {

    readonly isActiveXSupported = IsActiveXSupported(this._window);
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    constructor(
        public _window: any
    ) { }
}