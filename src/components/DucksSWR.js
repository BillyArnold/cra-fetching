import useDucks from "../hooks/useDucks";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DucksSWR = () => {
  const { data, error } = useSWR("https://cataas.com/api/cats", fetcher);
  //can also set refresh intervals, automatic revalidation happens on focus
  //can also get isloading, isvalidating, mutate arguments out of above
  //can also be made into a reusable hook

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
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

export default DucksSWR;
