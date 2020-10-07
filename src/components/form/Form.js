import React, { useRef } from "react";
import AirportChoose from "./AirportChoose";
import DatePicker from "./DatePicker";
import "./Form.css";
import Person from "./Person";
import Switch from "./Switch";

export default function Form() {
  const fromAirport = useRef();
  const toAirport = useRef();

  return (
    <div className="search-area">
      <AirportChoose
        inputId="airportOne"
        label="From: "
        reference={fromAirport}
      />
      <AirportChoose inputId="airportTwo" label="To: " reference={toAirport} />
      <DatePicker label="Departure Date" />
      <DatePicker label="Arrival Date" />
      <Person />
      <Switch />
      <button className="search-button">Search</button>
    </div>
  );
}
