import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'


const Shop = () => {
  const { currentShop } = useContext(ShopContext);

  return (
    <div className="products-container">
      {currentShop.map((currentProduct) => {
        return (
          <ProductCard key={currentProduct.id} currentProduct={currentProduct} />
        );
      })}
    </div>
  );
};

export default Shop;
