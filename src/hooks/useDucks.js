import { useState, useEffect } from "react";
import fetchDucks from "../actions/fetchDucks";

const useDucks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const fetchData = () => {
    setIsPending(true);
    fetchDucks()
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isPending,
    refetch: fetchData, // Function to trigger refetch
  };
};

export default useDucks;
