import { Link } from "react-router-dom";
import useAxiosCategoriesApi from "../../customHooks/axios/useAxiosCategoriesApi";
import Loading from "../../components/Loading";

function AxiosCategories() {
  const [data, isLoading, isError, error] = useAxiosCategoriesApi();
  return (
    <>
      <div>
        <h2>Axios Page</h2>
        {isError ? <h3>{error}</h3> : isLoading ? <Loading /> : ""}
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">
              <Link className="nav-link" to="/">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AxiosCategories;
