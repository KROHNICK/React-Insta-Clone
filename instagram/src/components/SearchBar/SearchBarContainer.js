import React from "react";
import IGLogo from "../../assets/iglogo.png";
import Camera from "../../assets/camera-logo.svg";
import "../SearchBar/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i class="fab fa-instagram logo-camera" />
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i class="far fa-compass" />
        </div>
        <div className="social">
          <i class="far fa-heart" />
        </div>
        <div className="social">
          <i class="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
