import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => console.log(res.data));
  }, []);

  return <h1>Smart Room Allotment</h1>;
}

export default App;