import React, { useEffect, useState } from 'react'
import "./CityCard.css"
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import flightFetch from '../../dataHandler/dataHandler';
import { ErrorState } from '../../context/ErrorContext';
import { UserState } from '../../context/UserContext';


export default function CityCard(props) {
    console.log(props)
    const [isChecked, setIsChecked ] = useState(props.city.notification);
    const { refreshFavouriteCities } = React.useContext(UserState)
    const { setError } = React.useContext(ErrorState);


    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

    const handleClick = (event) => {
      flightFetch(`http://localhost:8080/favourite/removeCity?id=${props.city.city.id}`, 
        refreshFavouriteCities, 
        (error) => setError(error))
    }

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        flightFetch(`http://localhost:8080/favourite/notify?id=${props.city.city.id}&isRequested=${isChecked}`, (data) => {
            refreshFavouriteCities(data)
        }, (error) => setError(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked,  setError])
    
    return (
    <div className="city-card-root">
      <img src={props.city.city.cityImage} className="city-card-img" alt={props.city.city}></img>
      <div className="city-info-container">
            <div className="city-name">{props.city.city.cityName}</div>
            <div className="city-country">{props.city.city.countryName}</div>
            <div className="card-control-panel">
                 <div className="delete-icon.png">
                    <img className="delete-icon-img" src="/delete-sign.png" alt="delete" onClick={handleClick}></img>
                </div>
                    <FormControlLabel
                        control={<GreenCheckbox checked={isChecked} onChange={handleChecked} name="notificationBox" />}
                        label="Notify Me"
                    />
                </div>
      </div>
    </div>

    )
}
