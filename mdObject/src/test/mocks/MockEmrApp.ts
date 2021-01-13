import { MockWindow } from './mocks';
import { EmrApp } from '../../classes/classes';
import { MockSimulator } from './MockSimulator';
var _window = new MockWindow();
var _simulator = new MockSimulator();

export class MockEmrApp extends EmrApp {

    constructor() {
        super(_window, _simulator);
    }
}