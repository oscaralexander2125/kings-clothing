import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
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
    <div className={`cart-dropdown-container`}>
      <div className="cart-items">
        {currentCart.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
