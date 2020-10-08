import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import flightFetch from "../dataHandler/dataHandler";
import { ErrorState } from "./ErrorContext";

export const GeneralState = createContext();

export const GeneralContext = (props) => {
  const { setError } = useContext(ErrorState);
  const [fromAirport, setFromAirport] = useState(null);
  const [toAirport, setToAirport] = useState(null);
  const [tripDate, setTripDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [person, setPerson] = useState(1);
  const [isReturn, setIsReturn] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const isValidSearch = useCallback(() => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (!fromAirport) return false;
    else if (!toAirport) return false;
    else if (tripDate < today) return false;
    else if (isReturn && returnDate < tripDate) return false;
    return true;
  }, [fromAirport, isReturn, returnDate, toAirport, tripDate]);

  const validateSearch = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (!fromAirport) setError("You have to choose a departure airport!");
    else if (!toAirport) setError("You have to choose a destination airport!");
    else if (tripDate < today) setError("Departure date can't be in the past!");
    else if (isReturn && returnDate < tripDate)
      setError("Return date must be later than departure date!");
  };

  const startFetch = useCallback(() => {
    console.log(tripDate)
    const queryUrl = `http://localhost:8080/flight/query?fromCode=${
      fromAirport.code
    }&toCode=${toAirport.code}&tripDate=${tripDate
      .toISOString()
      .substr(0, 10)}${
      isReturn ? "&returnDate=" + returnDate.toISOString().substr(0, 10) : ""
    }&person=${person}`;
    flightFetch(queryUrl, (data) => setSearchResult(data.values), setError);
  }, [
    fromAirport,
    isReturn,
    person,
    returnDate,
    setError,
    toAirport,
    tripDate,
  ]);

  useEffect(() => {
    if (isValidSearch()) {
      startFetch();
    }
  }, [
    startFetch,
    isValidSearch,
    fromAirport,
    isReturn,
    person,
    returnDate,
    toAirport,
    tripDate,
  ]);

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
        validateSearch: validateSearch,
        startFetch: startFetch,
        isValidSearch: isValidSearch,
        result: [searchResult, setSearchResult],
      }}
    >
      {props.children}
    </GeneralState.Provider>
  );
};
