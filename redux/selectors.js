const {createSelector} = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

export const cartTotalSeleector = createSelector([cartSelector], (cart)=>
    cart.reduce((total, current) => (total += current.quantity), 0)
);


export const cartTotalPriceSeleector = createSelector([cartSelector], (cart)=>
    cart.reduce(
        (total, current) => (total += current.price * current.quantity),
        0
    )
);