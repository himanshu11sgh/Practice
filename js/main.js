// Variables
const name = ["Himanshu", "Saket", "Jai"];
let persons, persons2, person3;
var employees;
let fruits = ["Apple", "Mango", "Grapes", "Orange"];
var animals = ["Cat", "Rat", "Dog", "Sheep"];
let a = 1, b = 2, c = 3;
var a1 = 1,
a2 = 2,
a3 = 3;

// use const if value is not going to change
// use let if value is going to change
// use var is global scope is needed.

name1 = 'Himanshu';
var name1;
// console.log(name1)
// console.log(typeof name1)
a = 20e5;
// console.log(a)

// DataTypes
a = 'Himanshu' // String
a = 20 // Numeric (Integer)
a = 20.5 // Numeric (Float)
a = true; // Boolean
a = ['Himanshu', 'Saket', 'Jai'] // Array
a = {'name': 'Himanshu', 'age': 23} // Object
a = new Date() // Date Object
a = null // null
let a4; // undefined

// Arithmetic Operators
a = 1, b = 2;
a + b
a - b
a * b
a / b
a ** b
a % b
a++
a--
++a
--a

// Assignment Operators
a += b
a -= b
a *= b
a /= b
a **= b
a %= b

// Comparison Operators
a == b
a === b
a != b
a !== b
a > b
a < b
a >= b
a <= b

// Logical Operators
a && b
a || b
!a

// Ternary Operators
b = (a > 10) ? 'Greater than 10': 'Less than 10';

// Boolean
a = 0
// console.log(Boolean(a))

// For Loops
a = [1, 2, 3, 4, 5, 6, 7];
for (let i=0; i<a.length; i++) {
    console.log('i', i)
}
for (let i in a) {
    console.log(a[i])
}
for (let i of a) {
    console.log('i', i)
}
b = {
    'name': 'Himanshu',
    'age': 23
}
for (let i in b) {
    console.log('key', i, 'value', b[i])
}
console.log(a.length)
console.log(Object.keys(b).length)

// While Loops
i = 0;
while (i < 10) {
    if (i == 5) {
        break;
    }
    i++;
    if (i == 3) {
        continue;
    }
    console.log('i', i);
}

// String
a = 'Himanshu';
a = "Himanshu\
";
a = `
Himanshu
Singh`; // Template Strings use back-tics (also known as Multi line string)
a = "Himanshu \"Singh\" Jalal";
a = new String("Saket");
first_name = 'Himanshu', last_name = 'Singh'
a = `Welcome ${first_name} ${last_name}`; // String Interpolation
console.log('a.length', a.length)
console.log('a.charAt(0)', a.charAt(0))
a = 'Himanshu'
console.log(a[2])
console.log(a.slice(1, 5)) // start_index, end_index (exclusive)
console.log(a.slice(-5, -3))
console.log(a.toLowerCase())
console.log(a.toUpperCase())
a = '   Himanshu   '
console.log(a.trim())
console.log(a.trimStart())
console.log(a.trimEnd())
a = '5';
console.log(a.padStart(4, 'x'))
console.log(a.padEnd(4, 'x'))
b = 5
console.log(typeof b.toString())
a = 'cats ';
a = a.repeat(5)
console.log(a.repeat(5))
console.log(a.replace('cats', 'dogs'))
console.log(a.replaceAll('cats', 'dogs'))
console.log(a.split(''))
a = 'Python is everywhere is'
console.log(a.lastIndexOf('is'))
console.log(a.includes('is'))
console.log(a.startsWith('Py'))
console.log(a.endsWith(' is'))
a = ['Himanshu', 'Aman', 'Saket', 'Jai']
console.log(a.toString())
a = 5.73
console.log(a.toString())

// Number
a = NaN
a = 5 / 'apple'
a = Infinity
console.log(a, typeof a)
a = 10
a.toString()
a = new Number(10.5)
console.log('a', a)
a = 9.567
console.log(a.toFixed()) // used to round off the value
console.log(a.toFixed(2))
console.log(a.toFixed(5))
console.log(a.toPrecision())
console.log(a.toPrecision(3))
console.log(a.toPrecision(5))
a = 10.7
console.log(parseInt(a))
a = '10'
console.log(parseInt(a))
a = '10.75'
console.log(parseFloat(a))
a = '10'
console.log(parseFloat(a))
a = NaN
console.log(Number.isInteger(a))
console.log(isNaN(a))

// Arrow Functions
a = () => 'Hello';
a = (b, c) => b + c;
console.log(a(10, 20))
a = (b, c) => {
    return b * c;
}
console.log(a(10, 20))

// Object
a = {
    'name': 'Himanshu',
    'age': 23,
    'year': 2003,
    'last name': 'Singh'
}
a.hobby = 'Learning'
a.hobby = 'Reading'
delete a.year;
console.log(a)
for (let i in a) {
    console.log(i, a[i])
}

// Hoisting is when you declare and define seperately.

// Dates
a = new Date()
console.log(a)
a = new Date(2026, 0, 2, 10, 5, 5)
console.log(a)
a = new Date('2026-05-01')
console.log(a.toString())
console.log(a.toDateString())
a = new Date()
console.log(a.getFullYear())
console.log(a.getMonth())
console.log(a.getDate())
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
console.log(a.getDay())
a.setFullYear(2027)
a.setMonth(11)
a.setDate(2)
a.setHours(10)
a.setMinutes(15)
a.setSeconds(20)
console.log(a)

// Array
a = ['Himanshu', 'Aman', 'Saket', 'Jai']
a[0] = 'Himan'
a.push('Sanjay')
// console.log(a.length)
// console.log(a[a.length-1])
console.log(a)
b = new Array('Apple', 'Mango', 'Cherry', 'Orange')
b.pop()
b.shift()
b.unshift('Guava')
console.log(b)
console.log(b.toString())
console.log(b.join(' '))
a = [1, 2], b = [3, 4]
c = a.concat(b)
console.log(c, typeof c)
console.log(a)
a = [[1, 2, 3], [4, 5]]
console.log(a.flat())
a = ['Apple', 'Mango', 'Cherry', 'Orange']
// a.splice(a.length-1, 1) // pop
// a.splice(0, 1) // shift
// a.splice(0, 1, 'Kiwi', 'Kiwi2') // insert at specific index
// console.log(a)
// console.log(a.slice(1, 3))
console.log(a.indexOf('Mango'))
console.log(a.lastIndexOf('Mango'))
console.log(a.includes('Cherry1'))
a = [5, 1, 2, 4, 1, 3, 5]
a.sort(function(a, b) {return b-a})
// a.reverse()
console.log(a)

a = -10.578
console.log(Math.PI)
console.log(Math.ceil(a))
console.log(Math.floor(a))
console.log(Math.sqrt(a))
console.log(a**2)
console.log(Math.abs(a))
console.log(Math.random())




