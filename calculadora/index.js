let display = document.getElementById('display');

function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  let expression = display.value;

  // Reemplazar el símbolo de porcentaje con la operación correspondiente
  expression = expression.replace(/%/g, '/100');

  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

