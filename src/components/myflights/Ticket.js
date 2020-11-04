import React from 'react'
import './Ticket.css'

export default function Ticket(props) {
  return (

    <div className="ticket-container">
      Ticket {props.ticket.id}
    </div>
  )
}
