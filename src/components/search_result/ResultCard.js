import React from "react";
import Flight from "./Flight";
import "./ResultCard.css";

export default function ResultCard(props) {
  return (
    <div className="result-card-container">
      <div className="flights">
        <Flight flight={props.flight.ticket} />
        {props.flight.returnTicket && (
          <Flight flight={props.flight.returnTicket} />
        )}
      </div>
      <div className="price"></div>
    </div>
  );
}
