import React from 'react'
import Grow from '@material-ui/core/Grow';
import './Ticket.css'
import Barcode from 'react-barcode';

export default function Ticket(props) {
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setTimeout(setToReady, props.delay)
  }, [props.delay])

  const setToReady = () => {
    setIsReady(true)
  }


  return (
    <React.Fragment>
      {isReady && 
        <Grow in={isReady}>
          <div className="ticket-container">
            <div className="ticket-left-side">
              <div className="ticket-header-left">
                <img src={props.ticket.flight.airline.logo} alt="airline-logo" width="30px"></img>
                <div className="ticket-header-airline">{props.ticket.flight.airline.name.toUpperCase()}</div>
              </div>
              <div className="ticket-body-left">
                <div>FROM:</div>
                <div className="boarding-ticket-field">{props.ticket.flight.fromAirport.label}</div>
                <div >DESTINATION:</div>
                <div className="boarding-ticket-field">{props.ticket.flight.toAirport.label}</div>
                <div>DEPARTURE:</div>
                <div className="boarding-ticket-field">{props.ticket.flight.departure.replace("T", " ")}</div>
                <div className="barcode" ><Barcode  value={props.ticket.id + props.ticket.flight.airline.code + props.ticket.flight.id} height="20" width="1" displayValue="false" background="floralwhite" /></div>
              </div>
            </div>
            <div className="perforation">
              
            </div>
            <div className="ticket-right-side">
              <div className="ticket-header-right">
                  BOARDING TICKET 
              </div>
              <div className="ticket-body-right">
                <div>FROM</div>
                <div className="boarding-ticket-field">{props.ticket.flight.fromAirport.code}</div>
                <div>TO</div>
                <div className="boarding-ticket-field">{props.ticket.flight.toAirport.code}</div>
                <div>DATE</div>
                <div className="boarding-ticket-field">{props.ticket.flight.departure.split("T")[0]}</div>
                <div>TIME</div>
                <div className="boarding-ticket-field">{props.ticket.flight.departure.split("T")[1]}</div>
                <div>CODE</div>
                <div className="boarding-ticket-field">{props.ticket.flight.airline.code +"-"+ props.ticket.flight.id}</div>
                <div>ID</div>
                <div className="boarding-ticket-field">{props.ticket.id}</div>
              </div>
            </div>
           
          </div>
        </Grow>
      }
    </React.Fragment>
  )
}
