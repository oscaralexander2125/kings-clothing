import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import React, { useContext } from "react";

const CartDropDown = () => {
  //const { currentCart } = useContext(CartContext);
  
//${currentCart.isDisplayed ? 'hidden':null}`
  return (
    <div className={`cart-dropdown-container`}>
      <div className="cart-items">
        {/*currentCart.map((item) => {
          return (
            <div key={item.id} className="item-conatiner">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          );
        })*/}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
