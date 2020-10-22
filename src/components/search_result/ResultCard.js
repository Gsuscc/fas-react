import React, {useState, useCallback} from "react";
import HereMap from "../ui/HereMap";
import Flight from "./Flight";
import "./ResultCard.css";

export default function ResultCard(props) {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const switchIsMapVisible = useCallback(
    () => {
      setIsMapVisible(!isMapVisible)
    },
    [isMapVisible],
  )


  return (
    <React.Fragment>
      <div className="result-card-container" onClick={switchIsMapVisible}>
        <div className="flights">
          <Flight flight={props.flight.ticket} />
          {props.flight.returnTicket && (
            <Flight flight={props.flight.returnTicket} />
          )}
        </div>
        <div className="price">
          {props.flight.returnTicket
            ? parseInt(
                props.flight.ticket.touristPrice +
                  props.flight.returnTicket.touristPrice
              )
            : parseInt(props.flight.ticket.touristPrice)}
          $
        </div>
      </div>
      {isMapVisible &&
      <div className="map-container">
        <div className="map-frame">
        <HereMap 
        start={{
          lat: parseFloat(props.flight.ticket.fromAirport.latitude),
          lng: parseFloat(props.flight.ticket.fromAirport.longitude),
        }} 
        end={{
          lat: parseFloat(props.flight.ticket.toAirport.latitude),
          lng: parseFloat(props.flight.ticket.toAirport.longitude),
        }} />
        </div>
        </div>
        }

    </React.Fragment>

  );
}
