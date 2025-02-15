import React, { useEffect, useRef } from "react";
import "./Headers.css";
import logos from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

import { Link } from "react-router-dom";
import { logout } from "../../firebase";

const Headers = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="headers">
      <div className="header-left">
        <img src={logos} alt="logo netflix" width={100} />
        <ul>
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
          <div className="dropdown">
            <p
              onClick={() => {
                {
                  logout();
                }
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
