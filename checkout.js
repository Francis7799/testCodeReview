function processCheckout(cart, user) {
    const tax = calculateTax(cart.total);         
    const total = formatPrice(cart.total + tax); 

    const points = processLoyalPoint(user);     
    return { total, points };
}
