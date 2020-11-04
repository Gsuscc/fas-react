import React from 'react'
import { ErrorState } from "../../context/ErrorContext";
import flightFetch from '../../dataHandler/dataHandler'
import Ticket from './Ticket';
import './MyFlights.css'

export default function MyFlights() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [tickets, setTickets] = React.useState([]);
  const { setError } = React.useContext(ErrorState);
  

  React.useEffect(() => {
    flightFetch('http://localhost:8080/favourite/flight', fillTickets, (error) => setError(error))  
  }, [setError])

  const fillTickets = (data) => {
    console.log(data)
    setTickets(data)
    setIsLoading(false)
  }

  return (
    <div className="myflights-container">
      {isLoading && "Loading"}
      {!isLoading &&
          <div className="tickets-container">
            {tickets.map(ticket => <Ticket ticket={ticket} />)}
          </div>
      }
    </div>
  )
}
