import React from 'react'
import { ErrorState } from '../../context/ErrorContext';
import flightFetch from '../../dataHandler/dataHandler'
import "./LikeCity.css"

export default function LikeCity(props) {

  const [onMouseOver, setOnMouseOver] = React.useState(false)
  const { setError } = React.useContext(ErrorState);

  const handleMouseOver = () => {
    setOnMouseOver(true)
  }

  const handleMouseLeave = () => {
    setOnMouseOver(false)
  }

  const handleClick = (event) => {
    event.stopPropagation();
    flightFetch(`http://localhost:8080/favourite/addCity?id=${props.id}`, 
      handleAddCity, 
      (error) => setError(error))
  }

  const handleAddCity = (data) => {
    console.log(data)
    //todo
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
          className={onMouseOver ? "hidden" : "visible"}>
      </img>
    </div>

  )
}
