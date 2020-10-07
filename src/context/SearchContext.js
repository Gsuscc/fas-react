import React, { createContext, useState } from "react";

export const SearchState = createContext();

export const SearchContext = (props) => {
  const [searchResult, setSearchResult] = useState();
  const [fromCode, setFromCode] = useState();
  const [toCode, setToCode] = useState();
  const [tripDate, setTripDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [person, setPerson] = useState(1);
  const [timeFrom, setTimeFrom] = useState();
  const [timeTo, setTimeTo] = useState();
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  const [airLineCode, setAirLineCode] = useState();

  return (
    <SearchState.Provider
      values={{
        result: [searchResult, setSearchResult],
        general: [
          fromCode,
          setFromCode,
          toCode,
          setToCode,
          tripDate,
          setTripDate,
          returnDate,
          setReturnDate,
          person,
          setPerson,
        ],
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
    </SearchState.Provider>
  );
};
