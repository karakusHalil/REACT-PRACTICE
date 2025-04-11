import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardLoading from "../../components/CardLoading"

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;

function FetchCatsOfCategory() {
  const {categoryName} = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const getApiData = async () => {
    const headerInfo = {
      headers: {
        "x-api-key": VITE_CAT_API_KEY,
      },
    };
    const response = await fetch(
      `${VITE_CAT_API_URL}/images/search?limit=10&breed_ids=${categoryName}`,
      headerInfo
    );
    const responseData = await response.json();
    if (!response.ok) {
      setIsError(true);
      setError("Veri alınırken bir sorun meydana geldi...");
      throw new Error("Veri alınamadı...");
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
        <h2>Bread : {categoryName}</h2>
        {
            isError ? <h3>{error}</h3> : isLoading ? <CartLoading/> : ""
        }
        
    </div>
  </>
  );
}

export default FetchCatsOfCategory;
