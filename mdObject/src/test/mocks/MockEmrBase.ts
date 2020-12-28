import { MockWindow } from './mocks';
import { EmrBase } from '../../bases/EmrBase';
var _window = new MockWindow();

export class MockEmrBase extends EmrBase {

    constructor() {
        super(_window);
    }

    get externalSimulator(): any {
        return {};
    }
}