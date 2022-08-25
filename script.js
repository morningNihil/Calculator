// base skeleton of a calculator

// let firstNumber = prompt("Please enter a number:");
// let secondNumber = prompt("Please enter a second number:");
// let operateValue = prompt("Please add an operator (+, -, *, /")
let num1 = 0; 
let num2 = 0;
let num1Temp = [];
let num2Temp = [];
let savedFirstValue = 0;
let operator = "";
let operatorTemp = [];
// let operator = operateValue;
// parseFloat so we can work with decimals
const CALCDISPLAY = document.querySelector('#display');


console.log("operator used", operator);

// add(num1,num2);
// subtract(num1,num2);
// multiply(num1,num2);
// divide(num1,num2);
// since we are calling functions on operate() we no longer need them here
// we will need to call operate on a different addEventListener likely or check where we can use it



function add (num1, num2,) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(1)
    CALCDISPLAY.textContent = rounded;
    console.log('add', addValue);
};

function subtract (num1, num2) {
    let subValue = (num1 - num2);
    let rounded = Math.round((subValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(1)
    CALCDISPLAY.textContent = rounded;
    console.log('subtract', subValue);
};

function multiply (num1, num2) {
    let mulValue = (num1 * num2);
    let rounded = Math.round((mulValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(1)
    CALCDISPLAY.textContent = rounded;
    console.log('multiply', mulValue);
};

function divide (num1, num2) {
    let divValue = (num1 / num2)
    
    console.log('divide', divValue);

    if (divValue == "Infinity") {
        return alert("Error! You cannot divide by zero ):")
    }   else {
        let rounded = Math.round((divValue + Number.EPSILON) * 100) / 100;
        rounded = rounded.toFixed(1)
        CALCDISPLAY.textContent = rounded;
    }
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
            alert("Error! We didn't receive an operator")
    }       
};

// we need to call functions in order to work on a script

function Calculator() {

        function getNumber() {
        const OPERANDBTN = document.querySelectorAll('.operand');
            OPERANDBTN.forEach((button) => {
                button.addEventListener('click', () => {
                savedFirstValue = button.getAttribute("value");
                const CALCDISPLAY = document.querySelector('#display');
                
                if (operator == "") {
                    const CALCDISPLAY = document.querySelector('#display');
                    num1Temp.push(savedFirstValue);
                    num1 = num1Temp.join("");
                    CALCDISPLAY.textContent = num1;
                } else {

                    num2Temp.push(savedFirstValue);
                    num2 = num2Temp.join("");
                    CALCDISPLAY.textContent = num2;

                };

            })
        });
    };

    function getOperator() {
        const OPERATORBTN = document.querySelectorAll('.operator');
        OPERATORBTN.forEach((button) => {
        button.addEventListener('click', () => {
            operator = button.getAttribute("value");
            operatorTemp.push(operator);

            document.getElementsByClassName('decimal').disabled= false;

            if ((num1Temp != "") && (num2Temp != "")) { // this is mostly for when the users is using multiple values like 12 + 5 * 3 - 4, we store the value and we operate after
                num1 = num1Temp.join("")
                num2 = num2Temp.join("")
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let tempOfOperator = operatorTemp[operatorTemp.length -2].toString();
                operate(tempOfOperator, num1, num2);
                let tempStringValue = CALCDISPLAY.textContent;
                num1Temp = [];
                num2Temp = [];
                num1 = 0;
                num2 = 0;
                num1Temp.push(tempStringValue);
                num1 = num1Temp.join("")
            };
        })
    });

    }
        
    function runCalculator() {
        const EQUALBTN = document.querySelector(".equals");
            EQUALBTN.addEventListener('click', () => {
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)
                operate(operator, num1, num2)

            })
        
    };

// button clear

    const CLEARBTN = document.querySelector(".clear");
        CLEARBTN.addEventListener('click', () => { location.reload(); })

//sign button

    const SIGNBTN = document.querySelector(".sign");
        SIGNBTN.addEventListener('click', () => {
    
    if (operator == "") {
        num1Temp.splice(0, 1, (num1[0] * -1).toString()); // index 0 element 1 we are going to get position 0 and multiply it by -1. So we are going to get the very first item on an array and multiply it by -1 in order to change it to negative value, the toString its in order to convert the array to string
        num1 = num1Temp.join("");
        CALCDISPLAY.textContent = num1;
    } else {
        num2Temp.splice(0, 1, (num2Temp[0] * -1).toString());
        num2 = num2Temp.join("");
        CALCDISPLAY.textContent = num2;
        
    }

})

    const DECIMALBTN = document.querySelector(".decimal");
        DECIMALBTN.addEventListener('click', () => {
        let decimalButton = ".";

        if (operator == "") {
        num1Temp.push(decimalButton)
        num1 = num1Temp.join("");
        CALCDISPLAY.textContent = num1;
        document.getElementsByClassName("decimal").disabled = true; // disables decimal button if it was already pressed in order to stop users from doing 16.6.5, it will be enabled back again once we press an operator, right now its not working as instended
    }
})

getNumber();
getOperator();
runCalculator();



}

Calculator();


    


