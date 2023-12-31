const percentButton = document.querySelector('#percent');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');
const display = document.querySelector('#number');
const positiveButton = document.querySelector('#positive');
const decimalButton = document.querySelector('#decimal');

let Value1 = 0;      
let operation = null; 
let Value2 = 0; 
let weHaveValue1 = false;

percentButton.addEventListener('click', function() {
  if (operation) {
    Value2 = parseFloat(display.textContent) / 100;
    display.textContent = Value2.toString();
  } else {
    Value1 = parseFloat(display.textContent) / 100;
    display.textContent = Value1.toString();
  }
});

decimalButton.addEventListener('click', function() {
  if (!display.textContent.includes('.')) {
      if (display.textContent === '' || isNaN(display.textContent)) {
          display.textContent = '0.';
      } else {
          display.textContent += '.';
      }
  }
});

positiveButton.addEventListener('click', function() {
  let displayValue = parseFloat(display.textContent);
  if (isNaN(displayValue)) {
    displayValue = -1;
  } else {
    displayValue *= -1;
  }

  if (operation) {
    Value2 = displayValue;
  } else {
    Value1 = displayValue;
  }

  display.textContent = displayValue.toString();
});


numberButtons.forEach(button => {
  button.addEventListener('click', function() {
      if (display.textContent == "0") display.textContent = "";
      display.textContent += button.textContent;
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', function() {

    if (!weHaveValue1) {
      Value1 = parseFloat(display.textContent);
      weHaveValue1 = true;
      console.log("Value1 is " + Value1);
    }
    else {
      Value2 = parseFloat(display.textContent);
      console.log("Value2 is " + Value2);
    }
    if (this.textContent != '=') operation = this.textContent;  
    display.textContent = "";     
    
  });
});
  
clearButton.addEventListener('click', function() {
  Value1 = 0;      
  operation = null; 
  Value2 = 0; 
  display.textContent = '';
  weHaveValue1 = false;
});

equalButton.addEventListener('click', function() {

  console.log("Num is " + Value1 + " and " + Value2);
  let finalValue = 0;
     
  switch (operation) {
    case '+':
      console.log("Im trying to do plus");
      finalValue = Value1 + Value2;
      break;
    case '-':
      finalValue = Value1 - Value2;
      break;
    case '÷':
      if (Value2 === 0) {
        display.textContent = "Cannot divide by zero";
        return;
      } else {
        finalValue = Value1 / Value2;
      }
      break;
    case '×':
      finalValue = Value1 * Value2;
      break;
  }
  console.log(finalValue);
  
  display.textContent = finalValue.toString();
  Value1 = finalValue;      
});
