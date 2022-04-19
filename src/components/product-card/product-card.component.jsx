import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCart } from "../../store/cart/cart.selector.js";
import { addItemToCart } from "../../store/cart/cart.action.js";

const ProductCard = ({ currentProduct }) => {
  const { name, price, imageUrl } = currentProduct;
  const dispatch = useDispatch();
  const currentCart = useSelector(selectCurrentCart);

  const addToCart = () => {
    return dispatch(addItemToCart(currentCart, currentProduct));
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
