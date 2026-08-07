function calculateTax(amount) {
    return amount * 0.18;
}

function formatPrice(amount) {
    return '$' + amount.toFixed(2);
}


module.exports = { calculateTax, formatPrice };
