import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/swiper.scss";
import flightFetch from "../../dataHandler/dataHandler";
import ErrorModal from "../ui/ErrorModal";

const AdvertiseSwipe = () => {
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fillOptions = useCallback((data) => {
    setCards(data.values);
    setLoading(false);
  }, []);

  useEffect(() => {
    const queryUrl = `http://localhost:8080/advisor?country=faszrt`;
    setLoading(true);
    flightFetch(queryUrl, fillOptions, (error) => setError(error));
  });

  const clear = useCallback(() => {
    setError(null);
  }, []);

  return (
    <React.Fragment>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((card) => {
          return <Card />;
        })}
      </Swiper>
    </React.Fragment>
  );
};
export default AdvertiseSwipe;
