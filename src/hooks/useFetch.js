import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, [url]);

  return { data, error};
}
