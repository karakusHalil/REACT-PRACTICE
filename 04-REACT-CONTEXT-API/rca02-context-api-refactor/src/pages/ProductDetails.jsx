import { useContext, useEffect } from "react";
import { ProductItemContext } from "../contexts/ProductItemContext";
import ProductInfo from "../components/Product/ProductInfo";
import ProductImage from "../components/Product/ProductImage";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const { productItem, setProductId } = useContext(ProductItemContext);

  useEffect(() => {
    setProductId(productId);
  }, [productId, setProductId]);
  return (
    <>
      <div className="row mt-3">
        <ProductImage productItem={productItem} />
        <ProductInfo productItem={productItem} />
      </div>
    </>
  );
}

export default ProductDetails;
