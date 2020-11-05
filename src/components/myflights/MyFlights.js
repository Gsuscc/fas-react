import React from 'react'
import { ErrorState } from "../../context/ErrorContext";
import flightFetch from '../../dataHandler/dataHandler'
import Book from './Book';
import BookHeader from './BookHeader';
import './MyFlights.css'
import { useHistory } from "react-router-dom";

export default function MyFlights() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [books, setBooks] = React.useState([]);
  const { setError } = React.useContext(ErrorState);
  const history = useHistory();

  React.useEffect(() => {
    flightFetch('http://localhost:8080/favourite/flight', fillBooks, (error) => setError(error))  
  }, [setError])

  const fillBooks = (data) => {
    setBooks(data)
    setIsLoading(false)
  }

  const returnToMainPage = () => history.push("/")

  return (
    <div className="myflights-container">
      <div className="books-container">
        <BookHeader />
          {isLoading && <div>"Loading..."</div>}
          {!isLoading && books.map(book => <Book book={book} />)}
          {!isLoading && books.length < 1 && 
            <div className="book-container" onClick={returnToMainPage}>You dont have any booked flight yet. Click here to find one.</div>
          }
      </div>
    </div>
  )
}
