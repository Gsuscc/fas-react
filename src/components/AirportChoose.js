import React, { useState, useEffect, useCallback } from "react";
import flightFetch from "../dataHandler/dataHandler";

export default function AirportChoose(props) {
  const [airports, setAirports] = useState([]);
  const [text, setText] = useState("");

  const callBack = useCallback((data) => {
    setAirports(data.values);
  }, []);

  useEffect(() => {
    if (text.length > 2) {
      flightFetch(
        `http://localhost:8080/airport/query?substring=${text}`,
        callBack
      );
    }
  }, [text, callBack]);

  return (
    <React.Fragment>
      <input
        list="Airport"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <datalist id="Airport">
        {airports.map((airport) => {
          return <option value={airport.code}>{airport.label}</option>;
        })}
      </datalist>
    </React.Fragment>
  );
}
