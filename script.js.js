const display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if (!'+-*/%'.includes(lastChar)) {
        display.innerText += operator;
    }
}

function appendDot() {
    const currentValue = display.innerText.split(/[-+*/%]/).pop();
    if (!currentValue.includes('.')) {
        display.innerText += '.';
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteDigit() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    try {
        let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}