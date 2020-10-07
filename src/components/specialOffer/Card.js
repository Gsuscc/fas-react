import React from "react";
import "./Card.css";

export default function Card(props) {
  const { pictureUrl, city, country, price } = props.card;
  return (
    <div className="offerCard">
      <img src={pictureUrl} className="offerImg" alt={city}></img>
      <div className="top-left">{city}</div>
      <div className="bottom-right">{country}</div>
      <div className="centered">$ {price}</div>
    </div>
  );
}
