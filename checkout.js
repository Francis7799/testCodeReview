function processCheckout(cart, user) {
    const tax = calculateTax(cart.total);         
    const total = formatPrice(cart.total + tax); 

    const points = processLoyaltyPoint(user);     
    return { total, points };
}
