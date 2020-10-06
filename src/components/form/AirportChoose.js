import React, { useState, useEffect, useCallback } from "react";
import flightFetch from "../../dataHandler/dataHandler";

const AirportChoose = React.memo((props) => {
  const [airports, setAirports] = useState([]);
  const [text, setText] = useState("");
  const inputRef = props.reference;

  const fillOptions = useCallback((data) => {
    setAirports(data.values);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text === inputRef.current.value) {
        if (inputRef.current.value.length >= 2) {
          const queryUrl = `http://localhost:8080/airport/query?substring=${text}`;
          flightFetch(queryUrl, fillOptions);
        } else {
          setAirports([]);
        }
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [text, fillOptions, inputRef]);

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        list={props.inputId}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <datalist id={props.inputId}>
        {airports.map((airport) => {
          return (
            <option value={airport.code} key={airport.code}>
              {airport.label}
            </option>
          );
        })}
      </datalist>
    </React.Fragment>
  );
});

export default AirportChoose;
