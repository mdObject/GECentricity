import { EmrBase } from '../bases/bases'
import { System } from './system';
import { GetActiveXErrorMessage } from '../factories/factories';
import { Simulator } from '../simulator/simulator';

export class EmrMel extends EmrBase {

    private melObjectName = 'GE.CPO.EMR.80.MEL';
    private melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
    private mel;

    private simulator: Simulator = new Simulator(this._window);

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
                    System.isSimulator = true;
                } catch (e) {
                    alert(this.errorMessage);
                }
            }
        }
        else {
            if (this.isExternalSupported) {

            }
            else {
                alert(this.errorMessage);
            }
        }
    }

    // Implements MEL eval 
    melFunc = (data: string): string => {
//        this.simulator.getObjectChrome();
        //let isChromeExtension: boolean
        //Simulator.isChromeExtension().then(e => isChromeExtension = e);
        //console.log(isChromeExtension);
        return (this.mel) ? this.mel.eval(data) : Simulator.isChromeExtension && this.isExternalSupported ? this.external.EvaluateMel(data) :  this.noData;
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
        Simulator.isChromeExtension;
        return (this.mel == null) ? Simulator.isChromeExtension ? this.simulator.external : this.noData : this.mel.external;
    }
}