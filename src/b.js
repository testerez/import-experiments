// Fail
// var a2 = require('./a').a2;

// Works. Later, call a.a2()
// var a = require('./a')

// Works
import { a2 } from './a';

export function b() {
    a2();
}