import React, { useCallback, useContext } from "react";
import "./Card.css";
import { GeneralState } from "../../context/SearchGeneral";
import { useHistory } from "react-router-dom";
import { UserState } from "../../context/UserContext";
import LikeCity from "./LikeCity";

export default function Card(props) {
  const { cityId, pictureUrl, year, month, day, city, country, price } = props.card;
  const history = useHistory();
  const { general } = useContext(GeneralState);
  const { isLoggedIn } = useContext(UserState)
  const [
    fromAirport,
    setFromAirport,
    toAirport,
    setToAirport,
    tripDate,
    setTripDate,
    returnDate,
    setReturnDate,
    person,
    setPerson,
    isReturn,
    setIsReturn,
  ] = general;

  const handleClick = useCallback(() => {
    setFromAirport(props.card.fromAirport);
    setToAirport(props.card.toAirport);
    setTripDate(new Date(year, month-1, day, 12));
    setReturnDate(null);
    setPerson(1);
    setIsReturn(false);
    history.push("/search");
  }, [day, month, year, props.card.fromAirport, props.card.toAirport, setFromAirport,
    setToAirport, setTripDate, setReturnDate, setPerson, setIsReturn, history]);

  return (
    <div className="offerCard" onClick={handleClick}>
      <img src={pictureUrl} className="offerImg" alt={city}></img>
      <div className="top-left">{city}</div>
      <div className="bottom-right">{country}</div>
      <div className="centered">$ {price}</div>
      { isLoggedIn && <div className="top-right">
          <LikeCity id={cityId} />
        </div> }
    </div>
  );
}
