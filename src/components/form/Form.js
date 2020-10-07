import React, { useState } from "react";
import DatePicker from "./DatePicker";
import "./Form.css";
import Person from "./Person";
import Switch from "./Switch";
import AutoCompleter from "./AutoCompleter";

export default function Form() {
  const [airportFrom, setAirportFrom] = useState();
  const [airportTo, setAirportTo] = useState();

  return (
    <div className="search-area">
      <AutoCompleter
        inputId="airportOne"
        value={airportFrom}
        setValue={setAirportFrom}
      />
      <AutoCompleter
        inputId="airportTwo"
        value={airportTo}
        setValue={setAirportTo}
      />
      <DatePicker label="Departure Date" />
      <DatePicker label="Arrival Date" />
      <Person />
      <Switch />
      <button className="search-button">Search</button>
    </div>
  );
}
