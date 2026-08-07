// utils.js — Helper utilities

function calculateTax(amount) {
    return amount * 0.18;
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function validateUserEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = { calculateTax, formatCurrency, validateUserEmail };
