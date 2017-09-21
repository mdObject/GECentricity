/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ObsTermsMap__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__ObsTermsMap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Location__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__Location__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EmrContent__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__EmrContent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PatientContact__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_3__PatientContact__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Problem__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_4__Problem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Immunization__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__Immunization__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ObservationType__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_6__ObservationType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__User__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_7__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AllergyData__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__AllergyData__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AllergyList__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__AllergyList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AllergyListRemoved__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__AllergyListRemoved__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Allergies__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__Allergies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Observation__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__Observation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Protocol__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_13__Protocol__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Measurement__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_14__Measurement__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Measurements__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_15__Measurements__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Insurance__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_16__Insurance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CarePlan__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_17__CarePlan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Address__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_18__Address__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Phone__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_19__Phone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ReferringProviderPhone__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_20__ReferringProviderPhone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ReferringProvider__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_21__ReferringProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__EmrMel__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_22__EmrMel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__EmrApp__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_23__EmrApp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__EmrWindow__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_24__EmrWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Emr__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_25__Emr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Patient__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_26__Patient__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ClinicalDocument__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_27__ClinicalDocument__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Users__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_28__Users__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__MdObject__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_29__MdObject__["a"]; });
































/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DocumentVariable__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__DocumentVariable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StringInternal__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__StringInternal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GetCurrentUser__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__GetCurrentUser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IsActiveXSupported__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__IsActiveXSupported__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GetActiveXErrorMessage__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__GetActiveXErrorMessage__["a"]; });







/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LocationType__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__LocationType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserCallFunction__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__UserCallFunction__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ApplicationBase__ = __webpack_require__(35);
/* unused harmony reexport ApplicationBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EmrBase__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__EmrBase__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_classes__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MdObject", function() { return __WEBPACK_IMPORTED_MODULE_0__classes_classes__["p"]; });
/*!
 * ==============================================================================
 * mdObject JavaScript Library v1.0.12
 * http://mdObject.com/
 *
 * Copyright (c) 2015 mdObject, Inc. and other contributors
 * All Rights RESERVED
 * Released under the Microsoft Public License (MS-PL)
 * http://opensource.org/licenses/MS-PL
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Note: This mdObject are compatible only with GE EMR 9.8 & CPS 12.0 or above.
 * This file should not be modified
 *
 * Date: 2013-11-4
 * ============================================================================ */



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObsTermsMap; });
var ObsTermsMap = (function () {
    function ObsTermsMap() {
        this.weight = 'Weight';
        this.height = 'Height';
    }
    return ObsTermsMap;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_enums__ = __webpack_require__(2);

var Location = (function () {
    function Location(id, name, locationType) {
        this.id = id;
        this.name = name;
        this.locationType = locationType;
        this.id = (this.id !== undefined) ? this.id : '';
        this.name = (this.name !== undefined) ? this.name : '';
        this.locationType = (this.locationType !== undefined) ? this.locationType : __WEBPACK_IMPORTED_MODULE_0__enums_enums__["a" /* LocationType */].None;
    }
    return Location;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationType; });
var LocationType;
(function (LocationType) {
    LocationType[LocationType["None"] = 0] = "None";
    LocationType[LocationType["Home"] = 1] = "Home";
    LocationType[LocationType["Current"] = 2] = "Current";
})(LocationType || (LocationType = {}));
;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCallFunction; });
var UserCallFunction;
(function (UserCallFunction) {
    UserCallFunction[UserCallFunction["None"] = 0] = "None";
    UserCallFunction[UserCallFunction["UserList"] = 1] = "UserList";
    UserCallFunction[UserCallFunction["UserInfo"] = 2] = "UserInfo";
})(UserCallFunction || (UserCallFunction = {}));
;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmrContent; });
var EmrContent = (function () {
    function EmrContent(_value, _mel, window) {
        var _this = this;
        this._value = _value;
        this._mel = _mel;
        this.window = window;
        this.data = (this._value === undefined) ? [] : this._value.split('^');
        this.isNew = (this._value === undefined) ? true : false;
        this.contentId = (this.data.length > 0) ? this.data[0] : '';
        this.key = (this.data.length > 1) ? this.data[1] : '';
        this.name = (this.data.length > 2) ? this.data[2] : '';
        this.value = (this.data.length > 3) ? this.data[3] : '';
        this._unk0 = (this.data.length > 4) ? this.data[4] : '';
        this._unk1 = (this.data.length > 5) ? this.data[5] : '';
        this._unk2 = (this.data.length > 6) ? this.data[6] : '';
        this._unk3 = (this.data.length > 7) ? this.data[7] : '';
        this._unk4 = (this.data.length > 8) ? this.data[8] : '';
        this._unk5 = (this.data.length > 9) ? this.data[9] : '';
        this.toAddString = function (encodeValue) {
            var recordValue = (encodeValue === undefined) ? _this.value : _this.window.btoa(_this.value);
            return _this.key + '^' + _this.name + '^' + recordValue + '^'
                + _this._unk0 + '^' + _this._unk1 + '^' + _this._unk2 + '^'
                + _this._unk3 + '^' + _this._unk4 + '^' + _this._unk5;
        };
        this.save = function (encodeValue) {
            var response;
            if (_this.isNew) {
                response = _this._mel.melFunc('{MEL_ADD_CONTENT("' + _this.toAddString(encodeValue) + '")}');
                _this.isNew = false;
            }
            else {
                response = _this._mel.melFunc('{MEL_REMOVE_CONTENT("' + _this.contentId + '")}');
                response = _this._mel.melFunc('{MEL_ADD_CONTENT("' + _this.toAddString(encodeValue) + '")}');
            }
        };
        this.remove = function () {
            _this._mel.melFunc('{MEL_REMOVE_CONTENT("' + _this.contentId + '")}');
        };
    }
    return EmrContent;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientContact; });
var PatientContact = (function () {
    function PatientContact(_value) {
        var _this = this;
        this._value = _value;
        this.data = (this._value === undefined) ? [] : this._value.split('^');
        this.name = (this.data.length > 0) ? this.data[0] : '';
        this.type = (this.data.length > 1) ? this.data[1] : '';
        this.phone = (this.data.length > 2) ? this.data[2] : '';
        this.phoneType = (this.data.length > 3) ? this.data[3] : '';
        this.address = (this.data.length > 4) ? this.data[4] : '';
        this.toMelString = function () {
            return _this._value;
        };
    }
    return PatientContact;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problem; });
var Problem = (function () {
    function Problem(_value) {
        this._value = _value;
        this.data = (this._value === undefined) ? [] : this._value.split('^');
        this.type = (this.data.length > 0) ? this.data[0] : '';
        this.description = (this.data.length > 1) ? this.data[1] : '';
        this.codeIcd9 = (this.data.length > 2) ? this.data[2] : '';
        this.comment = (this.data.length > 3) ? this.data[3] : '';
        this.onsetDate = (this.data.length > 4) ? this.data[4] : '';
        this.stopDate = (this.data.length > 5) ? this.data[5] : '';
        this.stopReason = (this.data.length > 6) ? this.data[6] : '';
        this.codeIcd10 = (this.data.length > 7) ? this.data[7] : '';
        this.lastModifiedDate = (this.data.length > 9) ? this.data[9] : '';
    }
    Object.defineProperty(Problem.prototype, "problemId", {
        get: function () {
            this._problemId = (this.data.length > 8) ? this.data[8] : '';
            this._problemId = (this._problemId.indexOf('.') > 0) ? this._problemId.substr(0, this._problemId.indexOf('.')) : this._problemId;
            return this._problemId;
        },
        enumerable: true,
        configurable: true
    });
    return Problem;
}());

