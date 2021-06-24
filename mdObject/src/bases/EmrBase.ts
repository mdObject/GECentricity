import { IsActiveXSupported } from '../factories/factories';
// Avoid Circular dependency detected. Do not reference classes
import { System } from '../classes/System';
import { Simulator } from '../simulator/simulator';

export abstract class EmrBase {

    readonly isActiveXSupported = IsActiveXSupported(this._window);
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    readonly isExternalSupported: boolean = (this.external) ? true : false;
    private _external: any;
    private _isSimulator: boolean;

    get external(): any {
        if (this._external === 'UnitTest') {
            return undefined;
        }
        if (this._external) {
            return this._external;
        }

        this._external = this._external ? this._external        // if the _external is set, then use it
            : (this._window.opener && this._window.opener.external) ? this._window.opener.external
                : this._window.external;
        if (this._external.IsDebugMode === undefined) {
            // try simulator
            this._external = this._simulator.externalSimulator;
        }

        return this._external;
    }

    get isSimulator(): boolean {
        this._isSimulator = (this._window.opener != null && this._window.opener['_isSimulator'] != undefined) ? this._window.opener['_isSimulator']
            : (this._isSimulator) ? this._isSimulator
                : System.isSimulator;
        return this._isSimulator;
    }

    constructor(
        public _window: any,
        public _simulator: Simulator
    ) {

        this._window['_isSimulator'] = this.isSimulator;
    }

    abstract get externalSimulator(): any;
}