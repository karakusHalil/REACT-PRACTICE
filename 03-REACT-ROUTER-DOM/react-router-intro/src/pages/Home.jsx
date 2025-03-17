import Categories from "../components/products/Categories";
import Products from "./Products";

function Home() {
  return (
    <>
      <div className="row justify-content-between" style={{ width: "100%" }}>
        <div className="col-sm-12 col-md-3">
          <Categories />
        </div>
        <div className="col-sm-12 col-md-9">
          <Products/>
        </div>
      </div>
    </>
  );
}

export default Home;
