//
import { EmrBase } from '../bases/bases'
import { GetActiveXErrorMessage } from '../factories/factories';
declare var ActiveXObject: any;

export class EmrApp extends EmrBase {

    private appObjectName = 'GE.CPO.EMR.90.Application';
    private appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
    private app;

    constructor() {
        super();

        this.initialization();
    }

    private initialization = (): void => {
        if (this.isActiveXSupported) {
            try {
                this.app = new ActiveXObject(this.appObjectName);
                this.app.SetPasscode(window.external['Passcode']);
            } catch (e) {
                this.errorMessage = GetActiveXErrorMessage(this.appObjectName, e);
            }
            // Try to activate simulator
            if (this.errorMessage !== undefined) {
                try {
                    this.app = new ActiveXObject(this.appObjectNameSimulator);
                } catch (e) {
                    alert(this.errorMessage);
                }
            }
        }
    }


    enterpriseId = (): string => {
        return (this.app === null) ? this.noData : this.app.EnterpriseID;
    };

    databaseVersion = (): string => {
        return (this.app === null) ? this.noData : this.app.DatabaseVersion;
    };

    showUrlDialog = (url: string): string => {
        return (this.app === null) ? this.noData : this.app.ShowURLDialog(url);
    };
}