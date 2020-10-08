import React from "react";
import "./Flight.css";

export default function Flight(props) {
  return (
    <div className="flight-conatiner">
      <div>
        <img
          className="airline-logo"
          src={props.flight.airline.logo}
          alt="logo"
        ></img>
      </div>

      <div className="airline-name">
        ({props.flight.airline.code}) {props.flight.airline.name}
      </div>

      <div className="start">
        <div className="departure-time">
          {props.flight.departure.replace("T", " ").slice(0, -3)}
        </div>
        <div className="departure-code">{props.flight.fromCode}</div>
      </div>
      <div className="flight-route-line">
        <span class="line arrow-left"></span>
        <span className="distance">{props.flight.distance.toFixed(2)} Km</span>
        <span class="line arrow-right"></span>
      </div>
      <div className="travel-time">{props.flight.travelTime}</div>
      <div className="arrive">
        <div className="arrival-time">
          {props.flight.arrival.replace("T", " ").slice(0, -3)}
        </div>

        <div className="arrival-code">{props.flight.toCode}</div>
      </div>
    </div>
  );
}
