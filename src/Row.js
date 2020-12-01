import React, { useState, useEffect } from "react";
import "./Row.css";
import Tile from "./Tile.js";
function Row({ title, data_value }) {
  const [confData, setconfData] = useState([]);

  useEffect(() => {
    setconfData(data_value);
  });

  console.log(data_value);

  return (
    <div className="row">
      <h2 class="row__heading">{title}</h2>

      <div className="row__tile">
        {confData.map((conf_Data) => (
          <Tile
            imgURL={conf_Data?.imageURL.replace(/['"]+/g, "")}
            city={conf_Data?.city}
            stdate={conf_Data?.confStartDate}
            confname ={conf_Data?.confName}
            confurl={conf_Data?.confRegUrl}/>
        ))}
       
      </div>
    </div>
  );
}

export default Row;
