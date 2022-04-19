import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (currentCart, productToAdd) => {
  const itemToModify = currentCart.find((item) => {
    return item.id === productToAdd.id;
  });

  if (itemToModify) {
    return currentCart.map((item) =>
      item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [...currentCart, { ...productToAdd, quantity: 1 }];
};

const reduceItemCount = (currentCart, productCountToReduce) => {
  const { quantity, id } = productCountToReduce;

  const itemToModify = currentCart.find((item) => {
    return item.id === id;
  });

  if (itemToModify.quantity === 1) {
    return currentCart.filter(
      (cartItem) => cartItem.id !== productCountToReduce.id
    );
  }

  const newArr = currentCart.map((item) => {
    return item.id === id
      ? {
          ...item,
          quantity: quantity - 1,
        }
      : item;
  });

  return newArr;
};

const removeItemHelper = (currentCart, productToRemove) => {
  const index = currentCart.findIndex((item) => {
    return item.id === productToRemove.id;
  });

  if (index > -1) {
    currentCart.splice(index, 1);
  }
  const newCart = [...currentCart];
  return newCart;
};

export const setDisplayed = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_DISPLAYED, bool);
};

export const addItemToCart = (currentCart, productToAdd) => {
  const newCart = addCartItem(currentCart, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CURRENT_CART, newCart);
};

export const subtractItemCount = (currentCart, productCountToReduce) => {
  const newCart = reduceItemCount(currentCart, productCountToReduce);
  return createAction(CART_ACTION_TYPES.SET_CURRENT_CART, newCart);
};

export const removeItem = (currentCart, product) => {
  const newCart = removeItemHelper(currentCart, product);
  return createAction(CART_ACTION_TYPES.SET_CURRENT_CART, newCart);
};
