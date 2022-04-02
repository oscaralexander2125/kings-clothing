import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const Displayed = createContext({
  isDisplayed: false,
  setDisplayed: () => {},
})

export const CartContext = createContext({
  currentCart: [],
  setCurrentCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isDisplayed, setDisplayed] = useState(false);
  const value = { isDisplayed, setDisplayed };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
