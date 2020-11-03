import React, { createContext, useState, useCallback } from "react";

export const UserState = createContext();

export const UserContext = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('fas-user') && window.localStorage.getItem('fas-token'));
  const [openLogin, setOpenLogin] = React.useState(false);
  const [loginDetails, setLoginDetails] = React.useState({
    message: null,
    username: null,
  });
  return (
    <UserState.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        openLogin: openLogin,
        setOpenLogin: setOpenLogin,
        loginDetails: loginDetails,
        setLoginDetails: setLoginDetails,
      }}
    >
      {props.children}
    </UserState.Provider>
  );
};
