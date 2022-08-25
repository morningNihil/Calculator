let a = prompt("Please enter a number:");
let b = prompt("Please enter a second number:");
let num1 = parseFloat(a);
let num2 = parseFloat(b);

add(num1,num2);
subtract(num1,num2);
multiply(num1,num2);
divide(num1,num2);


function add (num1, num2) {
    let addValue = (num1 + num2);
    console.log('add', addValue);
}

function subtract (num1, num2) {
    let subValue = (num1 - num2);
    console.log('subtrac', subValue);
}

function multiply (num1, num2) {
    let mulValue = (num1 * num2);
    console.log('multiply', mulValue);
}

function divide (num1, num2) {
    let divValue = (num1 / num2)
    console.log('divide', divValue);
}