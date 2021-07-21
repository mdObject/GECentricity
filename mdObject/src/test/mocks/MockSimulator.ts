import { MockWindow } from './mocks';
import { Simulator } from "../../simulator/simulator";
import { MockExternal } from './MockExternal';

var _window = new MockWindow();

export class MockSimulator extends Simulator {

    constructor() {
        super(_window);
    }

    get externalSimulator(): any {
        return new MockExternal();
    }
}