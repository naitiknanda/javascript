function clearScreen() {
    document.getElementById("result").value = "";
}
function setScreenValue(value) {
    const r = document.getElementById("result");
    if (r.value === "Enter an expression" || r.value === "Invalid Expression") r.value = "";
    r.value += value;
}
function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();
    if (expression === '') {
        resultElement.value = 'Enter a expression';
        return;
    }
    try {
        resultElement.value = eval(expression);}
        catch (e) {
            resultElement.value = 'Invalid expression'
        }

    }
