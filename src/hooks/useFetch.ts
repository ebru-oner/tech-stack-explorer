import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, { signal: controller.signal });
        if (response.status !== 200) {
          throw new Error(`Error happened while fetching data, ${response.statusText}`);
        }
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error && !(error instanceof AbortController)) {
          setError(error.message);
          setLoading(false);
        }
      } finally {
        if (!signal) setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort;
    };
  }, []);

  return { data, error, loading };
};

export default useFetch;
