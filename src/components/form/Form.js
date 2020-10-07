import React, { useState } from "react";
import DatePicker from "./DatePicker";
import "./Form.css";
import Passengers from "./Passengers";
import Switch from "./Switch";
import AutoCompleter from "./AutoCompleter";
import Button from "@material-ui/core/Button";

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
      <Passengers />
      <Switch />
      <Button className="search-button" variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}
