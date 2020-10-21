import React from "react";
import "./Flight.css";

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

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
        <div className="arrival-place">
          <span>{countryToFlag(props.flight.fromAirport.countryCode)} </span>
          {props.flight.fromAirport.city.cityName}
        </div>
        <div className="departure-code">{props.flight.fromAirport.code}</div>
      </div>
      <div className="flight-route-line">
        <span class="line arrow-left"></span>
        <span className="distance">{props.flight.distance.toFixed(2)} Km</span>
        <div className="travel-time">
          {props.flight.travelTime.slice(1, -6)}h
        </div>
        <span class="line arrow-right"></span>
      </div>

      <div className="arrive">
        <div className="arrival-time">
          {props.flight.arrival.replace("T", " ").slice(0, -3)}
        </div>
        <div className="arrival-place">
          <span>{countryToFlag(props.flight.toAirport.countryCode)} </span>
          {props.flight.toAirport.city.cityName}
        </div>
        <div className="arrival-code">{props.flight.toAirport.code}</div>
      </div>
    </div>
  );
}
