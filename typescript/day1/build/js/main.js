"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr1 = ['one', 'two', 'three'];
let arr2 = ['one', 2, 3];
let arr3 = ['one', 2, true];
let arr4 = [];
let arr5 = ['one', 2, true];
arr1[2] = 'five';
// console.log(arr1)
let obj1;
obj1 = {};
let obj2 = {
    name: "Himanshu",
    age: 22
};
let person = {
    name: "Himanshu",
    age: 22
};
// person.age = 9;
// person.hobby = "Hockey";
// console.log('person', person)
const greet = (person) => {
    var _a;
    // if (person.name) {
    //   return `Hello ${person.name.toUpperCase()}`;
    // } else {
    //   return 'Hello';
    // }
    return `Hello ${(_a = person.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
let name;
name = "Saket";
// Functions
const add = (a, b) => {
    return a + b;
};
const show = (a) => {
    console.log("show");
};
function addFunc(a, b) {
    return a + b;
}
function showFunc(a) {
    console.log("show");
}
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const addAll2 = (a, b, c = 0) => {
    return a + b + c;
};
// Rest Parameter
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// function may have "never" return type if it is having infinite loop or raise an error.
// console.log(total(2, 3, 4, 5, 6, 7))
const numberOrString = (a) => {
    return a.toString();
};
//# sourceMappingURL=main.js.map