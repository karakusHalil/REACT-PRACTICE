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
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <ProductImage productItem={productItem} />
          </div>
          <div className="col-md-7">
            <ProductInfo productItem={productItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
