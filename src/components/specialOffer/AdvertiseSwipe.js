import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Card from "./Card";
import "swiper/swiper.scss";
import flightFetch from "../../dataHandler/dataHandler";
import ErrorModal from "../ui/ErrorModal";
import "./AdvertiseSwipe.css";

const AdvertiseSwipe = () => {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
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
  }, [fillCards]);

  const clear = useCallback(() => {
    setError(null);
  }, []);

  return (
    <React.Fragment>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {loading ? null : (
        <div className="swiper-container">
          <Swiper
            spaceBetween={60}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {cards.map((card) => {
              return (
                <SwiperSlide>
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
