import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    const fetchDucks = async () => {
      try {
        const res = await fetch("https://cataas.com/api/cats", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        //console.log(res);
        const data = await res.json();
        //console.log(data);
        setDucks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDucks();
  }, []);

  if (!ducks) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App flex flex-wrap justify-center items-center ">
      {ducks.map((duck) => (
        <img
          key={duck._id}
          className="m-2 h-40 w-40 rounded-full object-cover"
          src={`https://cataas.com/cat/${duck._id}`}
        />
      ))}
    </div>
  );
}

export default App;
