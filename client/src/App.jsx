import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/hey")
      .then((response) => {
        response.data;
        setData(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <h1>{data}</h1>
      </div>
    </>
  );
}

export default App;
