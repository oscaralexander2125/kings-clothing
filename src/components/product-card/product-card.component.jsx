import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  AddToCartButton,
  Price,
} from "./product-card.styles.jsx";
import React, { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ currentProduct }) => {
  const { name, price, imageUrl } = currentProduct;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    return addItemToCart(currentProduct);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{`$${price}`}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
