import React from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow} alt="back arrow" />
      <iframe
        src={`https://www.youtube.com/embed/YQQD67N5pi0&t=6738s`}
        width="90%"
        title="trailer"
        frameborder="0"
        allowFullScreen
        height="90%"
        frameBorder="0"
      ></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
