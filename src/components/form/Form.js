import React, { useContext } from "react";
import DatePicker from "./DatePicker";
import "./Form.css";
import Passengers from "./Passengers";
import Switch from "./Switch";
import AutoCompleter from "./AutoCompleter";
import Button from "@material-ui/core/Button";
import { GeneralState } from "../../context/SearchGeneral";
import { useHistory } from "react-router-dom";

export default function Form() {
  const { general, isValidSearch, validateSearch } = useContext(GeneralState);
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
  const history = useHistory();
  const submitHandler = () => {
    validateSearch();
    if (isValidSearch()) {
      history.push("/search");
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
