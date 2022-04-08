import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.jsx";

const Checkout = () => {
  const { currentCart, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock className="header-block">
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {currentCart.map((product) => {
        return <CheckoutItem key={product.id} product={product} />;
      })}
      <Total>Total: ${totalPrice}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
