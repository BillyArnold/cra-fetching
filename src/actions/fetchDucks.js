const fetchDucks = async () => {
  const res = await fetch("https://cataas.com/api/cats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export default fetchDucks;
