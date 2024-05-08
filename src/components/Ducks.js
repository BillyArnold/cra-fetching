import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchDucks from "../actions/fetchDucks";

const Ducks = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ducks"],
    queryFn: fetchDucks,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
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

export default Ducks;
