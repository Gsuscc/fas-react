import React from "react";
import "./Card.css";

export default function Card(props) {
  console.log(props);
  const { pictureUrl, city, country, price } = props.card;
  return (
    <div className="offerCard">
      <img src={pictureUrl} className="offerImg" alt={city}></img>
      <p className="top-right">{city}</p>
      <p className="bottom-right">{country}</p>
      <p className="top-left">{price}</p>
    </div>
  );
}
