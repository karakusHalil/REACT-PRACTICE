const Product = (props) => {
  return (
    <div>
      <div>ÜRÜN BİLGİSİ</div>

      {/* <div>
        <div>İsim:{props.productName} </div>
        <div>Fiyat:{props.price} </div>
      </div> */}
      <div>
        {props.ürünler.map((urun, index) => (
          <div key={index}>
            <div>İsim:{urun.productName} </div>
            <div>Fiyat:{urun.price} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
