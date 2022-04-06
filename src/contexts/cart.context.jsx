import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isDisplayed: false,
  setDisplayed: () => {},
  currentCart: [],
  addItemToCart: () => {},
  subtractItemCountFromCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isDisplayed, setDisplayed] = useState(false);
  const [currentCart, setCurrentCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = currentCart.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setTotalQuantity(newCartCount);
  }, [currentCart]);

  useEffect(() => {
    const newTotal = currentCart.reduce((total, sum) => {
      return total + sum.price * sum.quantity;
    }, 0);
    setTotalPrice(newTotal);
  }, [currentCart]);

  const addItemToCart = (productToAdd) => {
    setCurrentCart(addCartItem(currentCart, productToAdd));
  };

  const subtractItemCount = (productCountToReduce) => {
    setCurrentCart(reduceItemCount(currentCart, productCountToReduce));
  };

  const removeItem = (product) => {
    const index = currentCart.findIndex((item) => {
      return item.id === product.id;
    });

    if (index > -1) {
      currentCart.splice(index, 1);
    }
    const newArr = [...currentCart];
    setCurrentCart(newArr);
  };

  const value = {
    isDisplayed,
    setDisplayed,
    addItemToCart,
    subtractItemCount,
    removeItem,
    currentCart,
    totalQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
