import PropTypes from "prop-types";

function ProductInfo({ productItem }) {
  return (
    <>
      <div className="col-8 border p-2 w-100">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p style={{ fontWeight: "bold" }}>Ürün Adı :</p>{" "}
            <p>{productItem.title}</p>
          </li>
          <li className="list-group-item">
            <p style={{ fontWeight: "bold" }}>Ürün Kategorisi : </p>{" "}
            <p>{productItem.category}</p>
          </li>
          <li className="list-group-item">
            <p style={{ fontWeight: "bold" }}>Ürün Açıklaması :</p>{" "}
            <p>{productItem.description}</p>
          </li>
          <li className="list-group-item">
            <p style={{ fontWeight: "bold" }}>Ürün Fiyatı :</p>{" "}
            <p>{productItem.price} $</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductInfo;

ProductInfo.propTypes ==
  {
    productItem: PropTypes.object,
  };
