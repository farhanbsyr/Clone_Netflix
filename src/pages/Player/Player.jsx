import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailMovie, setDetailMovie] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzNWI5ZDcxNzlkOGU0ZTkwMGM0ZGIzMDc5Zjg5MSIsIm5iZiI6MTcyMjY1NTI0My4xODUyODksInN1YiI6IjY2YWMzMzZkOTg2OTU0NDE4YjI4YjcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gc14XksDWL1hshHgtZ6FgDHG_p5OjY-f6_fu2SaFfY",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDetailMovie(response.results[3]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt="back arrow"
        width={50}
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${detailMovie.key}`}
        width="90%"
        title="trailer"
        frameborder="0"
        allowFullScreen
        height="90%"
        frameBorder="0"
      ></iframe>
      <div className="player-info">
        <p>{detailMovie.published_at.slice(0, 10)}</p>
        <p>{detailMovie.name}</p>
        <p>{detailMovie.type}</p>
      </div>
    </div>
  );
};

export default Player;
