import React, { createContext, useState, useCallback } from "react";

export const ErrorState = createContext();

export const ErrorContext = (props) => {
  const [error, setError] = useState(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <ErrorState.Provider
      value={{
        error: error,
        setError: setError,
        clearError: clearError,
      }}
    >
      {props.children}
    </ErrorState.Provider>
  );
};
