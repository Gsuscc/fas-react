import React from 'react'
import { ErrorState } from '../../context/ErrorContext';
import { UserState } from '../../context/UserContext'
import CityCard from './CityCard';
import "./MyCities.css"
import AdvertiseSwipe from "../specialOffer/AdvertiseSwipe";


export default function MyCities() {
    const {favouriteCities} = React.useContext(UserState)

    return (
        <div>
            <div className="my-cities-title"><h2>Your favourite destinations</h2></div>
            <div className="favourite-cities-container">
                {favouriteCities.map((city => <CityCard city={city}/>))}
            </div>
            {favouriteCities.length < 1 && 
            <div className="empty-container"><div className="book-container">You don't have any favourite city yet. You can choose between diferent destination from the list below by clicking on the heart icon.</div></div>}
            <AdvertiseSwipe />
        </div>
    )
}
