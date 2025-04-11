import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;

function FetchCategories() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const getApiData = async () => {
    const response = await fetch(`${VITE_CAT_API_URL}/breeds`);
    const responseData = await response.json();
    if (!response.ok) {
      setIsError(true);
      setError("Veri alınırken bir sorun meydana geldi...");
      throw new Error(error);
    }
    setData(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getApiData();
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

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
