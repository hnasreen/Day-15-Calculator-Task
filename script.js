// Calculator Task

function createInput(tagname, attr1, attrval1, content) {
    var inputEle = document.createElement(tagname);
    inputEle.setAttribute(attr1, attrval1);
    inputEle.innerHTML = content;
    return inputEle;
}

function breakInput() {
    return document.createElement("br");
}

var clearKey = createInput("button", "onclick", "clearDisplay()", "C");
var dotKey = createInput("button", "onclick", "appendChar('.')", ".");
var divKey = createInput("button", "onclick", "appendChar('/')", "/");
var modKey = createInput("button", "onclick", "appendChar('%')", "%");

var br2 = breakInput();

var sevenKey = createInput("button", "onclick", "appendChar('7')", "7");
var eightKey = createInput("button", "onclick", "appendChar('8')", "8");
var nineKey = createInput("button", "onclick", "appendChar('9')", "9");
var asteriskKey = createInput("button", "onclick", "appendChar('*')", "*");

var br3 = breakInput();

var fourKey = createInput("button", "onclick", "appendChar('4')", "4");
var fiveKey = createInput("button", "onclick", "appendChar('5')", "5");
var sixKey = createInput("button", "onclick", "appendChar('6')", "6");
var minusKey = createInput("button", "onclick", "appendChar('-')", "-");

var br4 = breakInput();

var oneKey = createInput("button", "onclick", "appendChar('1')", "1");
var twoKey = createInput("button", "onclick", "appendChar('2')", "2");
var threeKey = createInput("button", "onclick", "appendChar('3')", "3");
var plusKey = createInput("button", "onclick", "appendChar('+')", "+");

var br5 = breakInput();




var zeroKey = createInput("button", "onclick", "appendChar('0')", "0");
var equalKey = createInput("button", "onclick", "evaluateExpression()", "=");

// 
var div1=document.createElement("div1")
div1.className="div1"

div1.append(zeroKey,equalKey)
// 

var container = document.createElement("div");
container.className = "container";

var calculator = document.createElement("div");
calculator.className = "calculator";

var form = document.createElement("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
});

var textDisplay = document.createElement("input");
textDisplay.setAttribute("type", "text");
textDisplay.setAttribute("id", "display");

var br1 = breakInput();

var div = document.createElement("div");

div.append(textDisplay, br1, clearKey, dotKey, divKey, modKey, br2,
    sevenKey, eightKey, nineKey, asteriskKey, br3,
    fourKey, fiveKey, sixKey, minusKey, br4,
    oneKey, twoKey, threeKey, plusKey, br5,
    div1);

form.append(div);
calculator.append(form);
container.append(calculator);
document.body.append(container);

const display = document.getElementById('display');
let expression = '';

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/^[0-9]$/.test(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        event.preventDefault();
        appendChar(key);

    } else if (key === 'Enter') {
        event.preventDefault();
        evaluateExpression();
    } else {
        alert('Only numbers and mathematical operators are allowed!');
    }
});

function appendChar(char) {
    expression += char;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function evaluateExpression() {
    try {
        const result = eval(expression);
        if (!isNaN(result)) { // Check if the result is a valid number
            display.value = result;
            expression = result.toString();
        } else {
            throw new Error('Invalid expression!');
        }
    } catch (error) {
        alert('Invalid expression!');
    }
}
