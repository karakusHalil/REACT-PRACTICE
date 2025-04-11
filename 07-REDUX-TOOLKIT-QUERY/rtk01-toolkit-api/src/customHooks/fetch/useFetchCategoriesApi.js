import { useEffect, useState } from "react";

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;

export default function useFetchCategoriesApi() {
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

  return [data, isLoading, isError, error];
}
