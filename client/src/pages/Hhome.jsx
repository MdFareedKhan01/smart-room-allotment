import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

function Home() {
  const navigate = useNavigate();
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
      <button onClick={() => navigate("/Personality")}>
        Start Test
      </button>
    </div>
  );

}

export default Home;