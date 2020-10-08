import React, { createContext, useState } from "react";

export const ResultState = createContext();

export const ResultContext = (props) => {
  const [searchResult, setSearchResult] = useState();

  return (
    <ResultState.Provider
      value={{
        result: [searchResult, setSearchResult],
      }}
    >
      {props.children}
    </ResultState.Provider>
  );
};
