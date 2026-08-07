function calculateTotal(subtotal, taxRate) {
    const tax = multiplyNumbers(subtotal, taxRate);     // Defined in mathUtils.js — should PASS
    const total = addNumbers(subtotal, tax);           // Defined in mathUtils.js — should PASS
    const formatted = formatResult(total);             // Defined in mathUtils.js — should PASS

    const discount =0; // UNDEFINED GHOST FUNCTION — should flag CRITICAL
    return { formatted, discount };
}
