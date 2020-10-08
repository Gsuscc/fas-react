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
          {props.flight.departure.replace("T", " ")}
        </div>
        <div className="departure-code">{props.flight.fromCode}</div>
      </div>
      <div className="flight-route-line">{props.flight.distance}</div>
      <div className="arrive">
        <div className="arrival-time">
          {props.flight.arrival.replace("T", " ")}
        </div>

        <div className="arrival-code">{props.flight.toCode}</div>
      </div>
    </div>
  );
}
