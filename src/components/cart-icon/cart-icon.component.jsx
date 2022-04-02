import React, { useContext, useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isDisplayed, setDisplayed } = useContext(CartContext);

  const handleToggle = () => {
    setDisplayed(!isDisplayed);
  };

  return (
    <div className="cart-icon-container" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
