// Basics
console.log('js')
// window.alert('I am Alert');
// value = parseInt(prompt('Enter the number'));

// console.log(value, typeof value)
// if (value % 2 == 0) {
//     console.log('divisible by 2')
// } else {
//     console.log('No divisible by 2')
// }

// Access Element based on Id, classList, TagName
const div_element = document.getElementById('div_id'); // return HTML element.
console.log(div_element.getHTML());

const div_element2 = document.getElementsByClassName('div_class'); // return HTML Collection
console.log(div_element2[0].getHTML());

const div_element3 = document.getElementsByTagName('div'); // return HTML Collection
console.log(div_element3[0].getHTML());

const div_element4 = document.querySelector('#div_id'); // return first HTML element
console.log(div_element4.getHTML());

const div_element5 = document.querySelectorAll('.div_class'); // return NodeList
console.log(div_element5[0].getHTML());

// get HTML and text
console.log(div_element4.tagName)
console.log(div_element4.innerText)
console.log(div_element4.innerHTML)
console.log(div_element4.textContent)

const h2_element = document.querySelector('h2');
h2_element.innerText += ' with Himanshu Singh'

const box_elements = document.querySelectorAll('.box');
const additional_box_contents = [' with Himanshu', ' with Aman', ' with Saket']
for (let index in box_elements) {
    box_elements[index].innerText += additional_box_contents[index];
}

// Attribute manipulation
const heading_element = document.querySelector('#heading_id');
heading_element.setAttribute('id', 'heading_new_id');
heading_element.setAttribute('data-name', 'heading_name1');
console.log(heading_element.getAttribute('class'));
console.log(heading_element.getAttribute('id'));
console.log(heading_element.getAttribute('data-value'));

// Adding css using style and classList
const box1_element = document.querySelector('#box1');
// box1_element.style.backgroundColor = 'yellow';
// box1_element.style.width = '200px';
// box1_element.style.height = '200px';
// box1_element.style.padding = '20px';
box1_element.classList.add('box_css');
box1_element.classList.remove('box_css');
box1_element.classList.toggle('box_css');

// Create Element
const box4_element = document.createElement('div');
box4_element.setAttribute('class', 'box');
box4_element.setAttribute('id', 'box4');
box4_element.innerText = 'Box4';
console.log(box4_element)

// Insert Element
const box3_element = document.querySelector('#box3');
// box3_element.append(box4_element);
// box3_element.prepend(box4_element);
// box3_element.before(box4_element);
box3_element.after(box4_element);

// Remove Element
const box2_element = document.querySelector('#box2');
box2_element.remove();

const button_element = document.createElement('button');
button_element.innerText = 'Click me';
button_element.style.backgroundColor = 'red';
button_element.style.color = 'white';
const body_element = document.querySelector('body');
body_element.prepend(button_element)

const p_element = document.querySelector('p');
// p_element.setAttribute('class', 'p_class2');
p_element.classList.add('p_class2')

/* 
Events => are some actions on which logic should be applied.
Mouse Events: click, double click, mouse enter, mouse leave, mouse over;
Keyboard Events: keypress, keyup, keydown;
Form Events: submit, input, change;
*/
const press_button = document.querySelector('#button1');
// press_button.onclick = (e) => { // e => event object
//     console.log('e', e.target);
// }
// press_button.onmouseenter = (e) => {
//     console.log('mouse is entered');
// }

function func1() {
    console.log('I am func1')
}
async function func2() {
    setTimeout(() => {
        console.log('settimeout after 0 seconds')
    }, 0)
    let response = await func3();
    console.log('response', response)
    console.log('I am func2')
}
async function func3() {
    for (let i=0; i<=10**5; i++) {
        i
    }
    console.log('I am func3')
    return 'OK'
}
press_button.addEventListener('click', func1);
press_button.addEventListener('click', func2);
press_button.removeEventListener('click', func1)

console.log(Math.floor(Math.random()*3))

/*
1. Async function
    - created using aysnc keyword
    - if you want to wait for the response then use await keyword to hold the execution until the response is returned.
    - replace the need of promise functions.
    - use to run the function asyncronously.

2. fetch
    - use to send get, post request.
    - use for sending request and recieving response.
    - fetch function returns the promise object.
*/

async function getData() {
    const url = 'https://dragonball-api.com/api/characters?limit=10';
    const response = await fetch(url, {
        method: 'GET'
    });
    console.log('response', response)
    if (response.status = 200) {
        const response_json = await response.json();
        console.log('response', response_json)
    }
}

press_button.addEventListener('click', getData)