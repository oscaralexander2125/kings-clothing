import React, { useContext } from "react";
import {CartDropDownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { currentCart, setDisplayed, isDisplayed } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    handleToggle();
  };

  const handleToggle = () => {
    setDisplayed(!isDisplayed);
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
