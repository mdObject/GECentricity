import { IsActiveXSupported } from '../factories/factories';
import { System } from '../classes/system';
import { Simulator } from '../simulator/simulator';

export abstract class EmrBase {

    readonly isActiveXSupported = IsActiveXSupported(this._window);
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    readonly isExternalSupported: boolean = (this.external) ? true : false;
    private _external: any;
    private _isSimulator: boolean;
    private _simulator: Simulator;

    get external(): any {
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
        public _window: any
    ) {
        this._simulator = new Simulator(this._window); // should be the first here

        this._window['_isSimulator'] = this.isSimulator;
    }

    abstract get externalSimulator(): any;
}