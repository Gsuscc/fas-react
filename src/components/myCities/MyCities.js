import React from 'react'
import { ErrorState } from '../../context/ErrorContext';
import { UserState } from '../../context/UserContext'
import CityCard from './CityCard';
import "./MyCities.css"


export default function MyCities() {
    const {favouriteCities, refreshFavouriteCities} = React.useContext(UserState)
    const { setError } = React.useContext(ErrorState);



    return (
        <div>
            <div className="my-cities-title"><h2>Your favourite destinations</h2></div>
            <div className="favourite-cities-container">
                {favouriteCities.map((city => <CityCard city={city}/>))}
            </div>
        </div>
    )
}
