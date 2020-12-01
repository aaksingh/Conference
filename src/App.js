import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Row from "./Row.js";

const url = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
function App() {
   const [freeConf, setfreeConf] = useState([]);
   const [paidConf, setpaidConf] = useState([]);


  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
      setfreeConf(data.free);
      setpaidConf(data.paid);
    }
    fetchData();
  },[]);

  console.log(freeConf);
  console.log(paidConf);

  return (
    <div className="App">
      <Header />
      <Row title="Paid" data_value={paidConf} />
      <Row title="Free" data_value={freeConf} />
    </div>
  );
}

export default App;
