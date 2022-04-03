import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";


const CartDropDown = () => {
  const {currentCart} = useContext(CartContext)
  return (
    <div className={`cart-dropdown-container`}>
      <div className="cart-items">
        {currentCart.map(item => {
          return <CartItem key={item.id} cartItem={item} />
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
