import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const { addItemToCart, subtractItemCount, removeItem } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => subtractItemCount(product)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemToCart(product)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => removeItem(product)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
