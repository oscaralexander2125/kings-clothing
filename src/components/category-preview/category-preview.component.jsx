import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {CategoryPreviewContainer, Title, Preview} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  console.log(title)
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} currentProduct={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
