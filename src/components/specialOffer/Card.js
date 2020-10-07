import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="offerCard">
      <img
        src={props.offer.pictureUrl}
        className="offerImg"
        alt={props.offer.ctiy}
      ></img>
      <p>{props.offer.city}</p>
      <p>{props.offer.country}</p>
      <p>{props.offer.price}</p>
    </div>
  );
}
