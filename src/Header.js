import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Enter the name of City"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
    </div>
  );
}

export default Header;
