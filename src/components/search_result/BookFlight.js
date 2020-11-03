import React from 'react'
import { UserState } from '../../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';

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
  },
}));

export default function BookFlight() {

  const { isLoggedIn, setOpenLogin, setLoginDetails } = React.useContext(UserState);
  const classes = useStyles();
  const handleBooking = () => {

  }

  const handleLogin = () => {
    setLoginDetails({
      message: "You need to be logged in",
      username: null,
    })
    setOpenLogin(true)
  }

  return (
    <div className={classes.bookFlight}>
      Book this ticket: <img src={isLoggedIn ? "/booking.png" : "/booking-black.png"} onClick={isLoggedIn ? handleBooking : handleLogin } alt="book flight" className="book-icon"></img>
    </div>
  )
}
