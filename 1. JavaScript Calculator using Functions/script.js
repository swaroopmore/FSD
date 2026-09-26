const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operationInput = document.getElementById("operation");

const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");
const resultDisplay = document.getElementById("result");


function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}


function subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}


function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}


function divideNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


function calculateResult() {
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    const operation = operationInput.value;

    let result;

    switch (operation) {
        case "add":
            result = addNumbers(firstNumber, secondNumber);
            break;

        case "subtract":
            result = subtractNumbers(firstNumber, secondNumber);
            break;

        case "multiply":
            result = multiplyNumbers(firstNumber, secondNumber);
            break;

        case "divide":
            result = divideNumbers(firstNumber, secondNumber);
            break;
    }

    resultDisplay.textContent = result;
}


function resetCalculator() {
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    operationInput.value = "add";
    resultDisplay.textContent = "Your answer will appear here";
}


calculateButton.addEventListener("click", calculateResult);

resetButton.addEventListener("click", resetCalculator);