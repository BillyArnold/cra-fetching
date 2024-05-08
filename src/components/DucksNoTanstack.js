import { useState, useEffect } from "react";
import fetchDucks from "../actions/fetchDucks";

const DucksNoTanstack = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetchDucks()
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
      });
  }, []);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="">
      <ul className="flex flex-wrap justify-center items-center">
        {data.map((duck) => (
          <li key={duck._id}>
            <img
              alt="duck"
              key={duck._id}
              className="m-2 h-40 w-40 rounded-full object-cover"
              src={`https://cataas.com/cat/${duck._id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DucksNoTanstack;
