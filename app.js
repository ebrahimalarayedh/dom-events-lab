/*-------------------------------- Constants --------------------------------*/
const oneButton= document.getElementById("1")
console.log(oneButton)
const twoButton= document.getElementById("2")
console.log(twoButton)
const threeButton= document.getElementById("3")
console.log(threeButton)
const fourButton= document.getElementById("4")
console.log(fourButton)
const fiveButton= document.getElementById("5")
console.log(fiveButton)
const sixButton= document.getElementById("6")
console.log(sixButton)
const sevenButton= document.getElementById("7")
console.log(sevenButton)
const eightButton= document.getElementById("8")
console.log(eightButton)
const nineButton= document.getElementById("9")
console.log(nineButton)
const multiplicationButton= document.getElementById("multiplication")
console.log(multiplicationButton)
const summationButton= document.getElementById("summation")
console.log(summationButton)
const divisionButton= document.getElementById("division")
console.log(divisionButton)
const subtractButton= document.getElementById("subtract")
console.log(subtractButton)
const display= document.getElementById("lcd")
console.log(display)
const zeroButton= document.getElementById("0")
console.log(zeroButton)
const resetButton= document.getElementById("C")
console.log(resetButton)
const equalButton= document.getElementById("equals")
console.log(equalButton)

/*-------------------------------- Variables --------------------------------*/
let num1= 0
let num2=0
let result= 0

/*------------------------ Cached Element References ------------------------*/
let num1String= null
let num2String= null
let operator= null

/*----------------------------- Event Listeners -----------------------------*/
// buttonNumElement.addEventListener("click",numEntering)
// buttonOpElement.addEventListener("click",opEntering)
// buttonEqElement.addEventListener("click",eqEntering)
oneButton.addEventListener("click", enteringNumber)
twoButton.addEventListener("click", enteringNumber)
threeButton.addEventListener("click", enteringNumber)
fourButton.addEventListener("click", enteringNumber)
fiveButton.addEventListener("click", enteringNumber)
sixButton.addEventListener("click", enteringNumber)
sevenButton.addEventListener("click", enteringNumber)
eightButton.addEventListener("click", enteringNumber)
nineButton.addEventListener("click", enteringNumber)
zeroButton.addEventListener("click", enteringNumber)

summationButton.addEventListener("click", operation)
subtractButton.addEventListener("click", operation)
multiplicationButton.addEventListener("click", operation)
divisionButton.addEventListener("click", operation)

resetButton.addEventListener("click", reset)

equalButton.addEventListener("click", resultFun)

/*-------------------------------- Functions --------------------------------*/
function enteringNumber(event){
    if(num1String== null){
        num1String= event.target.textContent
        console.log(num1String)
        display.textContent= num1String
    }
    else if(num1String!=null && operator==null){
        num1String= num1String + event.target.textContent
        console.log(num1String)
        display.textContent= num1String        
    }
    else if(num2String==null && operator!=null){
        num2String= event.target.textContent        
        console.log(num2String)
        console.log(event.target.textContent)
        display.textContent= `${num1String} ${operator} ${num2String} `
    }
    else if(num2String!=null && operator!=null){
        num2String= num2String + event.target.textContent
        console.log(num2String)
        display.textContent= `${num1String} ${operator} ${num2String} `
    }
}

function operation(event){
    if(num1String!= null && num2String==null){
        operator= event.target.textContent
        console.log(operator)
        display.textContent= `${num1String} ${operator}`
    }
}

function resultFun(event){
    num1= Number(num1String)
    console.log(typeof num1)

    num2= Number(num2String)
    console.log(typeof num2)

    if(operator=="+"){
        result= num1 + num2;
        display.textContent=`${num1String} ${operator} ${num2String} = ${result}`
    }

    else if(operator=="-"){
        result= num1 - num2;
        display.textContent=`${num1String} ${operator} ${num2String} = ${result}`
    }
    else if(operator=="/"){
        result= num1 / num2;
        display.textContent=`${num1String} ${operator} ${num2String} = ${result}`
    }
    else if(operator=="*"){
        result= num1 * num2;
        display.textContent=`${num1String} ${operator} ${num2String} = ${result}`
    }

}


function reset(){
    num1= 0
    num2=0
    result= 0
    num1String= null
    num2String= null
    operator= null    
    display.textContent= ``    
}

