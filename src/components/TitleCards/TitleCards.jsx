import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const TitleCards = ({ title, category }) => {
  const [movie, setMovie] = useState([]);
  // API from TMDB
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2UzNWI5ZDcxNzlkOGU0ZTkwMGM0ZGIzMDc5Zjg5MSIsIm5iZiI6MTcyMjU2MTg1NS42NTk3NzIsInN1YiI6IjY2YWMzMzZkOTg2OTU0NDE4YjI4YjcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.44q5N7k_v5p2pvvE9xD6m47hEUbNez4gn3fNHBV88xI",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => setMovie(response.results))
    .catch((err) => console.error(err));

  return (
    <div className="title-cards">
      <h2>{title ? title : "Populer on Netflix"}</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={75}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper card-list "
      >
        {movie.map((card, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide"
            style={{ width: "250px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
              alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TitleCards;
