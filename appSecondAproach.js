/*-------------------------------- Constants --------------------------------*/
//2.2 const buttons = document.querySelectorAll('.button');
//2.1
const calculator = document.querySelector('#calculator');
const display = document.getElementById("lcd")

/*-------------------------------- Variables --------------------------------*/
let num1 = 0
let num2 = 0
let result = 0

/*------------------------ Cached Element References ------------------------*/
let num1String = null
let num2String = null
let operator = null

/*----------------------------- Event Listeners -----------------------------*/
//2.2 buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });

//2.1
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
    // Example
    if (event.target.classList.contains('number')) {
        // Do something with a number
        enteringNumber(event)
    }
    // Example
    else if (event.target.innerText === '*' || event.target.innerText === '+' || event.target.innerText === '-' || event.target.innerText === '/') {
        // Do something with this operator
        addOperator(event)
    }
    else if (event.target.innerText === '=')
        resultFun(event)

    else if (event.target.innerText === 'C')
        reset()
});

/*-------------------------------- Functions --------------------------------*/
function enteringNumber(event) {
    if (num1String == null) {
        num1String = event.target.innerText
        console.log(num1String)
        display.textContent = num1String
    }
    else if (num1String != null && operator == null) {
        num1String = num1String + event.target.innerText
        console.log(num1String)
        display.textContent = num1String
    }
    else if (num2String == null && operator != null) {
        num2String = event.target.innerText
        console.log(num2String)
        console.log(event.target.innerText)
        display.textContent = `${num1String} ${operator} ${num2String} `
    }
    else if (num2String != null && operator != null && num1 === 0) {
        console.log(num1)
        num2String = num2String + event.target.innerText
        console.log(num2String)
        display.textContent = `${num1String} ${operator} ${num2String} `
    }
}

function addOperator(event) {
    if (num1String != null && num2String == null) {
        operator = event.target.innerText
        display.textContent = `${num1String} ${operator}`
    }
    else if (num1String != null && num1 != 0) {
        operator = event.target.innerText
        num1 = 0
        num2 = 0
        num1String = String(result)
        console.log(num1String)
        num2String = null
        operator = event.target.innerText
        display.textContent = `${num1String} ${operator}`        
    }
}

function reset() {
    num1 = 0
    num2 = 0
    result = 0
    num1String = null
    num2String = null
    operator = null
    display.textContent = ``
}

function resultFun(event) {
    num1 = Number(num1String)
    console.log(typeof num1)

    num2 = Number(num2String)
    console.log(typeof num2)


    if (operator == "+") {
        result = num1 + num2;
        display.textContent = `= ${result}`
    }
    else if (operator == "-") {
        result = num1 - num2;
        display.textContent = `= ${result}`
    }
    else if (operator == "/") {
        result = num1 / num2;
        display.textContent = `= ${result}`
    }
    else if (operator == "*") {
        result = num1 * num2;
        display.textContent = `= ${result}`
    }
}
