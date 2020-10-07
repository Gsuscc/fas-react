import React, { useContext } from "react";
import DatePicker from "./DatePicker";
import "./Form.css";
import Passengers from "./Passengers";
import Switch from "./Switch";
import AutoCompleter from "./AutoCompleter";
import Button from "@material-ui/core/Button";
import { GeneralState } from "../../context/SearchGeneral";

export default function Form() {
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
    console.log(fromAirport.code);
    console.log(toAirport.code);
    console.log(tripDate);
    console.log(returnDate);
    console.log(person);
    console.log(isReturn);
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
      />
      <DatePicker
        label="Return date"
        value={returnDate}
        setValue={setReturnDate}
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
