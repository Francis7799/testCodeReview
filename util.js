function calculateTax(amount) {
    return amount * 0.18;
}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2); // built-in .toFixed() — should PASS
}

function validateUserEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // built-in .test() — should PASS
}

module.exports = { calculateTax, formatCurrency, validateUserEmail };
