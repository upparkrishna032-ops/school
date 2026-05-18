import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get("http://localhost:8000/response");
        setName(response.data.data.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchName();
  }, []);

  return (
    <section>
      <h1>Application running</h1>
      <h3>Name : {name}</h3>
      <p>Laxmiputra Basavannappa Uppar</p>
    </section>
  );
}

export default App;
