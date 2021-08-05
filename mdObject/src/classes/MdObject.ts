// <copyright file="MdObject.ts" company="mdObject, Inc">
// Copyright (c) mdObject, Inc. All rights reserved.
// Licensed under the MS-PL license. See LICENSE file in the project root for full license information.
// </copyright>
import { version } from '../consts/version'
import { productType } from '../consts/productType'
import { Emr } from './Emr';

export class MdObject {

    private _emr: Emr;

    constructor(
        public _window: any,
        public _document: any
    ) {
        if (typeof this._window === 'undefined' && typeof this._document === 'undefined') {
            throw new Error("MdObject requires a _window with a _document");
        }
        console.info("The mdObject Version:" + this.version);

        this._emr = new Emr(this._window, this._document);

    }

    get version(): string {
        return version;
    }

    get productType(): string {
        return productType;
    }

    public get emr():Emr {
        return this._emr;
    }
}