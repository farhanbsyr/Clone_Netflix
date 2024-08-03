import React from "react";
import "./Headers.css";
import logos from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="headers">
      <div className="header-left">
        <img src={logos} alt="logo netflix" width={100} />
        <ul>
          <Link to="/login">Login</Link>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movie</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse My Language</li>
        </ul>
      </div>
      <div className="header-right">
        <img src={search_icon} alt="Search Icon" className="icon" />
        <p>Childern</p>
        <img src={bell_icon} alt="Bell Icon" className="icon" />
        <div className="header-profile">
          <img src={profile_img} alt="Profile Icon" className="icon profile" />
          <img src={caret_icon} alt="Caret Icon" className="icon drowdown" />
          <div className="dropdown">Sign Out of Netflix</div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
