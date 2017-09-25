//

export class MockWindow {

    private _ActiveXObject = {
        // app
        EnterpriseID: null,
        DatabaseVersion: null,
        ShowURLDialog: (url: string) => { return url; },
        SetPasscode: (pass: string) => { return pass; },

        // mel
        eval: (data: string) => { return data; },
        OBSNOW: (...args: Array<string>) => { return args.join(''); },
        OBSPREV: (data: string) => { return data; },
    };

    opener = null;
    document = {};
    external = {};

    constructor() { }

    ActiveXObject = (...args: Array<any>) => {
        if (Array.isArray(args)) {
            return this._ActiveXObject;
        }
        return this._ActiveXObject;
    }
}