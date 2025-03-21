import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setData([]);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};
