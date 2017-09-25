//
import { MockWindow } from './mocks';
var _window: MockWindow = new MockWindow();

export class MockEmrMel {

    private melObjectName = 'GE.CPO.EMR.80.MEL';
    private melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
    private mel: any;

    readonly isActiveXSupported = true;
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    constructor() {
        this.initialization();
    }

    private initialization = (): void => {
        if (this.isActiveXSupported) {
            try {
                this.mel = _window.ActiveXObject(this.melObjectName);
            } catch (e) { }
            // Try to activate simulator
            if (this.errorMessage != null) {
                try {
                    this.mel = _window.ActiveXObject(this.melObjectNameSimulator);
                } catch (e) { }
            }
        }
    }

    // Implements MEL eval 
    melFunc = (data: string): string => {
        return (this.mel === null) ? this.noData : this.mel.eval(data);
    };

    saveObservation = (obs: string, value: string, date: string): string => {
        return (this.mel === null) ? this.noData : this.mel.OBSNOW(obs, value, date);
    }

    getObs = (isCurrent: boolean, data: string): string => {
        return (this.mel === null) ? this.noData : ((isCurrent === true) ? this.mel.OBSNOW(data, '', '') : this.mel.OBSPREV(data));
    };

    showUrlDialog = (url: string): void => {
        this.melFunc('{SHOWHTMLFORM("' + url + '","test")}');
    };

}
