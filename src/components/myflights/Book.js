import React from 'react'
import './Book.css'

export default function Book(props) {
  return (

    <div className="book-container">
      <div className="book-id">
        Transaction id: {props.book.id}
      </div>
      <div className="book-when">
        Booked at: {props.book.bookedAt}
      </div>
      <div className="book-between">
        Between: {props.book.fromAirport} and {props.book.toAirport}
      </div>
      <div className="book-passengers">
        Passengers: {props.book.passengers}
      </div>
      
      
    </div>
  )
}
