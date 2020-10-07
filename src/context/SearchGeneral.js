import React, { createContext, useState } from "react";

export const GeneralState = createContext();

export const GeneralContext = (props) => {
  const [fromAirport, setFromAirport] = useState();
  const [toAirport, setToAirport] = useState();
  const [tripDate, setTripDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [person, setPerson] = useState(1);
  const [isReturn, setIsReturn] = useState(true);

  return (
    <GeneralState.Provider
      value={{
        general: [
          fromAirport,
          setFromAirport,
          toAirport,
          setToAirport,
          tripDate,
          setTripDate,
          returnDate,
          setReturnDate,
          person,
          setPerson,
          isReturn,
          setIsReturn,
        ],
      }}
    >
      {props.children}
    </GeneralState.Provider>
  );
};
