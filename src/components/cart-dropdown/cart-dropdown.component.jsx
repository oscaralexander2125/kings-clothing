import React from "react";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentCart,
  selectIsDisplayed,
} from "../../store/cart/cart.selector.js";
import { setDisplayed } from "../../store/cart/cart.action.js";

const CartDropDown = () => {
  const isDisplayed = useSelector(selectIsDisplayed);
  const currentCart = useSelector(selectCurrentCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    handleToggle();
  };

  const handleToggle = () => {
    dispatch(setDisplayed(!isDisplayed));
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {currentCart.length ? (
          currentCart.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>You cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
