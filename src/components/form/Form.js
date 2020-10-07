import React, { useRef } from "react";
import AirportChoose from "./AirportChoose";
import DatePicker from "./DatePicker";
import "./Form.css";
import Passengers from "./Passengers";
import Switch from "./Switch";
import Button from "@material-ui/core/Button";

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
      <Passengers />
      <Switch />
      <Button className="search-button" variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}
