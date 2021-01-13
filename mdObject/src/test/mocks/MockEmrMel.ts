import { MockWindow } from './mocks';
import { EmrMel } from '../../classes/classes';
import { MockSimulator } from './MockSimulator';
var _window = new MockWindow();
var _simulator = new MockSimulator();

export class MockEmrMel extends EmrMel {

    constructor() {
        super(_window, _simulator);
    }
}