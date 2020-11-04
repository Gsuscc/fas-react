import React from 'react'
import { ErrorState } from "../../context/ErrorContext";
import flightFetch from '../../dataHandler/dataHandler'
import Book from './Book';
import './MyFlights.css'

export default function MyFlights() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [books, setBooks] = React.useState([]);
  const { setError } = React.useContext(ErrorState);
  

  React.useEffect(() => {
    flightFetch('http://localhost:8080/favourite/flight', fillBooks, (error) => setError(error))  
  }, [setError])

  const fillBooks = (data) => {
    console.log(data)
    setBooks(data)
    setIsLoading(false)
  }

  return (
    <div className="myflights-container">
      {isLoading && "Loading"}
      {!isLoading &&
          <div className="books-container">
            {books.map(book => <Book book={book} />)}
          </div>
      }
    </div>
  )
}
