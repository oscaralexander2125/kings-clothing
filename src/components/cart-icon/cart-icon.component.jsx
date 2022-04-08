import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isDisplayed, setDisplayed, totalQuantity } = useContext(CartContext);

  const handleToggle = () => {
    setDisplayed(!isDisplayed);
  };

  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
