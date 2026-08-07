function processCheckout(cart, user) {
    const tax = calculateTax(cart.total);         // Defined in utils.js — SHOULD PASS
    const total = formatPrice(cart.total + tax);  // Defined in utils.js — SHOULD PASS

    const points = processLoyaltyPoints(user);     // GHOST FUNCTION — SHOULD FLAG 1 CRITICAL
    return { total, points };
}
