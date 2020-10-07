import React, { createContext, useState } from "react";

export const FilterState = createContext();

export const FilterContext = (props) => {
  const [timeFrom, setTimeFrom] = useState();
  const [timeTo, setTimeTo] = useState();
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  const [airLineCode, setAirLineCode] = useState();

  return (
    <FilterState.Provider
      value={{
        filter: [
          timeFrom,
          setTimeFrom,
          timeTo,
          setTimeTo,
          priceFrom,
          setPriceFrom,
          priceTo,
          setPriceTo,
          airLineCode,
          setAirLineCode,
        ],
      }}
    >
      {props.children}
    </FilterState.Provider>
  );
};
