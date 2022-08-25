// base skeleton of a calculator

// let firstNumber = prompt("Please enter a number:");
// let secondNumber = prompt("Please enter a second number:");
// let operateValue = prompt("Please add an operator (+, -, *, /")
let num1 = parseFloat(firstNumber); // parseFloat so we can work with decimals
let num2 = parseFloat(secondNumber);
let operator = operateValue;

console.log("operator used", operator);

// add(num1,num2);
// subtract(num1,num2);
// multiply(num1,num2);
// divide(num1,num2);
// since we are calling functions on operate() we no longer need them here
// we will need to call operate on a different addEventListener likely or check where we can use it


function add (num1, num2) {
    let addValue = (num1 + num2);
    console.log('add', addValue);
};

function subtract (num1, num2) {
    let subValue = (num1 - num2);
    console.log('subtrac', subValue);
};

function multiply (num1, num2) {
    let mulValue = (num1 * num2);
    console.log('multiply', mulValue);
};

function divide (num1, num2) {
    let divValue = (num1 / num2)
    console.log('divide', divValue);

    if (divValue == "Infinity") {
        return alert("Error! You cannot divide by zero ):")
    }   else return 
};

// trying with a switch operator
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            alert("Error! You didn't type an operator")
    }       
};

operate(operator, num1, num2); // we need to call functions in order to work on a script
