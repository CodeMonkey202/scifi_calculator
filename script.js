// Gte the current values form in the website
let currentInput = '';
let previousInput = '';
let operator = '';

// write a function to append numbers to the input field for the calculator
function appendNumber(number){
  currentInput += number; //append the number to current input
  updateDisplay(); //update calculator display
} 

//function to append an operator to the calculator for the function
function appendOperator(op){
  if(currentInput !== ''){
    if(previousInput !== ''){
      updateDisplay();
      calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }else{
    alert("Choose an Operand");
  }
}
//function factorial
function fact(currentInput){
    if(currentInput == 1 || currentInput ==0){
        return 1;
    }else{
        return currentInput * fact(currentInput -1);
    }
}
//fucntion base finder
function convertBase(number, fromBase, toBase) {
  if (fromBase < 2 || toBase < 2 || !Number.isInteger(number)) {
    return "Invalid input";
  }

  // Convert the number to decimal first
  const decimalNumber = parseInt(number, fromBase);

  // Convert the decimal number to the target base
  const result = decimalNumber.toString(toBase);

  return result;
}

// Example usage:
/* const binaryNumber = "1101";
const decimalEquivalent = convertBase(binaryNumber, 2, 10);
console.log(`Binary ${binaryNumber} in decimal: ${decimalEquivalent}`);

const octalNumber = "34";
const binaryEquivalent = convertBase(octalNumber, 8, 2);
console.log(`Octal ${octalNumber} in binary: ${binaryEquivalent}`);
 */

function appendFunction(func){
  if(currentInput !== ''){
    switch(func){
      case 'sqrt':
        currentInput = Math.sqrt(parseFloat(currentInput));
        break;
      case 'square':
        currentInput = Math.pow(parseFloat(currentInput, 2));
        break;
      case 'cube':
        currentInput = Math.pow(parseFloat(currentInput, 3));
        break;
      case 'power':
        currentInput += '^';
        break;
      case 'fact':
        currentInput = fact(currentInput);
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
      case 'tanh':
        currentInput = Math.tanh(parseFloat(currentInput));
        break;
      case 'cosh':
        currentInput = Math.cosh(parseFloat(currentInput));
        break;
      case 'acos':
        currentInput = Math.acos(parseFloat(currentInput));
        break;
      case 'acosh':
        currentInput = Math.acosh(parseFloat(currentInput));
        break;
      case 'atan':
        currentInput = Math.atan(parseFloat(currentInput));
        break;
      case 'asin':
        currentInput = Math.asin(parseFloat(currentInput));
        break;
      case 'asinh':
        currentInput = Math.asinh(parseFloat(currentInput));
        break;
      case 'atan2':
        currentInput = Math.atan2(parseFloat(currentInput));
        break;
      case 'atanh':
        currentInput = Math.atanh(parseFloat(currentInput));
        break;
      case 'binary':
        currentInput = convertBase(currentInput, fromBase, toBase);
        break;
      default:
         currentInput = currentInput;
         break;

    }
    updateDisplay();
  }
}


// calculate function
function calculate(){
if(previousInput !== '' && currentInput !== ''){
  switch(operator){
    case '+':
      currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
      break;
    case '-':
      currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
      break;
    case '*':
     currentInput =  (parseFloat(previousInput) + parseFloat(currentInput)).toString();
      break;
    case '/':
      currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
      operator='/';
      updateDisplay();
      break;
    default:
      break;
  }
  operator = '';
  previousInput = '';
  updateDisplay();
}
}

// function to clear the display in the calculator
function clearDisplay(){
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}
// function to delete the last input in the input bar of the calculator
function deleteLast(){
  currentInput = currentInput.slice(0, 1);
  // an array and slice through the array  the first 
  updateDisplay();
}


// function to append decimals to the calculator
function appendDecimal(){
  if(!currentInput.includes('.')){
    currentInput += '.';
    updateDisplay();
  }
}

// function to update the display of the calculator 
function updateDisplay(){
  document.getElementById('display').value = currentInput;
    // document.getElementById('display').value = operator;
}