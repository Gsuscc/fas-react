import React, { createContext, useState, useCallback } from "react";
import flightFetch from "../dataHandler/dataHandler";
import { ErrorState } from "./ErrorContext";

export const UserState = createContext();

export const UserContext = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(window.sessionStorage.getItem('fas-user') && window.sessionStorage.getItem('fas-token'));
  const [openLogin, setOpenLogin] = React.useState(false);
  const [favouriteCities, setFavouriteCities] = React.useState([]);
  const [likedCityIds, setLikeCityIds] = React.useState([])
  const { setError } = React.useContext(ErrorState);
  const [loginDetails, setLoginDetails] = React.useState({
    message: null,
    username: null,
  });

  const fillFavourites = (data) => {
    console.log(data)
    setFavouriteCities(data);
  }

  React.useEffect(() => {
    const cityIds = []
    favouriteCities.map((city) => cityIds.push(city.city.id))
    setLikeCityIds(cityIds)
  }, [favouriteCities, setLikeCityIds])

  const refreshFavouriteCities = useCallback(() => {
    flightFetch("http://localhost:8080/favourite/getCities", fillFavourites, (error) => setError(error))
  })

  React.useEffect(() => {
    if (isLoggedIn) {
      refreshFavouriteCities()
    } else {
      setFavouriteCities([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, setError])

  return (
    <UserState.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        openLogin: openLogin,
        setOpenLogin: setOpenLogin,
        loginDetails: loginDetails,
        setLoginDetails: setLoginDetails,
        favouriteCities: favouriteCities,
        refreshFavouriteCities: refreshFavouriteCities,
        likedCityIds: likedCityIds
      }}
    >
      {props.children}
    </UserState.Provider>
  );
};
