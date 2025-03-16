import { useEffect, useState } from "react";

function ProductDetail() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/1`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="row mt-3" >
        <div className="col-4 border p-2">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-8 border p-2" >
          <ul className="list-group list-group-flush" >
            <li className="list-group-item" >
              <p style={{fontWeight: "bold"}}>Ürün Adı :</p> <p>{product.title}</p>
            </li>
            <li className="list-group-item">
              <p style={{fontWeight: "bold"}}>Ürün Kategorisi : </p> <p>{product.category}</p>
            </li>
            <li className="list-group-item">
              <p style={{fontWeight: "bold"}}>Ürün Açıklaması :</p> <p>{product.description}</p>
            </li>
            <li className="list-group-item">
              <p style={{fontWeight: "bold"}}>Ürün Fiyatı :</p> <p>{product.price} $</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
