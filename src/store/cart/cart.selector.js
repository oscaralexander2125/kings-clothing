import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCurrentCart = createSelector(
  [selectCartReducer],
  (cart) => cart.currentCart
);

// (state) => {
//   return state.cart["currentCart"];
// };

export const selectIsDisplayed = createSelector(
  [selectCartReducer],
  (cart) => cart.isDisplayed
);

export const selectNewCartCount = createSelector([selectCurrentCart], (cart) =>
  cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0)
);



export const selectNewTotal = createSelector([selectCurrentCart], (cart) =>
  cart.reduce((total, sum) => {
    return total + sum.price * sum.quantity;
  }, 0)
);
