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
import {
  addItemToCart,
  subtractItemCount,
  removeItem,
} from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCart } from "../../store/cart/cart.selector";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const currentCart = useSelector(selectCurrentCart);
  const dispatch = useDispatch();

  const reduceCount = () => dispatch(subtractItemCount(currentCart, product));

  const addCount = () => dispatch(addItemToCart(currentCart, product));
  const deleteItem = () => dispatch(removeItem(currentCart, product));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={reduceCount}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addCount}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={deleteItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
