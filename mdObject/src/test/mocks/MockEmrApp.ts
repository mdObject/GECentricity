//
import { MockWindow } from './mocks';
var _window: MockWindow = new MockWindow();

export class MockEmrApp {

    private appObjectName = 'GE.CPO.EMR.90.Application';
    private appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
    private app;

    readonly isActiveXSupported = true;
    readonly noData: string = 'Data Access Error';
    errorMessage: string;

    constructor(
    ) {
        this.initialization();
    }

    private initialization = (): void => {
        if (this.isActiveXSupported) {
            try {
                this.app = _window.ActiveXObject(this.appObjectName);
                this.app.SetPasscode(_window.external['Passcode']);
            } catch (e) { }
            // Try to activate simulator
            if (this.errorMessage != null) {
                try {
                    this.app = _window.ActiveXObject(this.appObjectNameSimulator);
                } catch (e) { }
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