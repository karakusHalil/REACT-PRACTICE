import { useParams } from "react-router-dom";
import CardLoading from "../../components/CardLoading";
import CatCard from "../../components/CatCard";
import Row from "../../components/Row";
import useFetchCatsOfCategory from "../../customHooks/fetch/useFetchCatsOfCategory";

function FetchCatsOfCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useFetchCatsOfCategory(categoryName);

  return (
    <>
      <div>
        <h2>Bread : {categoryName}</h2>
        {isError ? <h3>{error}</h3> : isLoading ? <CardLoading /> : ""}
        <Row>
          {data.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </Row>
      </div>
    </>
  );
}

export default FetchCatsOfCategory;
