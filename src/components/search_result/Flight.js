import React from "react";

export default function Flight(props) {
  return (
    <div className="flight-conatiner">
      <div className="airline">
        <img
          className="airline-logo"
          src={props.flight.airline.logo}
          alt="logo"
        ></img>
        <div className="airline-name">{props.flight.airline.name}</div>
      </div>
      <div className="start">
        <div className="departure-time">{props.flight.departure}</div>
        <div className="departure-code">{props.flight.fromCode}</div>
      </div>
      <div className="flight-route-line">{props.flight.distance}</div>
      <div className="arrive">
        <div className="arrival-time">{props.flight.arrival}</div>

        <div className="arrival-code">{props.flight.toCode}</div>
      </div>
    </div>
  );
}
