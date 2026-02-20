
//
// let resultField = document.getElementById('result');

function appendValue(value) {
  resultField.value += value;
}

function performOperation(operator) {
  resultField.value += operator;
}

function clearResult() {
  resultField.value = '';
}

function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch {
    resultField.value = 'Error';
  }
}
