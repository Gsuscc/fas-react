import React from 'react'
import { UserState } from '../../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import flightFetch from '../../dataHandler/dataHandler'
import { ErrorState } from "../../context/ErrorContext";

const useStyles = makeStyles((theme) => ({
  bookFlight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ffffffaa",
    borderRadius: '5px',
    padding: '15px',
    margin: '15px auto',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    "&:hover":{
      transform: 'scale(1.2)',
      backgroundColor: "#aaffaaaa",
      cursor: 'pointer'
    }
  },
}));

export default function BookFlight(props) {

  const { isLoggedIn, setOpenLogin, setLoginDetails } = React.useContext(UserState);
  const classes = useStyles();
  const toFlight = props.toFlightId;
  const returnFlight = props.returnFlightId;
  const { setError } = React.useContext(ErrorState);
  const [isBooked, setIsBooked] = React.useState(false)

  const handleBooking = () => {
      let queryparam = `id=${toFlight}`;
      if (returnFlight) queryparam += "&returnId=" + returnFlight;
      flightFetch(`http://localhost:8080/favourite/book?${queryparam}`, confirmBooking, (error) => {setError(error)})
  }

  const confirmBooking = (data) => {
    console.log("itt")
    setIsBooked(true)
    setTimeout(() => setIsBooked(false), 3000)
  }

  const handleLogin = () => {
    setLoginDetails({
      message: "You need to be logged in",
      username: null,
    })
    setOpenLogin(true)
  }

  return (
    <div className={classes.bookFlight} onClick={!isBooked && (isLoggedIn ? handleBooking : handleLogin )}>
      <img src={isLoggedIn ? "/booking.png" : "/booking-black.png"} alt="book flight" className="book-icon"></img>
      {isBooked ? "Successfully booked" : "Book this ticket"}    
    </div>
  )
}
