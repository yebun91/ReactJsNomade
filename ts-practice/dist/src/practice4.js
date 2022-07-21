"use strict";
// function merge(a: any, b:any):any {
//   return {
//     ...a,
//     ...b
//   }
// }
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
console.log(wrapped);
;
const items = {
    list: ['a', 'b', 'c']
};
