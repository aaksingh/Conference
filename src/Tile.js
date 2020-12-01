import React from "react";
import "./Tile.css";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippy.js/react";
function Tile({ imgURL, city, stdate, confname, confurl }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="tile">
      <div className="tile__border">
        <div className="tile__image">
          <Tippy content={confname}>
            <img src={imgURL} alt="Blank URL"></img>
          </Tippy>
        </div>
      </div>

      <div className="tile__content">
        <h5>
          {city}, {stdate}
        </h5>
        <h5>
          {truncate(confname, 30)}
          <a href={confurl}>
            <h5>Visit</h5>
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Tile;
