import "./product-card.styles.scss";
import React, { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ currentProduct }) => {
  const { name, price, imageUrl } = currentProduct;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    return addItemToCart(currentProduct);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