;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Immunization; });
var Immunization = (function () {
    function Immunization(_value, _mel) {
        var _this = this;
        this._value = _value;
        this._mel = _mel;
        this.data = (this._value === undefined) ? [] : this._value.split('^');
        this.isNew = this._value === undefined ? true : false;
        this.immunizationId = (this.data.length > 0) ? this.data[0] : '';
        this.immunizationGroupId = (this.data.length > 1) ? this.data[1] : '';
        this.vaccineGroupName = (this.data.length > 2) ? this.data[2] : '';
        this.vaccineName = (this.data.length > 3) ? this.data[3] : '';
        this.medicalDisplayName = (this.data.length > 4) ? this.data[4] : '';
        this.series = (this.data.length > 5) ? this.data[5] : '';
        this.wasGiven = (this.data.length > 6) ? this.data[6] : '';
        this.reasonNotGiven = (this.data.length > 7) ? this.data[7] : '';
        this.historical = (this.data.length > 8) ? this.data[8] : '';
        this.historicalSource = (this.data.length > 9) ? this.data[9] : '';
        this.vfcElegibility = (this.data.length > 10) ? this.data[10] : '';
        this.ddid = (this.data.length > 11) ? this.data[11] : '';
        this.dnid = (this.data.length > 12) ? this.data[12] : '';
        this.gpi = (this.data.length > 13) ? this.data[13] : '';
        this.kdc = (this.data.length > 14) ? this.data[14] : '';
        this.ndc = (this.data.length > 15) ? this.data[15] : '';
        this.cvxCode = (this.data.length > 16) ? this.data[16] : '';
        this.doseAmount = (this.data.length > 17) ? this.data[17] : '';
        this.dosageUnitOfMeasure = (this.data.length > 18) ? this.data[18] : '';
        this.route = (this.data.length > 19) ? this.data[19] : '';
        this.routeCode = (this.data.length > 20) ? this.data[20] : '';
        this.site = (this.data.length > 21) ? this.data[21] : '';
        this.siteCode = (this.data.length > 22) ? this.data[22] : '';
        this.manufacturer = (this.data.length > 23) ? this.data[23] : '';
        this.manufacturerCode = (this.data.length > 24) ? this.data[24] : '';
        this.lotNumber = (this.data.length > 25) ? this.data[25] : '';
        this.expirationDate = (this.data.length > 26) ? this.data[26] : '';
        this.visPublishedDate = (this.data.length > 27) ? this.data[27] : '';
        this.administeredByName = (this.data.length > 28) ? this.data[28] : '';
        this.administeredDate = (this.data.length > 29) ? this.data[29] : '';
        this.administeredDateType = (this.data.length > 30) ? this.data[30] : '';
        this.administeredComments = (this.data.length > 31) ? this.data[31] : '';
        this.advReactionDateTime = (this.data.length > 32) ? this.data[32] : '';
        this.advReactionDateTimeType = (this.data.length > 33) ? this.data[33] : '';
        this.advReactionComments = (this.data.length > 34) ? this.data[34] : '';
        this.advReactionCmtByName = (this.data.length > 35) ? this.data[35] : '';
        this.signed = (this.data.length > 36) ? this.data[36] : '';
        this.signedByName = (this.data.length > 37) ? this.data[37] : '';
        this.signedDate = (this.data.length > 38) ? this.data[38] : '';
        this.reasonRemoved = (this.data.length > 39) ? this.data[39] : '';
        this.stopDate = (this.data.length > 40) ? this.data[40] : '';
        this.reasonNotGivenMedical = (this.data.length > 41) ? this.data[41] : '';
        this.reasonNotGivenMedicalDetail = (this.data.length > 42) ? this.data[42] : '';
        this.save = function () {
            if (_this.isNew) {
                var isError = _this.validateAdd();
                var response = void 0;
                if (isError === '') {
                    response = _this._mel.melFunc('{IMMUN_ADD("' + _this.toStringAdd() + '")}');
                    if (response < 0) {
                        alert(response);
                    }
                }
                else {
                    alert(isError);
                }
            }
            else {
            }
        };
        this.toMelString = function () {
            return _this._value;
        };
        this.validateAdd = function () {
            var errorMessage = ' is required.';
            if (_this.vaccineGroupName === '') {
                return 'vaccineGroupName' + errorMessage;
            }
            if (_this.wasGiven === '') {
                return 'wasGiven' + errorMessage;
            }
            if (_this.historical === '') {
                return 'historical' + errorMessage;
            }
            if (_this.vfcElegibility === '') {
                return 'vfcElegibility' + errorMessage;
            }
            if (_this.administeredDate === '') {
                return 'administeredDate' + errorMessage;
            }
            if (_this.doseAmount.match(/[^0-9.]/g)) {
                return 'doseAmount should be numeric.';
            }
            return '';
        };
        this.toStringAdd = function () {
            return _this.vaccineGroupName + '^' + _this.vaccineName + '^' + _this.medicalDisplayName + '^' + _this.series + '^' + _this.wasGiven +
                '^' + _this.reasonNotGiven + '^' + _this.historical + '^' + _this.historicalSource + '^' + _this.vfcElegibility + '^' + _this.ddid +
                '^' + _this.dnid + '^' + _this.gpi + '^' + _this.kdc + '^' + _this.ndc + '^' + _this.cvxCode + '^' + _this.doseAmount + '^' + _this.dosageUnitOfMeasure +
                '^' + _this.route + '^' + _this.routeCode + '^' + _this.site + '^' + _this.siteCode + '^' + _this.manufacturer + '^' + _this.manufacturerCode +
                '^' + _this.lotNumber + '^' + _this.expirationDate + '^' + _this.visPublishedDate + '^' + _this.administeredByName + '^' + _this.administeredDate +
                '^' + _this.administeredDateType + '^' + _this.administeredComments + '^' + _this.advReactionDateTime + '^' + _this.advReactionDateTimeType +
                '^' + _this.advReactionComments + '^' + _this.advReactionCmtByName + '^' + _this.signed + '^' + _this.signedByName + '^' + _this.signedDate +
                '^' + _this.reasonRemoved + '^' + _this.stopDate + '^' + _this.reasonNotGivenMedical + '^' + _this.reasonNotGivenMedicalDetail;
        };
    }
    return Immunization;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservationType; });
