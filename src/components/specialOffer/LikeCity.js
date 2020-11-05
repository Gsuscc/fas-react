import React from 'react'
import { ErrorState } from '../../context/ErrorContext';
import { UserState } from '../../context/UserContext';
import flightFetch from '../../dataHandler/dataHandler'
import "./LikeCity.css"

export default function LikeCity(props) {

  const [onMouseOver, setOnMouseOver] = React.useState(false)
  const { setError } = React.useContext(ErrorState);
  const { likedCityIds, refreshFavouriteCities } = React.useContext(UserState)

  const isLiked = (id) => {
    return likedCityIds.includes(id)
  }

  const handleMouseOver = () => {
    setOnMouseOver(true)
  }

  const handleMouseLeave = () => {
    setOnMouseOver(false)
  }

  const handleClick = (event) => {
    event.stopPropagation();
    if (isLiked(props.id)) {
      flightFetch(`http://localhost:8080/favourite/removeCity?id=${props.id}`, 
        handleModifyCity, 
        (error) => setError(error))
    } else {
      flightFetch(`http://localhost:8080/favourite/addCity?id=${props.id}`, 
        handleModifyCity, 
        (error) => setError(error))
    }
    // const element = event.target
    // element.className="growing"
    // setTimeout(() => {element.className=""}, 300)
  }

  const handleModifyCity = (data) => {
    refreshFavouriteCities()
  }

  return (
    <div
      onMouseOver={handleMouseOver} 
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} 
      >
      <img 
          src="/like.png" 
          alt="like"
          width="30px"
          className={onMouseOver ? "visible" : "hidden"}>
      </img>
      <img 
          src="/liketo.png"
          alt="liketo"
          width="30px"
          className={!isLiked(props.id) && !onMouseOver ? "visible" : "hidden"}>
      </img>
      <img
          src="/liked.png"
          alt="liked"
          width="30px"
          className={isLiked(props.id) && !onMouseOver ? "visible" : "hidden"}>
      </img>
    </div>

  )
}
