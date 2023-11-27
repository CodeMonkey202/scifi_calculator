let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput !== '') {
    if (previousInput !== '') {
      calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }
}

function appendFunction(func) {
  if (currentInput !== '') {
    switch (func) {
      case 'sqrt':
        currentInput = Math.sqrt(parseFloat(currentInput));
        break;
      case 'square':
        currentInput = Math.pow(parseFloat(currentInput), 2);
        break;
      case 'cube':
        currentInput = Math.pow(parseFloat(currentInput), 3);
        break;
      case 'power':
        currentInput += '^';
        break;
      case 'sin':
        currentInput = Math.sin(parseFloat(currentInput));
        break;
      case 'cos':
        currentInput = Math.cos(parseFloat(currentInput));
        break;
      case 'tan':
        currentInput = Math.tan(parseFloat(currentInput));
        break;
      default:
        break;
    }
    updateDisplay();
  }
}

function calculate() {
  if (previousInput !== '' && currentInput !== '') {
    switch (operator) {
      case '+':
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
        break;
      case '-':
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
        break;
      case '*':
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
        break;
      case '/':
        currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        break;
      default:
        break;
    }
    operator = '';
    previousInput = '';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function updateDisplay() {
  // document.getElementById('display').value = currentInput;
  document.getElementById('display').value = operator;
}
