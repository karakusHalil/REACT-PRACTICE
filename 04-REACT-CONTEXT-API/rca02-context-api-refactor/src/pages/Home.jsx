import { Outlet } from "react-router-dom";
import Categories from "../components/Category/Categories";
import ProductsList from "../components/Product/ProductsList";

function Home() {
  return (
    <>
      <div className="row justify-content-between mt-3" style={{ width: "100%" }}>
        <div className="col-sm-12 col-md-3 ">
          <Categories />
        </div>
        <div className="col-sm-12 col-md-9 mt-4">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Home;
