import React from "react";

export default function AirportChoose(props) {
  return (
    <React.Fragment>
      <input list="Airport">
        <datalist id="Airport">
          {props.airports.map((airport) => {
            return <option value={airport.code}>{airport.label}</option>;
          })}
        </datalist>
      </input>
    </React.Fragment>
  );
}
