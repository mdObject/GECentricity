//
import { MockDocument } from './mocks';

export class MockWindow {

    _ActiveXObjectMel = {
        // mel
        eval: (data: string) => { return data; },
        OBSNOW: (...args: Array<string>) => { return args.join(''); },
        OBSPREV: (data: string) => { return data; },
    };

    _ActiveXObjectApp = {
        // app
        EnterpriseID: null,
        DatabaseVersion: null,
        ShowURLDialog: (url: string) => { return url; },
        SetPasscode: (pass: string) => { return pass; },
    };

    opener = null;
    document = new MockDocument();
    external = {};

    constructor() { }

    ActiveXObject = (name: string) => {
        if (typeof name == 'string') {
            name = name.toLowerCase();
            if (name.indexOf('mel') > -1) {
                return this._ActiveXObjectMel;
            }
            if (name.indexOf('app') > -1) {
                return this._ActiveXObjectApp;
            }
        }
        return {};
    }

    btoa = (value: string) => {
        return value;
    }

    open = (...argums: Array<string>): MockWindow => {
        if (argums) {
            return new MockWindow();
        }
        return new MockWindow();
    }
}