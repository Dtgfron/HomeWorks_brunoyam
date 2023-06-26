let a = 4;
console.log (typeof a); // "number"

let b = 'Петя';
console.log (typeof b); // "String"

let c = 123n;
console.log (typeof c); // "bigint"

let d = 2 < 3;
console.log (typeof d); // "boolean"

let e = Symbol()
console.log (typeof e); // "symbol"

let f = {};
console.log (typeof f); // "object"

let g = null;
console.log (typeof g); // "object", т.к. видит null как объект (ошибка)

let h = function () {};
console.log (typeof h); // "function"
