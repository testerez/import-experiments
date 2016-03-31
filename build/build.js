(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _b = require('./b');

function a() {
    (0, _b.b)();
}

function a2() {
    console.log("It's ok to use circular imports");
}

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
exports.a = a;
exports.a2 = a2;

},{"./b":2}],2:[function(require,module,exports){
// Fail
// var a2 = require('./a').a2;

// Works. Later, call a.a2()
// var a = require('./a')

// Works
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.b = b;

var _a = require('./a');

function b() {
    (0, _a.a2)();
}

},{"./a":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _a = require('./a');

var a = _interopRequireWildcard(_a);

a.a();

},{"./a":1}]},{},[3])


//# sourceMappingURL=build.js.map
