import useDucks from "../hooks/useDucks";

const DucksHook = () => {
  const { data, error, isPending } = useDucks();

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

export default DucksHook;
