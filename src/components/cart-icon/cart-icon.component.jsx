import React from "react";
import {
  selectIsDisplayed,
  selectNewCartCount,
} from "../../store/cart/cart.selector";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayed } from "../../store/cart/cart.action";

const CartIcon = () => {
  const isDisplayed = useSelector(selectIsDisplayed);
  const totalQuantity = useSelector(selectNewCartCount);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setDisplayed(!isDisplayed));
  };

  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
