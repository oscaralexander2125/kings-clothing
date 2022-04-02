import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'


const Shop = () => {
  const { currentShop } = useContext(ShopContext);

  return (
    <div className="products-container">
      {currentShop.map((currentShop) => {
        return (
          <ProductCard key={currentShop.id} currentShop={currentShop} />
        );
      })}
    </div>
  );
};

export default Shop;
