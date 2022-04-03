import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

export const ShopContext = createContext({
  setCurrentShop: () => null,
  currentShop: [],
});

export const ShopProvider = ({ children }) => {
  const [currentShop, setCurrentShop] = useState(SHOP_DATA);
  const value = { currentShop, setCurrentShop };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
