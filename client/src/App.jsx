import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [items, setItems]=useState([]);
  useEffect(() => {
    const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchItems();
  }, []);

  return (
    <div>
      <h1>OUR TEAM</h1>
      <p className="x"> hello </p>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );

}

export default App;