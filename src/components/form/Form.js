import React, { useRef } from "react";
import AirportChoose from "./AirportChoose";

export default function Form() {
  const fromAirport = useRef();
  const toAirport = useRef();

  return (
    <div>
      <AirportChoose inputId="airportOne" reference={fromAirport} />
      <AirportChoose inputId="airportTwo" reference={toAirport} />
    </div>
  );
}
