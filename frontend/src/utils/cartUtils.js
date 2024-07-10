export const addDecimals = (num) => {
    return (Math.round(num*100)/100).toFixed(2);
}

export const updateCart = (state) => {
    // Calculating prices

    state.itemPrice = addDecimals(state.cartItems.reduce((acc, item) => acc+ item.price * item.qty, 0));
    // to be aaplied when total is less then 100
    state.shippingPrice = addDecimals(state.itemPrice > 100.00 ? 0.00 : 10.00);
    // 15 % tax
    state.taxPrice = addDecimals((state.itemPrice * 0.15 ).toFixed(2));
    // total of all
    console.log(state);
    state.totalPrice = addDecimals( Number(state.itemPrice) + Number(state.shippingPrice) + Number(state.taxPrice));

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}