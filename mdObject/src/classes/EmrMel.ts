import { EmrBase } from '../bases/bases'
import { GetActiveXErrorMessage } from '../factories/factories';

export class EmrMel extends EmrBase {

    private melObjectName = 'GE.CPO.EMR.80.MEL';
    private melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
    private mel;

    constructor(
        public _window: any
    ) {
        super(_window);

        this.initialization();
    }

    private initialization = (): void => {
        if (this.isActiveXSupported) {
            try {
                this.mel = new this._window.ActiveXObject(this.melObjectName);
            } catch (e) {
                this.errorMessage = GetActiveXErrorMessage(this.melObjectName, e);
            }
            // Try to activate simulator
            if (this.errorMessage != null) {
                try {
                    this.mel = new this._window.ActiveXObject(this.melObjectNameSimulator);
                } catch (e) {
                    alert(this.errorMessage);
                }
            }
        }
    }

    // Implements MEL eval 
    melFunc = (data: string): string => {
        return (this.mel == null) ? this.noData : this.mel.eval(data);
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
}