var ObservationType = (function () {
    function ObservationType() {
        this.None = 'Undefined';
        this.Signed = 'Signed';
        this.DocumentUnsigned = 'Update';
    }
    return ObservationType;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_enums__ = __webpack_require__(2);

var User = (function () {
    function User(_value, callFunction) {
        var _this = this;
        this._value = _value;
        this.callFunction = callFunction;
        this.data = (this._value === undefined) ? [] : this._value.split('^');
        this.toMelString = function () {
            return _this._value;
        };
        if (callFunction === __WEBPACK_IMPORTED_MODULE_0__enums_enums__["b" /* UserCallFunction */].UserInfo) {
            this.loginName = (this.data.length > 0) ? this.data[0] : '';
            this.searchName = (this.data.length > 1) ? this.data[1] : '';
            this.phoneNumber = (this.data.length > 2) ? this.data[2] : '';
            this.homeLocation = (this.data.length > 3) ? this.data[3] : '';
            this.group = (this.data.length > 4) ? this.data[4] : '';
            this.jobTitle = (this.data.length > 5) ? this.data[5] : '';
            this.specialty = (this.data.length > 6) ? this.data[6] : '';
            this.roles = (this.data.length > 7) ? this.data[7].split(';') : [];
            this.npi = (this.data.length > 8) ? this.data[8] : '';
            this.prescriberId = (this.data.length > 9) ? this.data[9] : '';
            this.deaId = (this.data.length > 10) ? this.data[10] : '';
            this.stateLicenceId = (this.data.length > 11) ? this.data[11] : '';
            this.memberLogin = (this.data.length > 12) ? this.data[12] : '';
            this.data2000 = (this.data.length > 13) ? this.data[13] : '';
            this.uniquePhysicianId = (this.data.length > 14) ? this.data[14] : '';
            this.activationDate = (this.data.length > 15) ? this.data[15] : '';
            this.expirationDate = (this.data.length > 16) ? this.data[16] : '';
            this.currentLocation = (this.data.length > 17) ? this.data[17] : '';
            this.firstName = (this.data.length > 18) ? this.data[18] : '';
            this.middleName = (this.data.length > 19) ? this.data[19] : '';
            this.lastName = (this.data.length > 20) ? this.data[20] : '';
        }
        ;
        if (callFunction === __WEBPACK_IMPORTED_MODULE_0__enums_enums__["b" /* UserCallFunction */].UserList) {
            this.loginName = (this.data.length > 0) ? this.data[0] : '';
            this.searchName = (this.data.length > 1) ? this.data[1] : '';
            this.phoneNumber = (this.data.length > 2) ? this.data[2] : '';
            this.homeLocation = (this.data.length > 3) ? this.data[3] : '';
            this.group = (this.data.length > 4) ? this.data[4] : '';
            this.jobTitle = (this.data.length > 5) ? this.data[5] : '';
            this.specialty = (this.data.length > 6) ? this.data[6] : '';
            this.npi = (this.data.length > 7) ? this.data[7] : '';
            this.prescriberId = (this.data.length > 8) ? this.data[8] : '';
            this.deaId = (this.data.length > 9) ? this.data[9] : '';
            this.stateLicenceId = (this.data.length > 10) ? this.data[10] : '';
            this.memberLogin = (this.data.length > 11) ? this.data[11] : '';
            this.data2000 = (this.data.length > 12) ? this.data[12] : '';
            this.uniquePhysicianId = (this.data.length > 13) ? this.data[13] : '';
            this.activationDate = (this.data.length > 14) ? this.data[14] : '';
            this.expirationDate = (this.data.length > 15) ? this.data[15] : '';
            this.roles = [];
        }
        ;
    }
    return User;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyData; });
var AllergyData = (function () {
    function AllergyData() {
        this.name = '';
        this.onDate = '';
        this.classification = '';
        this.description = '';
        this.gpiCode = '';
        this.severity = '';
        this.offDate = '';
    }
    return AllergyData;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);
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

var AllergyList = (function (_super) {
    __extends(AllergyList, _super);
    function AllergyList(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this.data = (_this._value === undefined) ? [] : _this._value.split('^');
        _this.name = (_this.data.length >= 1) ? _this.data[0] : '';
        _this.onDate = (_this.data.length >= 2) ? _this.data[1] : '';
        _this.classification = (_this.data.length >= 4) ? _this.data[3] : '';
        _this.description = (_this.data.length >= 5) ? _this.data[4] : '';
        _this.gpiCode = (_this.data.length >= 6) ? _this.data[5] : '';
        _this.severity = (_this.data.length >= 7) ? _this.data[6] : '';
        _this.offDate = null;
        return _this;
    }
    return AllergyList;
}(__WEBPACK_IMPORTED_MODULE_0__classes__["c" /* AllergyData */]));



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyListRemoved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);
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

var AllergyListRemoved = (function (_super) {
    __extends(AllergyListRemoved, _super);
    function AllergyListRemoved(_value) {
        var _this = _super.call(this, _value) || this;
        _this._value = _value;
        return _this;
    }
    return AllergyListRemoved;
}(__WEBPACK_IMPORTED_MODULE_0__classes__["d" /* AllergyList */]));



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Allergies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factories_factories__ = __webpack_require__(1);


var Allergies = (function () {
    function Allergies(_mel) {
        this._mel = _mel;
        this._addedArray = [];
        this._removedArray = [];
        this._currentArray = [];
    }
    Object.defineProperty(Allergies.prototype, "added", {
        get: function () {
            if (this._addedArray.length === 0) {
                this._added = (this._added !== undefined) ? this._added : this._mel.melFunc('{ALL_NEW("delimited")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["e" /* StringInternal */])(this._added).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._addedArray.push(new __WEBPACK_IMPORTED_MODULE_0__classes__["d" /* AllergyList */](dataArray[index]));
                }
            }
            return this._addedArray;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Allergies.prototype, "removed", {
        get: function () {
            if (this._removedArray.length === 0) {
                this._removed = (this._removed !== undefined) ? this._removed : this._mel.melFunc('{ALL_REMOVED("delimited")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["e" /* StringInternal */])(this._removed).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._removedArray.push(new __WEBPACK_IMPORTED_MODULE_0__classes__["e" /* AllergyListRemoved */](dataArray[index]));
                }
            }
            return this._removedArray;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Allergies.prototype, "current", {
        get: function () {
            if (this._currentArray.length === 0) {
                this._current = (this._current !== undefined) ? this._current : this._mel.melFunc('{ALL_PRIOR("delimited")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["e" /* StringInternal */])(this._current).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._currentArray.push(new __WEBPACK_IMPORTED_MODULE_0__classes__["e" /* AllergyListRemoved */](dataArray[index]));
                }
            }
            return this._currentArray;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Allergies;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DocumentVariable;
function DocumentVariable(value, saveCallback) {
    var ar = (value === undefined) ? new Object() : value;
    ar.save = function () {
        if (saveCallback !== undefined) {
            saveCallback();
        }
    };
    return ar;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = StringInternal;
function StringInternal(value, tag) {
    var sb = new String(value);
    sb.toList = function (seporator) {
        if (seporator === undefined) {
            seporator = '|';
        }
        var dataArray = value.split(seporator);
        dataArray = dataArray.filter(function (item) {
            return item.length !== 0;
        });
        return dataArray;
    };
    sb.startsWith = function (str) {
        return value.slice(0, str.length) === str;
    };
    sb.endsWith = function (str) {
        return value.slice(-str.length) === str;
    };
    sb.tag = (tag !== undefined) ? tag : '';
    sb.toDate = function () {
        return new Date(value.toString());
    };
    return sb;
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GetCurrentUser;
function GetCurrentUser(_mel) {
    return _mel.melFunc('{GETUSERINFO("' + _mel.melFunc('{USER.LOGINNAME}') + '")}') + '^' +
        _mel.melFunc('{USER.CURLOCATIONNAME}') + '^' + _mel.melFunc('{USER.FIRSTNAME}') + '^' +
        _mel.melFunc('{USER.MIDDLENAME}') + '^' + _mel.melFunc('{USER.LASTNAME}');
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = IsActiveXSupported;
function IsActiveXSupported(window) {
    var activeXsupport = 'ActiveXObject' in window;
    if (!activeXsupport) {
        alert("Your browser does not support ActiveX objects");
    }
    return activeXsupport;
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GetActiveXErrorMessage;
function GetActiveXErrorMessage(objectName, e) {
    var result = "Unable to load ActiveX interface " + objectName;
    result += ((e !== undefined && e.hasOwnProperty("Message")) ? ".\nError message: " + e.Message : "");
    return result;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);

var Observation = (function () {
    function Observation(_name, _observationType, _value, _mel) {
        var _this = this;
        this._name = _name;
        this._observationType = _observationType;
        this._value = _value;
        this._mel = _mel;
        this.data = (this._value === undefined) ? [] : this._value.split('^');
        this.observationType = new __WEBPACK_IMPORTED_MODULE_0__classes__["u" /* ObservationType */]();
        this.name = (this._name !== undefined) ? this._name : '';
        this.value = (this.data.length > 0) ? this.data[0] : '';
        this.date = (this.data.length > 1) ? this.data[1] : '';
        this.time = (this.data.length > 2) ? this.data[2] : '';
        this.signingUser = (this.data.length > 3) ? this.data[3] : '';
        this.enteringUser = (this.data.length > 4) ? this.data[4] : '';
        this.flags = (this.data.length > 5) ? this.data[5] : '';
        this.comment = (this.data.length > 6) ? this.data[6] : '';
        this.state = (this.data.length > 7) ? this.data[7] : '';
        this.locationOfCare = (this.data.length > 8) ? this.data[8] : '';
        this.documentType = (this.data.length > 9) ? this.data[9] : '';
        this.documentId = (this.data.length > 10) ? this.data[10] : '';
        this.type = this._observationType;
        this.save = function () {
            var response = _this._mel.saveObservation(_this.name, _this.value, _this.date);
            if (_this.tag !== undefined && _this.tag !== '') {
                response = _this._mel.melFunc('{OBSTAGNOW("' + _this.name + '","' + _this.tag + '")}');
            }
            if (_this.comment !== undefined && _this.comment != '') {
                response = _this._mel.melFunc('{OBSMODIFIERNOW("' + _this.name + '","' + _this.comment + '")}');
            }
        };
        this.remove = function () {
        };
    }
    Object.defineProperty(Observation.prototype, "unitOfMeasure", {
        get: function () {
            this._unitOfMeasure = (this._unitOfMeasure !== undefined) ? this._unitOfMeasure : this._mel.melFunc('{OBSUNIT("' + this.name + '")}');
            return this._unitOfMeasure;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Observation.prototype, "tag", {
        get: function () {
            this._tag = (this._tag !== undefined) ? this._tag
                : (this._observationType === this.observationType.DocumentUnsigned) ? this._mel.melFunc('{OBSTAGNOW("' + this.name + '")}')
                    : '';
            return this._tag;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Observation;
}());



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Protocol; });
var Protocol = (function () {
    function Protocol(_value) {
        this._value = _value;
        this.name = (this._value !== undefined) ? this._value : '';
    }
    return Protocol;
}());



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Measurement; });
var Measurement = (function () {
    function Measurement(isCurrent, _weight, _height, _mel) {
        this.isCurrent = isCurrent;
        this._weight = _weight;
        this._height = _height;
        this._mel = _mel;
    }
    Object.defineProperty(Measurement.prototype, "weight", {
        get: function () {
            return this._mel.getObs(this.isCurrent, this._weight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measurement.prototype, "height", {
        get: function () {
            return this._mel.getObs(this.isCurrent, this._height);
        },
        enumerable: true,
        configurable: true
    });
    return Measurement;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Measurements; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);

var Measurements = (function () {
    function Measurements(_weight, _height, _mel) {
        this._weight = _weight;
        this._height = _height;
        this._mel = _mel;
    }
    Object.defineProperty(Measurements.prototype, "current", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_0__classes__["q" /* Measurement */](true, this._weight, this._height, this._mel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measurements.prototype, "previous", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_0__classes__["q" /* Measurement */](false, this._weight, this._height, this._mel);
        },
        enumerable: true,
        configurable: true
    });
    return Measurements;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Insurance; });
var Insurance = (function () {
    function Insurance(insuranceType, _mel) {
        this.insuranceType = insuranceType;
        this._mel = _mel;
    }
    Object.defineProperty(Insurance.prototype, "name", {
        get: function () {
            this._name = (this._name === undefined) ? this._mel.melFunc('{INS_NAME("' + this.insuranceType + '")}') : this._name;
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Insurance.prototype, "address", {
        get: function () {
            this._address = (this._address === undefined) ? this._mel.melFunc('{INS_ADDR("' + this.insuranceType + '")}') : this._address;
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Insurance.prototype, "insuranceId", {
        get: function () {
            this._insuranceId = (this._insuranceId === undefined) ? this._mel.melFunc('{INS_ID("' + this.insuranceType + '")}') : this._insuranceId;
            return this._insuranceId;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Insurance.prototype, "planName", {
        get: function () {
            this._planName = (this._planName === undefined) ? this._mel.melFunc('{INS_PLAN("' + this.insuranceType + '")}') : this._planName;
            return this._planName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Insurance.prototype, "groupNumber", {
        get: function () {
            this._groupNumber = (this._groupNumber === undefined) ? this._mel.melFunc('{INS_GRP("' + this.insuranceType + '")}') : this._groupNumber;
            return this._groupNumber;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Insurance.prototype, "phone", {
        get: function () {
            this._phone = (this._phone === undefined) ? this._mel.melFunc('{INS_PHONE("' + this.insuranceType + '")}') : this._phone;
            return this._phone;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Insurance;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarePlan; });
var CarePlan = (function () {
    function CarePlan(_value, _mel) {
        var _this = this;
        this._value = _value;
        this._mel = _mel;
        this.data = this._value === undefined ? [] : this._value.split('^');
        this.isNew = this._value === undefined ? true : false;
        this.carePlanId = (this.data.length >= 1) ? this.data[0] : '';
        this.goal = (this.data.length >= 2) ? this.data[1] : '';
        this.snomedCTCode = (this.data.length >= 3) ? this.data[2] : '';
        this.target = (this.data.length >= 4) ? this.data[3] : '';
        this.instructions = (this.data.length >= 5) ? this.data[4] : '';
        this.goalSetDate = (this.data.length >= 6) ? this.data[5] : '';
        this.goalMetDate = (this.data.length >= 7) ? this.data[6] : '';
        this.recordCreatedDateTime = (this.data.length >= 8) ? this.data[7] : '';
        this.sign = (this.data.length >= 9) ? this.data[8] : '';
        this.signedBy = (this.data.length >= 10) ? this.data[9] : '';
        this.signedDate = (this.data.length >= 11) ? this.data[10] : '';
        this.recordChangedDateTime = (this.data.length >= 12) ? this.data[11] : '';
        this.recordChangedBy = (this.data.length >= 13) ? this.data[12] : '';
        this.patientConditionDescription = (this.data.length >= 14) ? this.data[13] : '';
        this.patientConditionCode = (this.data.length >= 15) ? this.data[14] : '';
        this.save = function () {
            if (_this.isNew) {
                var isError = _this.validateAdd();
                var response = void 0;
                if (isError === '') {
                    response = _this._mel.melFunc('{MEL_ADD_CARE_PLAN(' + _this.toStringAdd() + ')}');
                    if (response < 0) {
                        alert(_this.carePlanAddError(response));
                    }
                }
                else {
                    alert(isError);
                }
            }
            else {
            }
        };
        this.toMelString = function () {
            return _this._value;
        };
        this.validateAdd = function () {
            var errorMessage = ' is required.';
            if (_this.goal === '') {
                return 'goal' + errorMessage;
            }
            return '';
        };
        this.toStringAdd = function () {
            return '\"' + _this.goal + '\",\"' + _this.snomedCTCode + '\",\"' + _this.target + '\",\"' + _this.instructions + '\",\"' + _this.goalSetDate +
                '\",\"' + _this.goalMetDate + '\",\"' + _this.patientConditionCode + '\"';
        };
        this.carePlanAddError = function (code) {
            var response = '';
            switch (code) {
                case "-1":
                    response = "Error Code -1: Description is blank or too long.";
                    break;
                case "-2":
                    response = "Error Code -2: Code is too long.";
                    break;
                case "-3":
                    response = "Error Code -3: Target is too long.";
                    break;
                case "-4":
                    response = "Error Code -4: Instruction is too long.";
                    break;
                case "-5":
                    response = "Error Code -5: goalSetDate is invalid.";
                    break;
                case "-6":
                    response = "Error Code -6: goalMetDate is invalid or less than goalSetDate.";
                    break;
                case "-7":
                    response = "Error Code -7: Invalid patientConditionCode. Use $mdObject.patient.problems[index].problemId";
                    break;
                case "-8":
                    response = "Error Code -8: Cannot add Care Plan for some other reason.";
                    break;
                case "-21":
                    response = "Error Code -21: Service layer error.";
                    break;
                default:
            }
            return response;
        };
    }
    return CarePlan;
}());



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = (function () {
    function Address(_mel) {
        this._mel = _mel;
    }
    Object.defineProperty(Address.prototype, "address1", {
        get: function () {
            this._address1 = (this._address1 !== undefined) ? this._address1 : this._mel.melFunc('{PATIENT.ADDRESS1}');
            return this._address1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "address2", {
        get: function () {
            this._address2 = (this._address2 !== undefined) ? this._address2 : this._mel.melFunc('{PATIENT.ADDRESS2}');
            return this._address2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            this._city = (this._city !== undefined) ? this._city : this._mel.melFunc('{PATIENT.CITY}');
            return this._city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "state", {
        get: function () {
            this._state = (this._state !== undefined) ? this._state : this._mel.melFunc('{PATIENT.STATE}');
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "postCode", {
        get: function () {
            this._postCode = (this._postCode !== undefined) ? this._postCode : this._mel.melFunc('{PATIENT.ZIP}');
            return this._postCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "country", {
        get: function () {
            this._country = (this._country !== undefined) ? this._country : this._mel.melFunc('{PATIENT.COUNTRY}');
            return this._country;
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phone; });
var Phone = (function () {
    function Phone(_mel) {
        this._mel = _mel;
    }
    Object.defineProperty(Phone.prototype, "home", {
        get: function () {
            this._home = (this._home !== undefined) ? this._home : this._mel.melFunc('{PATIENT.ALTPHONE}');
            return this._home;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Phone.prototype, "business", {
        get: function () {
            this._business = (this._business !== undefined) ? this._business : this._mel.melFunc('{PATIENT.WORKPHONE}');
            return this._business;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Phone.prototype, "mobile", {
        get: function () {
            this._mobile = (this._mobile !== undefined) ? this._mobile : this._mel.melFunc('{PATIENT.CELLPHONE}');
            return this._mobile;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Phone.prototype, "fax", {
        get: function () {
            this._fax = (this._fax !== undefined) ? this._fax : this._mel.melFunc('{PATIENT.FAXPHONE}');
            return this._fax;
        },
        enumerable: true,
        configurable: true
    });
    return Phone;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferringProviderPhone; });
var ReferringProviderPhone = (function () {
    function ReferringProviderPhone(_mel) {
        this._mel = _mel;
    }
    Object.defineProperty(ReferringProviderPhone.prototype, "office", {
        get: function () {
            this._office = (this._office !== undefined) ? this._office : this._mel.melFunc('{PATIENT.REFMDOFFICEPHONE}');
            return this._office;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProviderPhone.prototype, "alternative", {
        get: function () {
            this._alternative = (this._alternative !== undefined) ? this._alternative : this._mel.melFunc('{PATIENT.REFMDALTPHONE}');
            return this._alternative;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProviderPhone.prototype, "fax", {
        get: function () {
            this._fax = (this._fax !== undefined) ? this._fax : this._mel.melFunc('{PATIENT.REFMDFAXPHONE}');
            return this._fax;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProviderPhone.prototype, "pager", {
        get: function () {
            this._pager = (this._pager !== undefined) ? this._pager : this._mel.melFunc('{PATIENT.REFMDPAGERPHONE}');
            return this._pager;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProviderPhone.prototype, "mobile", {
        get: function () {
            this._mobile = (this._mobile !== undefined) ? this._mobile : this._mel.melFunc('{PATIENT.REFMDCELLPHONE}');
            return this._mobile;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return ReferringProviderPhone;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferringProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);

var ReferringProvider = (function () {
    function ReferringProvider(_mel) {
        this._mel = _mel;
        this._phone = new __WEBPACK_IMPORTED_MODULE_0__classes__["B" /* ReferringProviderPhone */](this._mel);
    }
    Object.defineProperty(ReferringProvider.prototype, "referringProviderId", {
        get: function () {
            this._referringProviderId = (this._referringProviderId !== undefined) ? this._referringProviderId : this._mel.melFunc('{PATIENT.REFMDID}');
            return this._referringProviderId;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProvider.prototype, "firstName", {
        get: function () {
            this._firstName = (this._firstName !== undefined) ? this._firstName : this._mel.melFunc('{PATIENT.REFMDFIRSTNAME}');
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProvider.prototype, "lastName", {
        get: function () {
            this._lastName = (this._lastName !== undefined) ? this._lastName : this._mel.melFunc('{PATIENT.REFMDLASTNAME}');
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProvider.prototype, "email", {
        get: function () {
            this._email = (this._email !== undefined) ? this._email : this._mel.melFunc('{PATIENT.REFMDEMAILADDRESS}');
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProvider.prototype, "fullAddress", {
        get: function () {
            this._fullAddress = (this._fullAddress !== undefined) ? this._fullAddress : this._mel.melFunc('{PATIENT.REFMDADDRESS}');
            return this._fullAddress;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ReferringProvider.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        enumerable: true,
        configurable: true
    });
    return ReferringProvider;
}());



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmrMel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bases_bases__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factories_factories__ = __webpack_require__(1);
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


var EmrMel = (function (_super) {
    __extends(EmrMel, _super);
    function EmrMel(window) {
        var _this = _super.call(this, window) || this;
        _this.window = window;
        _this.melObjectName = 'GE.CPO.EMR.80.MEL';
        _this.melObjectNameSimulator = 'GE.CPO.EMR.80.MEL.SIMULATOR';
        _this.initialization = function () {
            if (_this.isActiveXSupported) {
                try {
                    _this.mel = new ActiveXObject(_this.melObjectName);
                }
                catch (e) {
                    _this.errorMessage = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["b" /* GetActiveXErrorMessage */])(_this.melObjectName, e);
                }
                if (_this.errorMessage !== undefined) {
                    try {
                        _this.mel = new ActiveXObject(_this.melObjectNameSimulator);
                    }
                    catch (e) {
                        alert(_this.errorMessage);
                    }
                }
            }
        };
        _this.melFunc = function (data) {
            return (_this.mel === null) ? _this.noData : _this.mel.eval(data);
        };
        _this.saveObservation = function (obs, value, date) {
            return (_this.mel === null) ? _this.noData : _this.mel.OBSNOW(obs, value, date);
        };
        _this.getObs = function (isCurrent, data) {
            return (_this.mel === null) ? _this.noData : ((isCurrent === true) ? _this.mel.OBSNOW(data, '', '') : _this.mel.OBSPREV(data));
        };
        _this.showUrlDialog = function (url) {
            _this.melFunc('{SHOWHTMLFORM("' + url + '","test")}');
        };
        _this.initialization();
        return _this;
    }
    return EmrMel;
}(__WEBPACK_IMPORTED_MODULE_0__bases_bases__["a" /* EmrBase */]));



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ApplicationBase */
var ApplicationBase = (function () {
    function ApplicationBase() {
    }
    return ApplicationBase;
}());



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmrBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories_factories__ = __webpack_require__(1);

var EmrBase = (function () {
    function EmrBase(window) {
        this.window = window;
        this.isActiveXSupported = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["d" /* IsActiveXSupported */])(this.window);
        this.noData = 'Data Access Error';
    }
    return EmrBase;
}());



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmrApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bases_bases__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factories_factories__ = __webpack_require__(1);
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


var EmrApp = (function (_super) {
    __extends(EmrApp, _super);
    function EmrApp(window) {
        var _this = _super.call(this, window) || this;
        _this.window = window;
        _this.appObjectName = 'GE.CPO.EMR.90.Application';
        _this.appObjectNameSimulator = 'GE.CPO.EMR.90.Application.SIMULATOR';
        _this.initialization = function () {
            if (_this.isActiveXSupported) {
                try {
                    _this.app = new ActiveXObject(_this.appObjectName);
                    _this.app.SetPasscode(_this.window.external['Passcode']);
                }
                catch (e) {
                    _this.errorMessage = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["b" /* GetActiveXErrorMessage */])(_this.appObjectName, e);
                }
                if (_this.errorMessage !== undefined) {
                    try {
                        _this.app = new ActiveXObject(_this.appObjectNameSimulator);
                    }
                    catch (e) {
                        alert(_this.errorMessage);
                    }
                }
            }
        };
        _this.enterpriseId = function () {
            return (_this.app === null) ? _this.noData : _this.app.EnterpriseID;
        };
        _this.databaseVersion = function () {
            return (_this.app === null) ? _this.noData : _this.app.DatabaseVersion;
        };
        _this.showUrlDialog = function (url) {
            return (_this.app === null) ? _this.noData : _this.app.ShowURLDialog(url);
        };
        _this.initialization();
        return _this;
    }
    return EmrApp;
}(__WEBPACK_IMPORTED_MODULE_0__bases_bases__["a" /* EmrBase */]));



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmrWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories_factories__ = __webpack_require__(1);

var EmrWindow = (function () {
    function EmrWindow(_mel, _app, window, document) {
        var _this = this;
        this._mel = _mel;
        this._app = _app;
        this.window = window;
        this.document = document;
        this.openDialog = function (url) {
            ((Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(url.toLowerCase())).startsWith('//localserver')) ? _this._mel.showUrlDialog(url) : _this._app.showUrlDialog(url);
        };
        this.open = function (url, verb, target, features, data) {
            var form = _this.document.createElement("form");
            form.action = url;
            form.method = verb || 'GET';
            form.target = target || "_self";
            if (data) {
                for (var key in data) {
                    var input = _this.document.createElement("textarea");
                    input.name = key;
                    input.value = (typeof data[key] === "object") ? JSON.stringify(data[key]) : data[key];
                    form.appendChild(input);
                }
            }
            form.style.display = 'none';
            _this.document.body.appendChild(form);
            var w = _this.window.open("about:blank", target, features);
            form.submit();
            return w;
        };
    }
    return EmrWindow;
}());



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factories_factories__ = __webpack_require__(1);


var Emr = (function () {
    function Emr(browserWindow, browserDocument) {
        var _this = this;
        this.browserWindow = browserWindow;
        this.browserDocument = browserDocument;
        this._emrMel = new __WEBPACK_IMPORTED_MODULE_0__classes__["k" /* EmrMel */](this.browserWindow);
        this._emrApp = new __WEBPACK_IMPORTED_MODULE_0__classes__["i" /* EmrApp */](this.browserWindow);
        this._melContent = {};
        this._window = new __WEBPACK_IMPORTED_MODULE_0__classes__["l" /* EmrWindow */](this._emrMel, this._emrApp, this.browserWindow, this.browserDocument);
        this.melContent = function (name) {
            if (_this._melContent[name] === undefined) {
                var data_1 = _this._emrMel.melFunc('{MEL_GET_CONTENT(\"' + name + '\",\"MATCH\")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["e" /* StringInternal */])(data_1).toList();
                var melContentArray = [];
                for (var index = 0; index < dataArray.length; index++) {
                    melContentArray.push(new __WEBPACK_IMPORTED_MODULE_0__classes__["j" /* EmrContent */](dataArray[index], _this._emrMel, _this.browserWindow));
                }
                _this._melContent[name] = melContentArray;
                _this._melContent[name].tag = function () {
                    return 'MEL_GET_CONTENT';
                }();
                _this._melContent[name].toMelString = function () {
                    return data_1;
                };
            }
            return _this._melContent[name];
        };
        this.browserWindow['_melOpener'] = this._emrMel;
        this.browserWindow['_appOpener'] = this._emrApp;
    }
    Object.defineProperty(Emr.prototype, "enterpriseId", {
        get: function () {
            return this._emrApp.enterpriseId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emr.prototype, "databaseVersion", {
        get: function () {
            return this._emrApp.databaseVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emr.prototype, "version", {
        get: function () {
            this._version = (this._version !== undefined) ? this._version : this._emrMel.melFunc('{VER_EMR()}');
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emr.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emr.prototype, "emrMel", {
        get: function () {
            var data = (this.browserWindow.opener['_melOpener'] !== undefined) ? this.browserWindow.opener['_melOpener'] : this._emrMel;
            return data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emr.prototype, "emrApp", {
        get: function () {
            var data = (this.browserWindow.opener['_appOpener'] !== undefined) ? this.browserWindow.opener['_appOpener'] : this._emrApp;
            return data;
        },
        enumerable: true,
        configurable: true
    });
    return Emr;
}());



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories_factories__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_enums__ = __webpack_require__(2);



var Patient = (function () {
    function Patient(_weight, _height, window, document, _mel) {
        var _this = this;
        this._weight = _weight;
        this._height = _height;
        this.window = window;
        this.document = document;
        this._mel = _mel;
        this.observationType = new __WEBPACK_IMPORTED_MODULE_1__classes__["u" /* ObservationType */]();
        this._contactsArray = [];
        this._problemsArray = [];
        this._observations = {};
        this._protocolsArray = [];
        this._insurances = [];
        this._immunizationsArray = [];
        this._carePlansArray = [];
        this._locationsArray = [];
        this._measurements = new __WEBPACK_IMPORTED_MODULE_1__classes__["r" /* Measurements */](this._weight, this._height, this._mel);
        this._allergies = new __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* Allergies */](this._mel);
        this._referringProvider = new __WEBPACK_IMPORTED_MODULE_1__classes__["A" /* ReferringProvider */](this._mel);
        this._phone = new __WEBPACK_IMPORTED_MODULE_1__classes__["x" /* Phone */](this._mel);
        this._address = new __WEBPACK_IMPORTED_MODULE_1__classes__["a" /* Address */](this._mel);
        this._emr = new __WEBPACK_IMPORTED_MODULE_1__classes__["h" /* Emr */](this.window, this.document);
        this.observations = function (name) {
            if (_this._observations[name] === undefined) {
                var updateData = _this._mel.melFunc('{LIST_OBS("' + name + '","Update","Delimited","value")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(updateData).toList();
                var observationsArray = [];
                for (var index = 0; index < dataArray.length; index++) {
                    observationsArray.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["t" /* Observation */](name, _this.observationType.DocumentUnsigned, dataArray[index], _this._mel));
                }
                _this._observations[name] = observationsArray;
                var signedData = _this._mel.melFunc('{LIST_OBS("' + name + '","Signed","Delimited","value")}');
                var dataArrayU = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(signedData).toList();
                for (var index = 0; index < dataArrayU.length; index++) {
                    _this._observations[name].push(new __WEBPACK_IMPORTED_MODULE_1__classes__["t" /* Observation */](name, _this.observationType.Signed, dataArrayU[index], _this._mel));
                }
                _this._observations[name].tag = function () {
                    return 'LIST_OBS.' + name;
                }();
            }
            return _this._observations[name];
        };
    }
    Object.defineProperty(Patient.prototype, "patientId", {
        get: function () {
            this._patientId = (this._patientId !== undefined) ? this._patientId : this._mel.melFunc('{PATIENT.PATIENTID}');
            return this._patientId;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "pid", {
        get: function () {
            this._pid = (this._pid !== undefined) ? this._pid : this._mel.melFunc('{find("patient", "PID")}');
            return this._pid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "medicalRecordId", {
        get: function () {
            this._medicalRecordId = (this._medicalRecordId !== undefined) ? this._medicalRecordId : this._mel.melFunc('{PATIENT.MEDRECNO}');
            return this._medicalRecordId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "externalId", {
        get: function () {
            this._externalId = (this._externalId !== undefined) ? this._externalId : this._mel.melFunc('{PATIENT.EXTERNALID}');
            return this._externalId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "printId", {
        get: function () {
            this._printId = (this._printId !== undefined) ? this._printId : this._mel.melFunc('{PATIENT.PRINTID}');
            return this._printId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "ssn", {
        get: function () {
            this._ssn = (this._ssn !== undefined) ? this._ssn : this._mel.melFunc('{PATIENT.SOCSECNO}');
            return this._ssn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "firstName", {
        get: function () {
            this._firstName = (this._firstName !== undefined) ? this._firstName : this._mel.melFunc('{PATIENT.FIRSTNAME}');
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "lastName", {
        get: function () {
            this._lastName = (this._lastName !== undefined) ? this._lastName : this._mel.melFunc('{PATIENT.LASTNAME}');
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "middleName", {
        get: function () {
            this._middleName = (this._middleName !== undefined) ? this._middleName : this._mel.melFunc('{PATIENT.MIDDLENAME}');
            return this._middleName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "labelName", {
        get: function () {
            this._labelName = (this._labelName !== undefined) ? this._labelName : this._mel.melFunc('{PATIENT.LABELNAME}');
            return this._labelName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "namePrefix", {
        get: function () {
            this._namePrefix = (this._namePrefix !== undefined) ? this._namePrefix : this._mel.melFunc('{PATIENT.TITLE}');
            return this._namePrefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "nameSuffix", {
        get: function () {
            this._nameSuffix = (this._nameSuffix !== undefined) ? this._nameSuffix : this._mel.melFunc('{PATIENT.ENTITLEMENTS}');
            return this._nameSuffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "sex", {
        get: function () {
            this._sex = (this._sex !== undefined) ? this._sex : this._mel.melFunc('{PATIENT.SEX}');
            return this._sex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "race", {
        get: function () {
            this._race = (this._race !== undefined) ? this._race : this._mel.melFunc('{PATIENT.RACE}');
            return this._race;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "ethnicity", {
        get: function () {
            this._ethnicity = (this._ethnicity !== undefined) ? this._ethnicity : this._mel.melFunc('{PATIENT.ETHNICITY}');
            return this._ethnicity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "dateOfBirth", {
        get: function () {
            this._dateOfBirth = (this._dateOfBirth !== undefined) ? this._dateOfBirth : this._mel.melFunc('{PATIENT.DATEOFBIRTH}');
            return this._dateOfBirth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "dateOfDeath", {
        get: function () {
            this._dateOfDeath = (this._dateOfDeath !== undefined) ? this._dateOfDeath : this._mel.melFunc('{PATIENT.DATEOFDEATH}');
            return this._dateOfDeath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "maritalStatus", {
        get: function () {
            this._maritalStatus = (this._maritalStatus !== undefined) ? this._maritalStatus : this._mel.melFunc('{PATIENT.MARITALSTATUS}');
            return this._maritalStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "language", {
        get: function () {
            this._language = (this._language !== undefined) ? this._language : this._mel.melFunc('{PATIENT.PREFLANG}');
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "email", {
        get: function () {
            this._email = (this._email !== undefined) ? this._email : this._mel.melFunc('{PATIENT.EMAIL}');
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "contactBy", {
        get: function () {
            this._contactBy = (this._contactBy !== undefined) ? this._contactBy : this._mel.melFunc('{PATIENT.CONTACTBY}');
            return this._contactBy;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "contacts", {
        get: function () {
            var _this = this;
            if (this._contactsArray.length === 0) {
                this._contacts = (this._contacts !== undefined) ? this._contacts : this._mel.melFunc('{PATIENT.CONTACTS}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(this._contacts).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._contactsArray.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["w" /* PatientContact */](dataArray[index]));
                }
                this._contactsArray.tag = function () {
                    return 'PATIENT.CONTACTS';
                }();
                this._contactsArray.toMelString = function () {
                    return _this._contacts;
                };
            }
            return this._contactsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "employmentStatus", {
        get: function () {
            this._employmentStatus = (this._employmentStatus !== undefined) ? this._employmentStatus : this._mel.melFunc('{PATIENT.EMPLSTATUS}');
            return this._employmentStatus;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "clinicStatus", {
        get: function () {
            this._clinicStatus = (this._clinicStatus !== undefined) ? this._clinicStatus : this._mel.melFunc('{PATIENT.PSTATUS}');
            return this._clinicStatus;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "primaryCarePhysicianName", {
        get: function () {
            this._primaryCarePhysicianName = (this._primaryCarePhysicianName !== undefined) ? this._primaryCarePhysicianName : this._mel.melFunc('{PATIENT.PCP}');
            return this._primaryCarePhysicianName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "problems", {
        get: function () {
            var _this = this;
            if (this._problemsArray.length === 0) {
                this._problems = (this._problems !== undefined) ? this._problems : this._mel.melFunc('{PROB_AFTER("delimited","dat","com")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(this._problems).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._problemsArray.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["y" /* Problem */](dataArray[index]));
                }
                this._problemsArray.tag = function () {
                    return 'PROB_AFTER';
                }();
                this._problemsArray.toMelString = function () {
                    return _this._problems;
                };
            }
            return this._problemsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "protocols", {
        get: function () {
            var _this = this;
            if (this._protocolsArray.length === 0) {
                this._protocols = (this._protocols !== undefined) ? this._protocols : this._mel.melFunc('{LISTPROTOCOLSHORT("list")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(this._protocols).toList('\r\n');
                for (var index = 0; index < dataArray.length; index++) {
                    this._protocolsArray.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["z" /* Protocol */](dataArray[index]));
                }
                ;
                this._protocolsArray.tag = function () {
                    return 'LISTPROTOCOLSHORT("list")';
                }();
                this._protocolsArray.toMelString = function () {
                    return _this._protocols;
                };
            }
            return this._protocolsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "insurances", {
        get: function () {
            if (this._insurances.length === 0) {
                this._insurances.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["n" /* Insurance */]('P', this._mel));
                this._insurances.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["n" /* Insurance */]('S', this._mel));
                this._insurances.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["n" /* Insurance */]('T', this._mel));
            }
            ;
            return this._insurances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "immunizations", {
        get: function () {
            var _this = this;
            if (this._immunizationsArray.length === 0) {
                this._immunizations = (this._immunizations !== undefined) ? this._immunizations : this._mel.melFunc('{IMMUN_GETLIST()}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(this._immunizations).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._immunizationsArray.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["m" /* Immunization */](dataArray[index], this._mel));
                }
                this._immunizationsArray.tag = function () {
                    return 'IMMUN_GETLIST';
                }();
                this._immunizationsArray.toMelString = function () {
                    return _this._immunizations;
                };
            }
            return this._immunizationsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "carePlans", {
        get: function () {
            var _this = this;
            if (this._carePlansArray.length === 0) {
                this._carePlans = (this._carePlans !== undefined) ? this._carePlans : this._mel.melFunc('{MEL_LIST_CARE_PLAN("delim","all","all")}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_0__factories_factories__["e" /* StringInternal */])(this._carePlans).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    this._carePlansArray.push(new __WEBPACK_IMPORTED_MODULE_1__classes__["f" /* CarePlan */](dataArray[index], this._mel));
                }
                this._carePlansArray.tag = function () {
                    return 'MEL_LIST_CARE_PLAN';
                }();
                this._carePlansArray.toMelString = function () {
                    return _this._carePlans;
                };
            }
            return this._carePlansArray;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Patient.prototype, "locations", {
        get: function () {
            if (this._locationsArray.length === 0) {
                this._locations = (this._locations !== undefined) ? this._locations : this._mel.melFunc('{PATIENT.HOMELOCATIONNAME}');
                this._locationsId = (this._locationsId !== undefined) ? this._locationsId : this._mel.melFunc('{PATIENT.HOMELOCATIONABBREVNAME}');
                var locationProperty = new __WEBPACK_IMPORTED_MODULE_1__classes__["o" /* Location */](this._locationsId, this._locations, __WEBPACK_IMPORTED_MODULE_2__enums_enums__["a" /* LocationType */].Home);
                this._locationsArray.push(locationProperty);
                this._locationsArray.findByType =
                    (function (value) {
                        var index;
                        if (typeof (value) === "number") {
                            for (index = 0; index < this.length; index++) {
                                if (this[index].locationType === value) {
                                    return this[index];
                                }
                            }
                        }
                        ;
                        return undefined;
                    });
            }
            return this._locationsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "measurements", {
        get: function () {
            return this._measurements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "allergies", {
        get: function () {
            return this._allergies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "referringProvider", {
        get: function () {
            return this._referringProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "address", {
        get: function () {
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "emr", {
        get: function () {
            return this._emr;
        },
        enumerable: true,
        configurable: true
    });
    return Patient;
}());

;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicalDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_classes__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_enums__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factories_factories__ = __webpack_require__(1);



var ClinicalDocument = (function () {
    function ClinicalDocument(_mel) {
        var _this = this;
        this._mel = _mel;
        this._locationPropertyArray = [];
        this.save = function () {
            _this._mel.melFunc('{DOCUMENT.mdObject_letiables = "' + JSON.stringify(_this.rawValue).replace(/"/g, '\\"') + '"}');
        };
        this.rawValue = Object(__WEBPACK_IMPORTED_MODULE_2__factories_factories__["a" /* DocumentVariable */])({}, this.save);
        this.val = function (key, value) {
            if (key === undefined || key.length === 0) {
                return undefined;
            }
            if (value === undefined) {
                return _this._mel.melFunc('{DOCUMENT.' + key + '}');
            }
            else {
                return _this._mel.melFunc('{DOCUMENT.' + key + '="' + value + '"}');
            }
        };
    }
    Object.defineProperty(ClinicalDocument.prototype, "letiables", {
        get: function () {
            if (this._letiables === undefined) {
                this._letiables = (this._letiables !== undefined) ? this._letiables : this._mel.melFunc('{DOCUMENT.mdObject_letiables}');
                this._letiables = (this._letiables !== '') ? this._letiables : JSON.stringify(this.rawValue);
                try {
                    this.rawValue = Object(__WEBPACK_IMPORTED_MODULE_2__factories_factories__["a" /* DocumentVariable */])(JSON.parse(this._letiables), this.save);
                }
                catch (e) {
                    this.rawValue = {};
                }
            }
            return this.rawValue;
        },
        set: function (val) {
            for (var key in val) {
                this.rawValue[key] = val[key];
            }
            this._mel.melFunc('{DOCUMENT.mdObject_letiables = "' + JSON.stringify(this.rawValue).replace(/"/g, '\\"') + '"}');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ClinicalDocument.prototype, "did", {
        get: function () {
            this._did = (this._did !== undefined) ? this._did : this._mel.melFunc('{find("DOCUMENT","DID")}');
            return this._did;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalDocument.prototype, "xid", {
        get: function () {
            this._xid = (this._xid !== undefined) ? this._xid : this._mel.melFunc('{DOCUMENT.XID}').split('.')[0];
            return this._xid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalDocument.prototype, "documentId", {
        get: function () {
            this._documentId = (this._documentId !== undefined) ? this._documentId : this._mel.melFunc('{DOCUMENT.VISDOCID}');
            return this._documentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalDocument.prototype, "status", {
        get: function () {
            this._status = (this._status !== undefined) ? this._status : this._mel.melFunc('{DOCUMENT.STATUS}');
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalDocument.prototype, "location", {
        get: function () {
            if (this._locationPropertyArray.length === 0) {
                this._location = (this._location !== undefined) ? this._location : this._mel.melFunc('{DOCUMENT.LOCOFCARENAME}');
                this._locationProperty = (this._locationProperty !== undefined) ? this._locationProperty : new __WEBPACK_IMPORTED_MODULE_0__classes_classes__["o" /* Location */](this._location, this._location, __WEBPACK_IMPORTED_MODULE_1__enums_enums__["a" /* LocationType */].Current);
                this._locationPropertyArray.push(this._locationProperty);
                this._locationPropertyArray.findByType =
                    (function (value) {
                        var i;
                        if (typeof (value) === "number") {
                            for (i = 0; i < this.length; i++) {
                                if (this[i].locationType === value) {
                                    return this[i];
                                }
                            }
                        }
                        ;
                        return undefined;
                    });
            }
            return this._locationPropertyArray;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ClinicalDocument.prototype, "dateOfUpdate", {
        get: function () {
            this._dateOfUpdate = (this._dateOfUpdate !== undefined) ? this._dateOfUpdate : this._mel.melFunc('{DOCUMENT.CLINICALDATE}');
            return this._dateOfUpdate;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ClinicalDocument.prototype, "provider", {
        get: function () {
            this._provider = (this._provider !== undefined) ? this._provider : this._mel.melFunc('{DOCUMENT.PROVIDER}');
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ClinicalDocument.prototype, "userLoginName", {
        get: function () {
            this._userLoginName = (this._userLoginName !== undefined) ? this._userLoginName : this._mel.melFunc('{DOCUMENT.USERLOGINNAME}');
            return this._userLoginName;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return ClinicalDocument;
}());



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_classes__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factories_factories__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_enums__ = __webpack_require__(2);



var Users = (function () {
    function Users(_mel) {
        var _this = this;
        this._mel = _mel;
        this._usersArray = [];
        this.getUser = function (value) {
            if (value !== undefined) {
                _this._user = (_this._user !== undefined) ? _this._user : new __WEBPACK_IMPORTED_MODULE_0__classes_classes__["C" /* User */](_this._mel.melFunc('{GETUSERINFO("' + value + '")}'), __WEBPACK_IMPORTED_MODULE_2__enums_enums__["b" /* UserCallFunction */].UserInfo);
                return _this._user;
            }
            _this._currentUser = (_this._currentUser !== undefined) ? _this._currentUser : new __WEBPACK_IMPORTED_MODULE_0__classes_classes__["C" /* User */](Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["c" /* GetCurrentUser */])(_this._mel), __WEBPACK_IMPORTED_MODULE_2__enums_enums__["b" /* UserCallFunction */].UserInfo);
            return _this._currentUser;
        };
        this.getUsers = function () {
            if (_this._usersArray.length === 0) {
                _this._users = _this._mel.melFunc('{GET_USER_LIST(USER.CURLOCATIONABBREVNAME, "", "delimited", true)}');
                var dataArray = Object(__WEBPACK_IMPORTED_MODULE_1__factories_factories__["e" /* StringInternal */])(_this._users).toList();
                for (var index = 0; index < dataArray.length; index++) {
                    _this._usersArray.push(new __WEBPACK_IMPORTED_MODULE_0__classes_classes__["C" /* User */](dataArray[index], __WEBPACK_IMPORTED_MODULE_2__enums_enums__["b" /* UserCallFunction */].UserList));
                }
                _this._usersArray.tag = function () {
                    return 'GET_USER_LIST';
                }();
                _this._usersArray.toMelString = function () {
                    return _this._users;
                };
            }
            return _this._usersArray;
        };
    }
    return Users;
}());



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consts_consts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes__ = __webpack_require__(0);


var MdObject = (function () {
    function MdObject(window, document) {
        this.window = window;
        this.document = document;
        this._emr = new __WEBPACK_IMPORTED_MODULE_1__classes__["h" /* Emr */](this.window, this.document);
        this._obsTermsMap = new __WEBPACK_IMPORTED_MODULE_1__classes__["s" /* ObsTermsMap */]();
        this._clinicalDocument = new __WEBPACK_IMPORTED_MODULE_1__classes__["g" /* ClinicalDocument */](this.emr.emrMel);
        this._users = new __WEBPACK_IMPORTED_MODULE_1__classes__["D" /* Users */](this.emr.emrMel);
        this._patient = new __WEBPACK_IMPORTED_MODULE_1__classes__["v" /* Patient */](this.obsTermsMap.weight, this.obsTermsMap.height, this.window, this.document, this.emr.emrMel);
        if (typeof this.window === 'undefined' && typeof this.document === 'undefined') {
            throw new Error("MdObject requires a window with a document");
        }
    }
    Object.defineProperty(MdObject.prototype, "version", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__consts_consts__["b" /* version */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdObject.prototype, "productType", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__consts_consts__["a" /* productType */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdObject.prototype, "emr", {
        get: function () {
            return this._emr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdObject.prototype, "obsTermsMap", {
        get: function () {
            return this._obsTermsMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdObject.prototype, "clinicalDocument", {
        get: function () {
            return this._clinicalDocument;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdObject.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdObject.prototype, "patient", {
        get: function () {
            return this._patient;
        },
        enumerable: true,
        configurable: true
    });
    return MdObject;
}());



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__version__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__version__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productType__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__productType__["a"]; });




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return version; });
var version = '1.0.12';


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productType; });
var productType = 'GE';


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map