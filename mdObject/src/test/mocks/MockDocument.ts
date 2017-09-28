//
import { MockElement } from './mocks';

export class MockDocument {

    _element = new MockElement()

    body = {
        appendChild: () => { }
    }

    constructor() { }

    createElement = (): HTMLElement => {
        return this._element as any;
    }

}