import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");
    setSearchTerm(search);
  }, [location]);

  const { data, error, isPending } = useSWR(
    searchTerm && searchTerm !== ""
      ? `http://localhost:5152/products/search/${searchTerm}`
      : "http://localhost:5152/products",
    fetcher,
  );

  if (error) {
    return <div>Error</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="flex flex-wrap justify-center items-center">
      {data &&
        data.map((product) => (
          <li className="m-6 p-6 shadow-md rounded-md" key={product.id}>
            {product.name}
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
