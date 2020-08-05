import { EmrBase } from '../bases/bases'
import { GetActiveXErrorMessage } from '../factories/factories';
import { System } from './classes';

export class EmrApp extends EmrBase {

    private appObjectName = 'GE.CPO.EMR.90.Application';
    private appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
    private app;

    constructor(
        public _window: any
    ) {
        super(_window);

        this.initialization();
    }

    private initialization = (): void => {
        if (this.isActiveXSupported) {
            try {
                this.app = new this._window.ActiveXObject(this.appObjectName);
                this.app.SetPasscode(this._window.external['Passcode']);
            } catch (e) {
                this.errorMessage = GetActiveXErrorMessage(this.appObjectName, e);
            }
            // Try to activate simulator
            if (this.errorMessage != null) {
                try {
                    this.app = new this._window.ActiveXObject(this.appObjectNameSimulator);
                    System.isSimulator = true;
                } catch (e) {
                    this.errorMessage = GetActiveXErrorMessage(this.appObjectName, e);
                    alert(this.errorMessage);
                }
            }
        }
    }

    get enterpriseId(): string {
        return (this.app == null) ? this.noData : this.app.EnterpriseID;
    }

    get databaseVersion(): string {
        return (this.app == null) ? this.noData : this.app.DatabaseVersion;
    }

    showUrlDialog = (url: string): string => {
        return (this.app == null) ? this.noData : this.app.ShowURLDialog(url);
    }

    get external(): any {
        return (this.app == null) ? this.noData : this.app.external;
    }
}