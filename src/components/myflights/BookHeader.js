import React from 'react'

export default function BookHeader() {
  return (
    <div className="book-container book-header">
      <div className="book-id">
        <div className="book-header-item">
          Transaction ID
        </div>
      </div>
      <div className="book-when">
        <div className="book-header-item">
          Booked at
        </div>  
      </div>
      <div className="book-between">
        <div className="book-header-item">
          Between
        </div>
      </div>
      <div className="book-passengers">
        <div className="book-header-item">
          Passengers
        </div>
      </div>
    </div>
  )
}
