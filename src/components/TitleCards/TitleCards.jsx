import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const TitleCards = ({ title, category }) => {
  return (
    <div className="title-cards">
      <h2>{title ? title : "Populer on Netflix"}</h2>
      <Swiper
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper card-list"
      >
        {cards_data.map((card, index) => (
          <SwiperSlide key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TitleCards;
