import { IsActiveXSupported } from '../factories/factories';
import { System } from '../classes/system';

export class EmrBase {

    readonly isActiveXSupported = IsActiveXSupported(this._window);
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    readonly isExternalSupported: boolean = (this.external()) ? true : false;
    private _external: any;
    private _isSimulator: boolean;

    get external(): any {
        let isSimulator = this.isSimulator;
        this._external = this._external ? this._external
            : isSimulator ? this.emrApp.external
                : (this._window.opener && this._window.opener.external) ? this._window.opener.external
                    : this._window.external;
        return this._external;
    }

    get isSimulator(): boolean {
        this._isSimulator = (this._window.opener != null && this._window.opener['_isSimulator'] != undefined) ? this._window.opener['_isSimulator']
            : (this._isSimulator) ? this._isSimulator
                : System.isSimulator;
        return this._isSimulator;
    }

    constructor(
        public _window: any
    ) {
        this._window['_isSimulator'] = this.isSimulator;
    }
}