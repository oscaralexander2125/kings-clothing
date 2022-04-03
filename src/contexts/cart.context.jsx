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

export const CartContext = createContext({
  isDisplayed: false,
  setDisplayed: () => {},
  currentCart: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isDisplayed, setDisplayed] = useState(false);
  const [currentCart, setCurrentCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newCartCount = currentCart.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setTotalQuantity(newCartCount);
  }, [currentCart]);

  const addItemToCart = (productToAdd) => {
    setCurrentCart(addCartItem(currentCart, productToAdd));
  };

  const value = {
    isDisplayed,
    setDisplayed,
    addItemToCart,
    currentCart,
    totalQuantity,
    setTotalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
