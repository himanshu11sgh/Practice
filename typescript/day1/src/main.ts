let myString: string = "Himanshu";
let myNumber: number = 22;
let myBoolean: boolean = true;
let myAny: any = {};

let arr1: string[] = ['one', 'two', 'three'];
let arr2: (string | number)[] = ['one', 2, 3]
let arr3: (string | number | boolean)[] = ['one', 2, true]
let arr4: any[] = [];
let arr5: [string, number, boolean] = ['one', 2, true]

arr1[2] = 'five'
// console.log(arr1)

let obj1: object;
obj1 = {};

let obj2 = {
  name: "Himanshu",
  age: 22
}
// obj2.name = true;
// obj2.age = '22';

type Person =  { // type alias
  name?: string,
  age: number
}
let person: Person =  {
  name: "Himanshu",
  age: 22
}
// person.age = 9;
// person.hobby = "Hockey";

// console.log('person', person)

const greet = (person: Person) => {
  // if (person.name) {
  //   return `Hello ${person.name.toUpperCase()}`;
  // } else {
  //   return 'Hello';
  // }
  return `Hello ${person.name?.toUpperCase()}`
};
// console.log(greet(person))

// Type Alias
type stringOrNumber =  string | number;
type stringOrNumberArray = (string | number)[]
type person = {
  name: string,
  detail: stringOrNumber,
  hobbies: stringOrNumberArray
}

// Interface
interface student { // used for "object" dtype only (need to check)
  name: string,
  detail: stringOrNumber,
  hobbies: stringOrNumberArray
}

type nameList = "Himanshu" | "Saket" | "Jai";
let name: nameList;
name = "Saket";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
}
const show = (a: string): void => {
  console.log("show")
}

function addFunc(a: number, b: number): number {
  return a + b;
} 
function showFunc(a: string): void {
  console.log("show")
} 

const subtract = function (a: number, b: number): number {
  return a - b;
}

type mathFunction = (a: number, b: number) => number;
interface mathFunction2 {
  (a: number, b: number): number
}

const multiply: mathFunction = function (a, b) {
  return a * b;
}
const multiply2: mathFunction = (a, b) => a * b;

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}

const addAll2 = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
}

// Rest Parameter
const total = (a: number, ...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
}

// function may have "never" return type if it is having infinite loop or raise an error.

// console.log(total(2, 3, 4, 5, 6, 7))

const numberOrString = (a: number | string): string => {
  return a.toString();
}

// DOM
const img = document.querySelector("#img") as HTMLImageElement;
const myDiv: HTMLElement = document.getElementById("div-id")!;
const myDiv2: HTMLElement | null = document.getElementById("div-id");

img.src
myDiv.innerHTML

// ! means non-null assertion.
// ? means (apply only if it is not null) | (make the key optional if it is inside object)


// Index signature
type person1 = {
  [index: string]: number
  // readonly [index: string]: number
  value1: number,
  value2: number,
  value3: number,
}
type person2 = {
  [index: string]: number
}
let person2: person1 = {
  value1: 1,
  value2: 2,
  value3: 3,
  value4: 44
}

const key = "value1";
person2[key]

// person2.value4 = 33;

type data1 = {
  value1: number,
  value2?: number
}
const dataObj: data1 = {
  value1: 1,
  // value2: 2
}

for (const key in dataObj) {
  dataObj[key as keyof data1]
  dataObj[key as keyof typeof dataObj]
}

const showDataObj = (dataObj: data1, d: keyof data1): void => {
  dataObj[d]
}
const showDataObj2 = (dataObj: data1, d: keyof typeof dataObj): void => {
  dataObj[d]
}



