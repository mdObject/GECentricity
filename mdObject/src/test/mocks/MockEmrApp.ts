//
import { MockWindow } from './mocks';
import { EmrApp } from '../../classes/classes';
var _window = new MockWindow();

export class MockEmrApp extends EmrApp {

    constructor() {
        super(_window);
    }

}