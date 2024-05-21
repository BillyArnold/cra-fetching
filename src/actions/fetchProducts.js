const fetchProducts = async () => {
  const res = await fetch("http://localhost:5152/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
  const data = await res.json();
  return data;
};

export default fetchProducts;
