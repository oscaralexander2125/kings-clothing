import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import { useSelector } from "react-redux";
import {
  selectCurrentCart,
  selectNewTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const currentCart = useSelector(selectCurrentCart);
  const totalPrice = useSelector(selectNewTotal);

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
