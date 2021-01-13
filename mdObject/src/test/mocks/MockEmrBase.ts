import { MockWindow } from './mocks';
import { EmrBase } from '../../bases/EmrBase';
import { MockSimulator } from './MockSimulator';
var _window = new MockWindow();
var _simulator = new MockSimulator();

export class MockEmrBase extends EmrBase {

    constructor() {
        super(_window, _simulator);
    }

    get externalSimulator(): any {
        return {};
    }
}