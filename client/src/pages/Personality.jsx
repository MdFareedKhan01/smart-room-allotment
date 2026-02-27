import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css'


function Personality(){

   const [que, setQue]=useState([]);

  useEffect(() => {
    const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/Personality');
      setQue(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchItems();
  }, []);

  return (
    <div>
      <h1>Personality Questions</h1>
      <ul>
        {que.map((item, index) => <li key={index}>{item.text}</li>)}
      </ul>
    </div>
  );

}

export default Personality;