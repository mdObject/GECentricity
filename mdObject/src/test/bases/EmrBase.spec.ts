/// <reference path="../../../node_modules/@types/jest/index.d.ts" />

import { EmrBase } from '../../bases/bases';
import { MockWindow } from '../mocks/mocks';

describe('Base: EmrBase', () => {

    let base: EmrBase;
    let _window = new MockWindow();

    beforeEach(() => {
        base = new EmrBase(_window);
    });

    it('noData is equal', () => {
        expect(base.noData).toEqual('Data Access Error');
    });

    it('isActiveXSupported has result from IsActiveXSupported', () => {
        expect(typeof base.isActiveXSupported == 'boolean').toEqual(true);
    });

    it('errorMessage is undefined', () => {
        expect(typeof base.errorMessage == 'undefined').toEqual(true);
    });
})