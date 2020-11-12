import React, {useState, useCallback} from "react";
import HereMap from "../ui/HereMap";
import Flight from "./Flight";
import "./ResultCard.css";
import { UserState } from '../../context/UserContext';
import BookFlight from "./BookFlight";

export default function ResultCard(props) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const openDetails = useCallback(
    () => {
      setIsDetailsVisible(!isDetailsVisible)
    },
    [isDetailsVisible],
  )


  return (
    <React.Fragment>
      <div className="result-card-container" onClick={openDetails}>
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
              ) * parseInt(props.flight.person)
            : parseInt(props.flight.ticket.touristPrice) * parseInt(props.flight.person)}
          $
          <div className="person">{props.flight.person} <img className="user-icon-img" src="user-icon.png" alt="user-icon"></img></div>
        </div>
      </div>
      {isDetailsVisible &&
        <React.Fragment>
          <BookFlight toFlightId={props.flight.ticket.id} returnFlightId={
                                    props.flight.returnTicket?
                                    props.flight.returnTicket.id
                                    : null} person={props.flight.person}/>

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
        </React.Fragment>
      }

    </React.Fragment>

  );
}
