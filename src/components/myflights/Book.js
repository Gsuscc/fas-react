import React from 'react'
import './Book.css'
import Ticket from './Ticket';

export default function Book(props) {

  const [isTicketsOpen, setIsTicketsOpen] = React.useState(false)

  const handleOpenTickets = () => {
    setIsTicketsOpen(!isTicketsOpen);
  }

  return (
    <React.Fragment>
      <div className="book-container" onClick={handleOpenTickets}>
        <div className="book-id">
            {props.book.id}
        </div>
        <div className="book-when">
            {props.book.bookedAt.substring(0, 19).replace('T', ' ')}
        </div>
        <div className="book-between">
            <div>{props.book.fromAirport}</div>
            <div>{props.book.toAirport}</div>
        </div>
        <div className="book-passengers">
            {props.book.passengers}
        </div>
      </div>
      {isTicketsOpen && props.book.tickets.map((ticket, index) => <Ticket ticket={ticket} delay={index * 200} />)}
    </React.Fragment>

  )
}
