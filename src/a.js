import {b} from './b';

function a() {
    b();
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
export { a as a, a2 as a2 };
