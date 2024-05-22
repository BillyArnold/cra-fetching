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
    if (search) {
      setSearchTerm(search);
    }
  }, []);

  const { data, error, isPending } = useSWR(
    searchTerm
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
    <ul>
      {data && data.map((product) => <li key={product.id}>{product.name}</li>)}
    </ul>
  );
};

export default ProductList;
