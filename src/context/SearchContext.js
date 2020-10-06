import React, { createContext, useState } from "react";

export const SearchState = createContext();

export const SearchContext = (props) => {
  return <SearchState.Provider>{props.children}</SearchState.Provider>;
};
