import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const { data, error, isPending } = useSWR(
    "http://localhost:5152/products",
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
