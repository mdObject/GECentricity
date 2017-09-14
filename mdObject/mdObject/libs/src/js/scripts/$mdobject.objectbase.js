var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var $mdObject;
(function ($mdObject) {
    var ObjectBase = (function () {
        function ObjectBase() {
        }
        ObjectBase.prototype.InternalString = function (a, b) {
            return new StringInternal(a, b);
        };
        ObjectBase.prototype.getPatientProperty = function (local, method) {
            return (local !== undefined) ? local : $mdObject.Mel.mel.melFunc(method);
        };
        return ObjectBase;
    }());
    $mdObject.ObjectBase = ObjectBase;
    var StringInternal = (function (_super) {
        __extends(StringInternal, _super);
        function StringInternal(value, tag) {
            var _this = _super.call(this, value) || this;
            _this._value = value;
            _this._tag = tag;
            return _this;
        }
        //var sb = new String(value);
        // Function parse string object to array of string 
        StringInternal.prototype.toList = function (seporator) {
            if (seporator === undefined) {
                seporator = '|';
            }
            var dataArray = this._value.split(seporator), index;
            /*jslint plusplus: true */
            for (index = 0; index < dataArray.length; index++) {
                if (dataArray[index].length === 0) {
                    dataArray.splice(index, 1);
                }
            }
            return dataArray;
        };
        ;
        // String helper function to validate that string start with specified string
        StringInternal.prototype.startsWith = function (str) {
            return this._value.slice(0, str.length) === str;
        };
        ;
        // String helper function to validate that string end with specified string
        StringInternal.prototype.endsWith = function (str) {
            return this._value.slice(-str.length) === str;
        };
        ;
        Object.defineProperty(StringInternal.prototype, "tag", {
            get: function () {
                return (this._tag !== undefined) ? this._tag : '';
            },
            enumerable: true,
            configurable: true
        });
        StringInternal.prototype.toDate = function () {
            return new Date(this._value.toString());
        };
        ;
        return StringInternal;
    }(String));
})($mdObject || ($mdObject = {}));
