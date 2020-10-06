import React, { createContext, useState } from "react";

export const SearchState = createContext();

export const SearchContext = (props) => {
  const [searchParameters, setSearchParameters] = useState({
    fromCode: null,
    toCode: null,
    tripDate: null,
    returnDate: null,
    person: null,
    timeFrom: null,
    timeTo: null,
    priceFrom: null,
    priceTo: null,
    airLineCode: null,
  });
  return (
    <SearchState.Provider
      values={{ parameters: [searchParameters, setSearchParameters] }}
    >
      {props.children}
    </SearchState.Provider>
  );
};
