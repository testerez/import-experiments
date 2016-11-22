/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var a = __webpack_require__(1);
	a.a();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var b_1 = __webpack_require__(2);
	function a() {
	    b_1.b();
	}
	exports.a = a;
	function a2() {
	    console.log("It's ok to use circular imports");
	}
	exports.a2 = a2;
	// Fail
	// module.exports = { a, a2 }
	// Fail
	// would work for: import a from a;
	// But not for: import {a} from a;
	// export default {a, a2};
	// Works
	// Object.assign(module.exports, { a, a2 });
	// Works
	// exports.a = a;
	// exports.a2 = a2;
	// Works


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Fail
	// var a2 = require('./a').a2;
	"use strict";
	// Works. Later, call a.a2()
	// var a = require('./a')
	// Works
	var a_1 = __webpack_require__(1);
	function b() {
	    a_1.a2();
	}
	exports.b = b;


/***/ }
/******/ ]);