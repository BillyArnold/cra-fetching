import { useState, useEffect } from "react";
import fetchDucks from "../actions/fetchDucks";

const useDucks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
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
  }, []);

  return {
    data,
    error,
    isPending,
  };
};

export default useDucks;
