import Loading from "../../components/Loading";
import useFetchCategoriesApi from "../../customHooks/fetch/useFetchCategoriesApi";

function FetchCategories() {
  const [data, isLoading, isError, error] = useFetchCategoriesApi();

  return (
    <>
      <div>
        <h2>Fetch Page</h2>
        {isError ? <h3>{error}</h3> : isLoading ? <Loading /> : ""}
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FetchCategories;
