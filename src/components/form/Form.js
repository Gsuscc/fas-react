import React, { useContext } from "react";
import DatePicker from "./DatePicker";
import "./Form.css";
import Passengers from "./Passengers";
import Switch from "./Switch";
import AutoCompleter from "./AutoCompleter";
import Button from "@material-ui/core/Button";
import { GeneralState } from "../../context/SearchGeneral";
import { ErrorState } from "../../context/ErrorContext";

export default function Form() {
  const { setError } = useContext(ErrorState);
  const { general } = useContext(GeneralState);
  const [
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
  ] = general;

  const submitHandler = () => {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (!fromAirport) setError("You have to choose a departure airport!");
    else if (!toAirport) setError("You have to choose a destination airport!");
    else if (tripDate < today) setError("Departure date can't be in the past!");
    else if (isReturn && returnDate < tripDate)
      setError("Return date must be later than departure date!");
    else {
      const queryUrl = `http://localhost:8080/flight/query?fromCode=${
        fromAirport.code
      }&toCode=${toAirport.code}&tripDate=${tripDate
        .toISOString()
        .substr(0, 10)}${
        isReturn
          ? "&returnDate=" + returnDate.toISOString().substr(0, 10)
          : null
      }&person=${person}`;
      console.log(queryUrl);
    }
  };

  return (
    <div className="search-area">
      <AutoCompleter
        inputId="airportOne"
        label="From (city or airport)"
        value={fromAirport}
        setValue={setFromAirport}
      />
      <AutoCompleter
        inputId="airportTwo"
        label="To (city or airport)"
        value={toAirport}
        setValue={setToAirport}
      />
      <DatePicker
        label="Departure date"
        value={tripDate}
        setValue={setTripDate}
        disabled={false}
      />
      <DatePicker
        label="Return date"
        value={returnDate}
        setValue={setReturnDate}
        disabled={!isReturn}
      />
      <Passengers value={person} setValue={setPerson} />
      <Switch value={isReturn} setValue={setIsReturn} />
      <Button
        className="search-button"
        variant="contained"
        color="primary"
        onClick={submitHandler}
      >
        Search
      </Button>
    </div>
  );
}
