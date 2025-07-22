import Header from "./components/Header";
import PageContainer from "./container/PageContainer";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slice/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [dispatch, products]);

  return (
    <>
      <div>
        <PageContainer>
          <Loading />
          <Header />
          <RouterConfig />
        </PageContainer>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          <div className="drawer-content">
            {products &&
              products.map((product) => (
                <div key={product.id} className="product-item">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="product-info">
                    <p className="product-title">
                      {product.title}{" "}
                      <span className="product-count">({product.count})</span>
                    </p>
                    <p className="product-price">{product.price}₺</p>
                  </div>
                  <button>Sil</button>
                </div>
              ))}
          </div>
          <div className="drawer-total">
            <h3>Toplam Tutar: {totalAmount}₺</h3>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default App;
