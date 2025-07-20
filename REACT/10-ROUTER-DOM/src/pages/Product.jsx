import Products from "../components/Products";
import { productData } from "../data/productData";
const Product = () => {
  return (
    <>
      <div>
        {productData &&
          productData.map((product) => (
            <Products key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Product;
