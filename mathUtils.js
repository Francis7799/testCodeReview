function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function formatResult(val) {
    return val.toFixed(2); // Built-in method — should PASS
}

module.exports = { addNumbers, multiplyNumbers, formatResult };
