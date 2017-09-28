//
import { MockWindow } from './mocks';
import { EmrMel } from '../../classes/classes';
var _window = new MockWindow();

export class MockEmrMel extends EmrMel {

    constructor() {
        super(_window);
    }

}
