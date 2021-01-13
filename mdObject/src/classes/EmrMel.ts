import { System } from './system';
import { GetActiveXErrorMessage, IsActiveXSupported } from '../factories/factories';
import { EmrBase } from '../bases/EmrBase';

export class EmrMel extends EmrBase {

    private melObjectName = 'GE.CPO.EMR.80.MEL';
    private melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
    private mel;
    public errorMessage: string;
    readonly noData: string = 'Data Access Error';

    constructor(
        public _window: any,
    ) {
        super(_window);

        this.initialization();
    }

    private initialization = (): void => {
        if (IsActiveXSupported(this._window)) {
            try {
                this.mel = new this._window.ActiveXObject(this.melObjectName);
            } catch (e) {
                this.errorMessage = GetActiveXErrorMessage(this.melObjectName, e);
            }
            // Try to activate simulator
            if (this.errorMessage != null) {
                try {
                    this.mel = new this._window.ActiveXObject(this.melObjectNameSimulator);
                    System.isSimulator = true;
                } catch (e) {
                    console.log(this.errorMessage);
                }
            }
        }
    }

    // Implements MEL eval 
    melFunc = (data: string): string => {
        return (this.external) ? this.external.EvaluateMel(data, false) : (this.mel) ? this.mel.eval(data) :  this.noData;
    }

    saveObservation = (obs: string, value: string, date: string): string => {
        return (this.mel == null) ? this.noData : this.mel.OBSNOW(obs, value, date);
    }

    getObs = (isCurrent: boolean, data: string): string => {
        return (this.mel == null) ? this.noData : ((isCurrent == true) ? this.mel.OBSNOW(data, '', '') : this.mel.OBSPREV(data));
    }

    showUrlDialog = (url: string): void => {
        this.melFunc('{SHOWHTMLFORM("' + url + '","test")}');
    }

    get externalSimulator(): any {
        return (this.mel == null) ? this.noData : this.mel.external;
    }

}