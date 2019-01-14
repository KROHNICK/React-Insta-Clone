import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = props => {
  return (
    <header>
      <div className="insta">
        <div className="logo">
          <i class="fab fa-instagram" />
        </div>
        <div className="gram">Instagram</div>
      </div>
      <SearchBar />
      <div className="buttons">
        <div className="explore">
          <i class="far fa-compass" />
        </div>
        <div className="notifs">
          <i class="far fa-heart" />
        </div>
        <div className="profile">
          <i class="far fa-user" />
        </div>
      </div>
    </header>
  );
};

export default Header;
