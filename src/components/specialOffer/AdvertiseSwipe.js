import React, { useState, useEffect, useCallback, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Card from "./Card";
import "swiper/swiper.scss";
import flightFetch from "../../dataHandler/dataHandler";
import "./AdvertiseSwipe.css";
import { ErrorState } from "../../context/ErrorContext";

const AdvertiseSwipe = () => {
  const [cards, setCards] = useState(null);
  const { setError } = useContext(ErrorState);
  const [loading, setLoading] = useState(true);

  SwiperCore.use([Autoplay]);

  const fillCards = useCallback((data) => {
    setCards(data.values);
  }, []);

  useEffect(() => {
    if (cards) setLoading(false);
  }, [cards]);

  useEffect(() => {
    flightFetch(
      "http://ip-api.com/json",
      (data) => {
        const queryUrl = `http://localhost:8080/advisor?country=${data.country}`;
        setLoading(true);
        flightFetch(queryUrl, fillCards, (error) => setError(error));
      },
      (error) => setError(error)
    );
  }, [fillCards, setError]);

  return (
    <React.Fragment>
      {loading ? null : (
        <div className="swiper-container">
          <Swiper
            spaceBetween={60}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {cards.map((card) => {
              return (
                <SwiperSlide key={card.city}>
                  <Card card={card} />;
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </React.Fragment>
  );
};
export default AdvertiseSwipe;
