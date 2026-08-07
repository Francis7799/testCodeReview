function processCheckout(cart, user) {
    const tax = calculateTax(cart.total);             // Defined in utils.js — should PASS
    const price = formatCurrency(cart.total + tax);    // Defined in utils.js — should PASS
    const emailValid = validateUserEmail(user.email);  // Defined in utils.js — should PASS

    const discount = applyLoyaltyDiscount(user.id);       // GHOST FUNCTION — should flag CRITICAL
    const fraud = runFraudDetectionEngine(cart);         // GHOST FUNCTION — should flag CRITICAL
    const shipping = calculateShippingMatrix(cart.items); // GHOST FUNCTION — should flag CRITICAL

    return { price, tax, emailValid, discount, fraud, shipping };
}
