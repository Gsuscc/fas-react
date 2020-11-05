import React, { useState } from 'react'
import "./CityCard.css"
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CityCard(props) {
    console.log(props)
    const [isChecked, setIsChecked ] = useState();

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

    }
    const handleChecked = () => {
        setIsChecked(!isChecked)
    }
    

    return (
    <div className="city-card-root" onClick={handleClick}>
      <img src={props.city.cityImage} className="city-card-img" alt={props.city}></img>
      <div className="city-info-container">
            <div className="city-name">{props.city.cityName}</div>
            <div className="city-country">{props.city.countryName}</div>
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
