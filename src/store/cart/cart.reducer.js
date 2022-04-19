import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  isDisplayed: false,
  currentCart: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = []) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_DISPLAYED:
      return {
        ...state,
        isDisplayed: payload,
      };
    case CART_ACTION_TYPES.SET_CURRENT_CART:
      return {
        ...state,
        currentCart: payload,
      };
    default:
      return state;
  }
};
